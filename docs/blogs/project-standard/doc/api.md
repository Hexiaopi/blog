---
title: 接口规范
date: 2020-01-24
tags:
 - 规范
 - 接口
categories:
 -  项目规范
---

> API接口文档常常包含以下内容
> - 接口详细列表，包含接口功能，请求方法、输入参数、输出参数、请求示例
> - CHANGELOG：API接口文档变更历史，方便进行回溯
> - 通用的请求参数、返回参数、认证方法或者加密算法
> - 接口中使用的数据结构
> - 错误码描述

常见的API接口规范为：RESTful API规范

## URI
> URI表示资源，资源一般对应后端实体，例如：用户为user
> 资源集合通常使用复数形式，例如：users

## Request
> 通过HTTP方法对资源进行CRUD

GET：查询资源集合或一个资源
```
GET /users
GET /users?page=1&size=10 (根据条件查询)
GET /user/:id (:id为用户id)
```

POST：创建一个资源
```
POST /user (创建用户)
{
  "name": "hexiaopi",
  "sex": "male",
  "age": 28
}
```

PUT：更新一个资源（全量更新）
```
PUT /user/hexiaopi (更新用户信息)
{
  "name": "hexiaopi",
  "sex": "male",
  "age": 29
}
```

PATCH：更新一个资源（部分更新，例如只更新用户的状态等）
```
PATCH /user/hexiaopi (更新用户信息)
[
  { "op":"replace", "path":"/name", "value":"hexiaojin" }
]
```

DELETE：删除一个资源
```
DELETE /user/:id
```

安全性和幂等性
> 安全性：不会改变资源状态，可以理解为只读的；
> 幂等性：执行1次和执行N次，对资源状态改变效果是等价的；

| Request | 安全性 | 幂等性 |
| :-----: | :----: | :----: |
|   GET   |   Y    |   Y    |
|  POST   |   N    |   N    |
|   PUT   |   N    |   Y    |
|  PATCH  |   N    |   Y    |
| DELETE  |   N    |   Y    |

> 这里的幂等性关注的是资源状态改变效果，而非两次相同的请求得到相同的结果。
> 
> 例如：删除某一个资源，第一次成功删除，下次再删除就不一定成功了。但是对于这条资源的最终状态来说，都是一样的，即该资源已删除。

## Response

### 错误处理
> 返回错误码及其描述
> API包含两类异常：业务异常和非业务异常
> 
> 业务异常须返回相应的HTTP状态码，例如：
> - 请求未授权对应HTTP状态码401；
> - 请求参数校验失败对应HTTP状态码400；
> 
> 非业务异常统一返回状态码500

## 接口版本
> 接口版本常常发生在不兼容场景。
> 常见通过URI中增加版本号信息，例如：
> 
> - /api/v1/user
> - /api/v2/user