---
title: 认证方案
date: 2022-09-18
tags:
 - 系统设计
categories:
 -  系统设计
---

## 认证
> 我们有多种途径来保障应用的安全，例如：网咯隔离、设置防火墙、设置IP黑名单等。而**认证**是软件层面保护应用安全的一种措施。
> 
> 当前有四种认证方式，分别是：`Basic`、`Digest`、`OAuth`和`Bearer`

### Basic认证
> Basic认证（基础认证）是一种简单的认证方式。将`用户名:密码`进行base64编码，放到HTTP Authorization Header中。
> 
> 但是base64不是加密技术，入侵者可以通过截获base64字符串，并反编码获取用户名和密码；其次即便进行了加密了用户名和密码，入侵者可以通过加重放攻击。

因此Basic认证非常不安全。在设计系统时，要遵循一个通用的原则：不要在请求参数中使用明文密码，也不要在任何存储中保存明文密码。

### Digest认证
> Digest认证（摘要认证）是一种HTTP认证协议，它与Basic认证兼容，但修复了Basic认证的严重缺陷。

**特点**
- 绝不会用明文的方式在网络上发送密码
- 可以有效防止恶意用户进行重放攻击
- 可以有效的防止对报文内容进行篡改

摘要认证的过程如下图所示：
![digest](./images/digest.png)

1. 客户端请求服务端资源
2. 在客户端能够证明它知道密码从而确认其身份之前，服务端认证失败，返回401 Unauthorized，并返回WWW-Authenticate头，里面包含认证需要的信息。
3. 客户端根据WWW-Authenticate头中的信息，选择加密算法，并使用密码随机数`nonce`，计算出密码摘要`response`，并再次请求服务端。
4. 服务器将客户端提供的密码摘要与服务器内部计算出的摘要进行对比。如果匹配，就说明客户端知道密码，认证通过，并返回一些与授权会话相关的附加信息，放在`Authorization-Info`中。

其中涉及到的一些参数说明：

|        参数         |                             说明                             |
| :-----------------: | :----------------------------------------------------------: |
| WWW-Authentication  | 用来定义使用何种方式（Basic、Digest、Bearer等）去进行认证以获取受保护的资源 |
|      username       |                            用户名                            |
|        realm        |                服务器返回的realm，一般是域名                 |
|       method        |                         HTTP请求方法                         |
|        nonce        | 服务器发给客户端的随机字符串，会经常发生变化。客户端计算密码摘要时将其附加上去，使得多次生成同一用户的密码摘要各不相同，用来防止重放攻击 |
|   nc(nonceCount)    | 16进制数值，用于记录请求的次数，用于标记、计数，防止重放攻击 |
| cnonce(clientNonce) |   客户端发送给服务器的随机字符串，用于客户端对服务器的认证   |
|         qop         | 保护质量参数，包含auth（默认）或auth-int（增加了报文完整性检测） |
|         uri         |                          请求的uri                           |
|      response       |                客户端根据算法算出的密码摘要值                |
| Authorization-Info  |             用于返回一些与授权会话相关的附加信息             |
|      nextnonce      |      下一个服务端随机数，使客户端可以预先发送正确的摘要      |
|       rspauth       |             响应摘要，用于客户端对服务端进行认证             |

摘要认证可以保护密码，比基本认证要安全的多，但摘要认证并不能保护内容，所以仍然要与HTTPS配合使用。

### OAuth认证

> OAuth（开放授权）是一个开放的授权标准，允许用户让第三方应用访问该用户在某一Web服务上存储的私密资源（例如：照片、视频、音频等），而无需将用户名和密码提供给第三方应用。

OAuth当前是2.0版本，分为四种授权方式：密码式、隐藏式、凭借式和授权码模式。

#### 密码式

流程如下：

1. 网站A向用户发出获取用户名和密码的请求；
2. 用户同意后，网站A凭借用户名和密码向网站B换取令牌；
3. 网站B验证用户身份后，给出网站A令牌，网站A凭借令牌可以访问网站B对应权限的资源。、

特点：用户需要高度信任网站A

#### 隐藏式

流程如下：

1. A网站提供一个跳转到B网站的链接，用户点击后跳转至B网站，并向用户请求授权；
2. 用户登录B网站，同意授权后，跳转回A网站指定的重定向redirect_url地址，并携带B网站返回的令牌，用户在B网站的数据给A网站使用。

常见：适用于前端应用，例如公司内部应用集成SSO登录

特点：存在中间人攻击的风险，因此只能用于一些安全性要求不高的场景，并且令牌的有效时间要非常短。

#### 凭借式

1. 应用A在命令行向应用B请求授权，此时应用A需要携带应用B提前颁发的secretID和secretKey，其中secretKey出于安全性考虑，需在后端发送；
2. 应用B接收到secretID和secretKey，并进行身份验证，验证通过后返回给应用A令牌；

常见：适用于没有前端的命令行应用

#### 授权码模式

流程如下：

1. A网站提供一个跳转到B网站的链接+redirect_url，用户点击后跳转至B网站；
2. 用户携带B网站提前申请的client_id，向B网站发起身份验证请求；
3. 用户登录B网站，通过验证，授予A网站权限，此时网站跳转回redirect_url，其中会有B网站通过验证后的授权码附在该url后；
4. 网站A携带授权码向网站B请求令牌，网站B验证授权码后，返回令牌即acess_token；

### Bearer认证

> Bearer认证也称为令牌认证，是一种HTTP身份验证方法，Bearer认证的核心是bearer token。bearer token是一个加密字符串，通常由服务端根据秘钥生成。客户端在请求服务端时，必须在请求头中包含Authorization: Bearer <token>，服务端收到请求后，解析出token，并校验token的合法性。

当前最流行的token编码方式是JSON Web Token(JWT)

#### 基于JWT的Token认证

> JWT是Bearer Token的一个具体实现，由JSON数据格式组成，通过HASH散列算法生成一个字符串，该字符串可以用来进行授权和信息交换。

流程如下：

1. 客户端使用用户名和密码请求登录。
2. 服务端收到请求后，会去验证用户名和密码。如果用户名和密码跟数据库记录不一致，则验证失败；如果一致则验证通过，服务端会签发一个 Token 返回给客户端。
3. 客户端收到请求后会将 Token 缓存起来，比如放在浏览器 Cookie 中或者 LocalStorage 中，之后每次请求都会携带该 Token。
4. 服务端收到请求后，会验证请求中的 Token，验证通过则进行业务逻辑处理，处理完后返回处理后的结果

JWT格式由三部分组成，分别是Header、Payload和Signature，它们之间用圆点.连接，例如：

```

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJpYW0uYXBpLm1hcm1vdGVkdS5jb20iLCJleHAiOjE2NDI4NTY2MzcsImlkZW50aXR5IjoiYWRtaW4iLCJpc3MiOiJpYW0tYXBpc2VydmVyIiwib3JpZ19pYXQiOjE2MzUwODA2MzcsInN1YiI6ImFkbWluIn0.Shw27RKENE_2MVBq7-c8OmgYdF92UmdwS8xE-Fts2FM
```

**Header**

包含两部分信息：一个是Token的类型，二是Token所使用的加密算法，例如：

```json
{
  "typ": "JWT",
  "alg": "HS256"
}
```

- typ：说明Token的类型；
- alg: 说明Token的加密算法；

将Header进行base64编码：

```
$ echo -n '{"typ":"JWT","alg":"HS256"}'|base64
eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9
```

在某些场景下，可能还会有kid选项，用来标识一个秘钥ID，例如：

```json
{
    "alg": "HS256",
    "kid": "XhbY3aCrfjdYcP1OFJRu9xcno8JzSbUIvGE2",
    "typ": "JWT"
}
```

**Payload**

有效载荷部分，是JWT的主体内容部分，也是一个JSON对象，包含需要传递的数据。

- iss: Issuer，JWT Token的签发者
- exp: Expiration Time，JWT Token的过期时间
- sub: Subject，主题
- aud: Audience，一般可以为特定的App、服务或模块。服务端的安全策略再签发时和验证时，aud必须一致
- iat: Issued At，JWT Token签发时间
- nbf: Not Before，JWT Toekn生效时间
- jti: JWT ID，令牌的唯一标识符，通常用于一次性消费的Token

例如：

```json
{
  "aud": "iam.authz.marmotedu.com",
  "exp": 1604158987,
  "iat": 1604151787,
  "iss": "iamctl",
  "nbf": 1604151787
}
```

将payload进行base64编码：

```
$ echo -n '{"aud":"iam.authz.marmotedu.com","exp":1604158987,"iat":1604151787,"iss":"iamctl","nbf":1604151787}'|base64
eyJhdWQiOiJpYW0uYXV0aHoubWFybW90ZWR1LmNvbSIsImV4cCI6MTYwNDE1ODk4NywiaWF0Ijox
NjA0MTUxNzg3LCJpc3MiOiJpYW1jdGwiLCJuYmYiOjE2MDQxNTE3ODd9
```

这些预定义的字段并不要求强制使用，此外，我们还可以自定义私有字段，一般会把包含用户信息的数据放到payload中。注意，不要添加敏感信息，此外私有声明是客户端和服务端所共同定义的声明。

**Signature**

Signature是Token的签名部分，通过如下方式生成：将 Header 和 Payload 分别 base64 编码后，用 . 连接。然后再使用 Header 中声明的加密方式，利用 secretKey 对连接后的字符串进行加密，加密后的字符串即为最终的 Signature。secretKey 是密钥，保存在服务器中，一般通过配置文件来保存。

签名后服务端会返回生成的 Token，客户端下次请求会携带该 Token。服务端收到 Token 后会解析出 header.payload，然后用相同的加密算法和密钥对 header.payload 再进行一次加密，例如：

```
HMACSHA256(base64UrlEncode(header)+"."+base64UrlEncode(payload),secret)
```

得到 Signature。并且，对比加密后的 Signature 和收到的 Signature 是否相同，如果相同则验证通过，不相同则返回 HTTP 401 Unauthorized 的错误。
