---
title: 基于Redis的分布式锁
date: 2022-11-12
tags:
 - Go
 - Lua
 - Redis
categories:
 - 系统设计
---

<!-- more -->

## 分布式锁
> 分布式锁即在分布式环境下不同实例之间抢一把锁，相比较单一实例的锁，分布式环境下带来的问题更多，例如网络问题。
> 分布式锁可以通过多种途径实现，例如:Zookeeper等。由于Redis是经常使用的中间件，本篇内容基于Redis实现分布式锁。

特性：
- 互斥性：任意时刻，只有一个客户端能持有锁；
- 锁超时释放：持有锁超时，可以释放，防止不必要的资源浪费，也可以防止死锁；
- 可重入性：一个线程如果获取了锁之后，可以再次对其请求加锁；
- 高性能和高可用：加锁和解锁需要开销尽可能低，同时也要保证高可用，避免分布式锁失效；
- 安全性：锁只能被持有的客户端释放，不能被其他客户端释放

### 简单版本
> 锁的特性就是排他性，这里可以通过Redis的命令：`SETNX`，该命令：
> - 只在键key不存在的情况下，将键的值设置为value，返回1；
> - 若键key已存在，则SETNX命令不做任何操作，返回0；


```go
package redislock

import (
	"context"
	"errors"
	"time"

	"github.com/go-redis/redis/v9"
	"github.com/google/uuid"
)

var (
	ErrObtainLockFail  = errors.New("fail to obtain lock")
	ErrReleaseLockFail = errors.New("fail to release lock")
)

type Client struct {
	client redis.Cmdable
}

func NewClient(client redis.Cmdable) *Client {
	return &Client{
		client: client,
	}
}

type Lock struct {
	client redis.Cmdable
	key    string
}

func (c *Client) ObtainLock(ctx context.Context, key string, expiration time.Duration) (*Lock, error) {
	value := uuid.New().String()
	res, err := c.client.SetNX(ctx, key, value, expiration).Result()
	if err != nil {
		return nil, err
	}
	if !res {
		return nil, ErrObtainLockFail
	}
	return newLock(c.client, key), nil
}

func newLock(client redis.Cmdable, key string) *Lock {
	return &Lock{
		client: client,
		key:    key,
	}
}

func (c *Lock) Release(ctx context.Context) error {
	res, err := c.client.Del(ctx, c.key).Result()
	if err != nil {
		return err
	}
	if res != 1 {
		return ErrReleaseLockFail
	}
	return nil
}
```

但是这里的释放其实是存在问题的：
- 当redis存储的是别人的锁，直接删除key这就会导致删除别人的锁问题

### 解决锁释放问题
> 方法就是生产唯一的value，只有当前redis存储的value是自己的才可以删除
> 
> 为了保证原子性，即查询redis的value和删除动作是一起进行操作，这里采用lua脚本去保证

```go
package redislock

import (
	"context"
	_ "embed"
	"errors"
	"time"

	"github.com/go-redis/redis/v9"
	"github.com/google/uuid"
)

var (
	ErrObtainLockFail  = errors.New("fail to obtain lock")
	ErrReleaseLockFail = errors.New("fail to release lock")
)

var (
	//go:embed release.lua
	releaseLua string
)

type Client struct {
	client redis.Cmdable
}

func NewClient(client redis.Cmdable) *Client {
	return &Client{
		client: client,
	}
}

type lock struct {
	client redis.Cmdable
	key    string
	value  string
}

func (c *Client) ObtainLock(ctx context.Context, key string, expiration time.Duration) (*lock, error) {
	value := uuid.New().String()
	res, err := c.client.SetNX(ctx, key, value, expiration).Result()
	if err != nil {
		return nil, err
	}
	if !res {
		return nil, ErrObtainLockFail
	}
	return newLock(c.client, key, value), nil
}

func newLock(client redis.Cmdable, key, value string) *lock {
	return &lock{
		client: client,
		key:    key,
		value:  value,
	}
}

func (c *lock) Release(ctx context.Context) error {
	res, err := c.client.Eval(ctx, releaseLua, []string{c.key}, c.value).Int64()
	if err == redis.Nil {
		return ErrReleaseLockFail
	}
	if err != nil {
		return err
	}
	if res == 0 {
		return ErrReleaseLockFail
	}
	return nil
}
```
release.lua脚本
```lua
-- 获得的value和期望的value是一致的说明是自己的锁
if redis.call("get", KEYS[1]) == ARGV[1] then
  return redis.call("del", KEYS[1])
else
  return 0
end
```

### 解决超时问题
> 极端场景下业务很可能执行超时，例如：分布式锁一分钟，但业务执行一小时，导致这一个小时之内，有60个业务拿到分布式锁，和我们期望1个业务执行不一致。
> 
> 解决超时问题，那么我们可以通过续约的方式，不断延长分布式锁的有效期来解决业务超时问题，保证业务执行过程锁不会自动释放。

```go
func (c *lock) AutoRefresh(interval, timeout time.Duration) error {
	if interval >= c.expiration {
		return errors.New("interval should be less than expiration")
	}
	ticker := time.NewTicker(interval)
	ch := make(chan struct{}, 1)
	defer func() {
		ticker.Stop()
		close(ch)
	}()
	for {
		select {
		case <-ticker.C:
			ctx, cancel := context.WithTimeout(context.Background(), timeout)
			err := c.Refresh(ctx)
			cancel()
			if err == context.DeadlineExceeded {
				select {
				case ch <- struct{}{}:
				default:
				}
				continue
			}
			if err != nil {
				return err
			}
		case <-ch:
			ctx, cancel := context.WithTimeout(context.Background(), timeout)
			err := c.Refresh(ctx)
			cancel()
			if err == context.DeadlineExceeded {
				select {
				case ch <- struct{}{}:
				default:
				}
				continue
			}
			if err != nil {
				return err
			}
		case <-c.release: //主动释放锁场景
			return nil
		}
	}
}

func (c *lock) Refresh(ctx context.Context) error {
	res, err := c.client.Eval(ctx, refreshLua, []string{c.key}, c.value, c.expiration.Milliseconds()).Int64()
	if err == redis.Nil {
		return ErrRefreshLockFail
	}
	if err != nil {
		return err
	}
	if res != 1 {
		return ErrRefreshLockFail
	}
	return nil
}
```
refresh.lua脚本
```lua
--续约分布式锁
if redis.call("get", KEYS[1]) == ARGV[1] then
  return redis.call("pexpire", KEYS[1], ARGV[2]) --返回1成功，返回0失败
else
  return 0
end
```
### 解决无限续约问题
> 当续约遇见网络超时问题，总不能一直续约，须有合理的方式告知业务方错误
> 
> 因此需增加策略去重试续约

我们定义策略
```go
package redislock

import "time"

type RetryStrategy interface {
	//返回下一次是否需要重试以及重试间隔
	Next() (bool, time.Duration)
}

type limitedRetry struct {
	interval time.Duration
	max      int64
	cnt      int64
}

func (retry *limitedRetry) Next() (bool, time.Duration) {
	retry.cnt++
	return retry.cnt < retry.max, retry.interval
}

func LimitedRetry(interval time.Duration, max int64) RetryStrategy {
	return &limitedRetry{interval: interval, max: max, cnt: 0}
}

type noRetry struct{}

func (retry *noRetry) Next() (bool, time.Duration) {
	return false, 0
}

func NoRetry() RetryStrategy {
	return &noRetry{}
}
```
使用带策略的续约方式
```go
func (c *Client) TryLock(ctx context.Context, key string, expiration time.Duration, try RetryStrategy) (*lock, error) {
	value := uuid.New().String()
	var ticker *time.Ticker
	defer func() {
		if ticker != nil {
			ticker.Stop()
		}
	}()
	for {
		res, err := c.client.Eval(ctx, lockLua, []string{key}, value, expiration.Milliseconds()).Result()
		if err != nil && !errors.Is(err, context.DeadlineExceeded) {
			return nil, err
		}
		if res == "OK" {
			return newLock(c.client, key, value, expiration), nil
		}
		retry, interval := try.Next()
		if !retry {
			if err != nil {
				return nil, err
			}
			return nil, ErrObtainLockFail
		}
		if ticker == nil {
			ticker = time.NewTicker(interval)
		}
		select {
		case <-ctx.Done():
			return nil, ctx.Err()
		case <-ticker.C:
		}
	}
}
```
lock.lua脚本
```lua
local val = redis.call('get', KEYS[1])
-- 在加锁的重试的时候，要判断自己上一次是不是加锁成功了
if val == false then -- key 不存在
    return redis.call('set', KEYS[1], ARGV[1], 'PX', ARGV[2]) -- px 毫秒
elseif val == ARGV[1] then  -- 存在，刷新过期时间
    redis.call('expire', KEYS[1], ARGV[2])
    return "OK"
else -- 此时别人持有锁
    return ""
end
```

### 进一步优化获取锁
>当并发量很大场景时，为了减缓DB的压力，我们可以在单个实例上面，只允许一个协程获取分布式锁，即：单一实例先筛选一个协程，不同的实例再去竞争分布式锁

```go {3,9}
type Client struct {
	client redis.Cmdable
	s      singleflight.Group
}

func (c *Client) SingleFlightLock(ctx context.Context, key string, expiration time.Duration, try RetryStrategy) (*lock, error) {
	for {
		flag := false
		result := c.s.DoChan(key, func() (interface{}, error) {
			flag = true
			return c.TryLock(ctx, key, expiration, try)
		})
		select {
		case res := <-result:
			if flag {
				c.s.Forget(key)
				if res.Err != nil {
					return nil, res.Err
				}
				return res.Val.(*lock), nil
			}
		case <-ctx.Done():
			return nil, ctx.Err()
		}
	}
}
```