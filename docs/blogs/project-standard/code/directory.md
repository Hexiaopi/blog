---
title: 目录规范
date: 2020-02-09
tags:
 - 规范
categories:
 -  项目规范
---

::: tip
Go语言项目业界公认的目录结构是怎样的:question:
:::

<!-- more -->

## 目录结构

> 可以通过以下维度进行考量：
>
> - 命名清晰：目录命名需要简洁，清晰的表达出该目录实现的功能，做到一看到该目录名就知道是干嘛的；
>
> - 功能明确：目录的功能必须明确，例如：api目录是接口服务、service目录是业务逻辑；
>
> - 功能齐全：例如测试、构建、脚本、工具、文档等；

这里参考Go语言公认项目目录[project-layout](https://github.com/golang-standards/project-layout)结构如下：

```text
.
├── api
├── assets
├── build
│   ├── ci
│   └── package
├── cmd
│   └── _your_app_
├── configs
├── deployments
├── docs
├── examples
├── githooks
├── init
├── internal
│   ├── app
│   │   └── _your_app_
│   └── pkg
│       └── _your_private_lib_
├── pkg
│   └── _your_public_lib_
├── scripts
├── test
├── third_party
├── tools
├── vendor
├── web
│   ├── app
│   ├── static
│   └── template
└── website
```

## 应用目录

### api目录

> OpenAPI/Swagger规范、JSON模式文件、协议定义文件

### cmd目录

> 该项目的主要应用，Go语言以main函数文件作为程序入口。每个应用程序的目录名称应与执行文件的名称相匹配，例如：`/cmd/myapp`

### examples目录

> 应用程序和公共库的示例

### internal目录

> 存放私有应用和库代码，如果一些代码，你不希望在其他在其他应用和库中被导入，可以放在internal目录下。而对于私有应用共享的代码可以放在/internal/pkg目录下。
建议internal目录以各个组件的方式进行分层。

### pkg目录

> 与internal相反，该目录存放可供其他外部应用程序使用的库代码。

### vendor目录

> 该目录存放项目依赖，可通过`go mod vendor`创建。

:eyes: 注意

如果开发的是Go语言库，不要提交vendor依赖包

### test目录

> 其他外部测试应用程序和测试数据。对于更大的项目，有一个数据子目录是有意义的。例如：`/test/data`或者`/test/testdata`

:eyes: 注意

Go 也会忽略以“.”开头的目录或文件。或“_”，因此您可以更灵活地命名测试数据目录。

### third_party目录

> 外部帮助工具，分支代码或其他第三方应用。

### tools目录

> 该项目的支持工具

:eyes: 注意

这些工具可以从`pkg`和`internal`目录导入代码

### web目录

> 前端代码存放目录，用来存放Web静态资源，服务端模块和单页应用（SPAs）

### assets

> 其他资产，例如：图像、徽标、CSS、JavaScript等

### website

> 项目网站或者Github页面

## 项目管理目录与文件

### build目录

> 打包和持续集成
>
> 将云 (AMI)、容器 (Docker)、操作系统（deb、rpm、pkg）包配置和脚本放在`/build/package`目录中。
>
> 将CI（travis、circle、drone）配置和脚本放在`/build/ci`目录中。

:eyes: 注意

一些 CI 工具（例如 Travis CI）对其配置文件的位置非常挑剔。尝试将配置文件放在/build/ci将它们链接到 CI 工具期望它们的位置的目录中（如果可能）。

### configs目录

> 配置文件，例如这里可以存放confd或consul-template模版文件。

### deployments目录

> IaaS、PaaS、系统和容器编排部署配置和模板（docker-compose、kubernetes/helm、mesos、terraform、bosh）。

:eyes: 注意

在某些存储库（尤其是使用 kubernetes 部署的应用程序）中，此目录称为`deploy`.

### init目录

> 系统初始化（systemd、upstart、sysv）和进程管理器(runit、supervisord)配置文件，在非容器化部署的项目中会使用到。

例如：systemd的unit文件，用于管理程序，一般以.service结尾

```text
[Unit]
Description=OpenSSH server daemon
Documentation=man:sshd(8) man:sshd_config(5)
After=network.target sshd-keygen.target
Wants=sshd-keygen.target

[Service]
Type=notify
EnvironmentFile=-/etc/crypto-policies/back-ends/opensshserver.config
EnvironmentFile=-/etc/sysconfig/sshd
ExecStart=/usr/sbin/sshd -D $OPTIONS $CRYPTO_POLICY
ExecReload=/bin/kill -HUP $MAINPID
KillMode=process
Restart=on-failure
RestartSec=42s

[Install]
WantedBy=multi-user.target
```

### scripts目录

> 执行各种构建、安装、分析等操作的脚本。这些脚本使根级 Makefile 小而简单

例如: [terraform-website](https://github.com/hashicorp/terraform/blob/master/Makefile)使用了很多scipts目录下的脚本，使得Makefile小但功能强大。

```text
WEBSITE_REPO=github.com/hashicorp/terraform-website
VERSION?="0.3.44"
PWD=$$(pwd)
DOCKER_IMAGE="hashicorp/terraform-website:full"
DOCKER_IMAGE_LOCAL="hashicorp-terraform-website-local"
DOCKER_RUN_FLAGS=--interactive \
	--rm \
	--tty \
	--workdir "/website" \
	--volume "$(shell pwd):/website/ext/terraform" \
	--volume "$(shell pwd)/website:/website/preview" \
	--publish "3000:3000" \
	-e "IS_CONTENT_PREVIEW=true" \
	-e "PREVIEW_FROM_REPO=terraform" \
	-e "NAV_DATA_DIRNAME=./preview/data" \
	-e "CONTENT_DIRNAME=./preview/docs" \
	-e "CURRENT_GIT_BRANCH=$$(git rev-parse --abbrev-ref HEAD)"

# generate runs `go generate` to build the dynamically generated
# source files, except the protobuf stubs which are built instead with
# "make protobuf".
generate:
	go generate ./...

# We separate the protobuf generation because most development tasks on
# Terraform do not involve changing protobuf files and protoc is not a
# go-gettable dependency and so getting it installed can be inconvenient.
#
# If you are working on changes to protobuf interfaces, run this Makefile
# target to be sure to regenerate all of the protobuf stubs using the expected
# versions of protoc and the protoc Go plugins.
protobuf:
	go run ./tools/protobuf-compile .

fmtcheck:
	"$(CURDIR)/scripts/gofmtcheck.sh"

importscheck:
	"$(CURDIR)/scripts/goimportscheck.sh"

staticcheck:
	"$(CURDIR)/scripts/staticcheck.sh"

exhaustive:
	"$(CURDIR)/scripts/exhaustive.sh"

# Default: run this if working on the website locally to run in watch mode.
website:
	@echo "==> Downloading latest Docker image..."
	@docker pull ${DOCKER_IMAGE}
	@echo "==> Starting website in Docker..."
	@docker run ${DOCKER_RUN_FLAGS} ${DOCKER_IMAGE} npm start

website/local:
	@echo "==> Starting website in Docker..."
	@docker run ${DOCKER_RUN_FLAGS} ${DOCKER_IMAGE_LOCAL} npm start

.PHONY: website/build-local
website/build-local:
	@echo "==> Building local Docker image"
	@docker build https://github.com/hashicorp/terraform-website.git\#master \
		-t $(DOCKER_IMAGE_LOCAL)

# disallow any parallelism (-j) for Make. This is necessary since some
# commands during the build process create temporary files that collide
# under parallel conditions.
.NOTPARALLEL:

.PHONY: fmtcheck importscheck generate protobuf website website-test staticcheck website/local website/build-local
```

### githooks目录

> Git钩子，比如可以将commit-msg存放在该目录

### Makefile文件

> Makefile是一个很优秀的项目管理工具，通常用来执行静态代码检查、单元测试、编译等功能

- 静态代码检查(lint)：推荐用 golangci-lint。
- 单元测试(test)：运行 go test ./...。
- 编译(build)：编译源码，支持不同的平台，不同的 CPU 架构。
- 镜像打包和发布(image/image.push)：现在的系统比较推荐用 Docker/Kubernetes 进行部署，所以一般也要有镜像构建功能。
- 清理（clean）:清理临时文件或者编译后的产物。
- 代码生成（gen）：比如要编译生成 protobuf pb.go 文件。
- 部署（deploy，可选）：一键部署功能，方便测试。
- 发布（release）：发布功能，比如：发布到 Docker Hub、github 等。
- 帮助（help）:告诉 Makefile 有哪些功能，如何执行这些功能。
- 版权声明（add-copyright）：如果是开源项目，可能需要在每个文件中添加版权头，这可以通过 Makefile 来添加。
- API 文档（swagger）：如果使用 swagger 来生成 API 文档，这可以通过 Makefile 来生成。

## 文档目录与文件

### docs目录

> 设计和用户文档，除了`godoc`生成的文档之外

- /docs/devel/{en-US,zh-CN}: 存放开发文档、hack文档
- /docs/guide/{en-US,zh-CN}: 存放用户手册，安装、quickstart、产品文档等
- /docs/image: 存放图片文件

### CHANGELOG目录

> 当项目有更新时，为了方便了解当前版本的更新内容或者历史更新内容，需要将更新记录存放到CHANGELOG目录。

编写CHANGELOG是一个繁琐的工作，我们可以结合[Angular规范](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)和[git-chglog工具](https://github.com/git-chglog/git-chglog)

### CONTRIBUTING.md文件

> 开源项目用于说明如何贡献代码，如何开源协同等。

### LICENSE文件

> 版权文件，常用的开源协议有：Apache 2.0、MIT、GPL等

为了声明版权，你可能会需要将LICENSE头添加到源代码文件或者其他文件中，可以尝试使用这个工具自动化实现：[addlicense](https://github.com/marmotedu/addlicense)

当代码中引用了其他开源代码时，需要在LICENSE中说明对其他源码的引用，可以借助工具来进行检查：[glice](https://github.com/ribice/glice)

```text
+---------------------------------------+-----------------------------------------------+--------------+
|              DEPENDENCY               |                    REPOURL                    |   LICENSE    |
+---------------------------------------+-----------------------------------------------+--------------+
| github.com/dgrijalva/jwt-go           | https://github.com/dgrijalva/jwt-go           | MIT          |
| github.com/golang/mock                | https://github.com/golang/mock                | Apache-2.0   |
| github.com/gorilla/mux                | https://github.com/gorilla/mux                | bsd-3-clause |
| github.com/jinzhu/gorm                | https://github.com/jinzhu/gorm                | MIT          |
| github.com/opentracing/opentracing-go | https://github.com/opentracing/opentracing-go | Apache-2.0   |
| github.com/sirupsen/logrus            | https://github.com/sirupsen/logrus            | MIT          |
| github.com/stretchr/testify           | https://github.com/stretchr/testify           | MIT          |
| github.com/swaggo/http-swagger        | https://github.com/swaggo/http-swagger        | MIT          |
| github.com/swaggo/swag                | https://github.com/swaggo/swag                | MIT          |
| github.com/uber/jaeger-client-go      | https://github.com/uber/jaeger-client-go      | Apache-2.0   |
| gopkg.in/yaml.v2                      |                                               |              |
+---------------------------------------+-----------------------------------------------+--------------+
```

### README.md文件

> 项目的README文件一般包含了项目的介绍、功能、快速安装和使用指引、详细的文档链接以及开发指引。

有时候README文档比较长，可以借助工具[tocenize](https://github.com/nochso/tocenize)来添加markdown toc索引

## 不应该拥有的目录

### src

> Go语言的工作空间包含：`pkg`、`bin`、`src`。且项目代码放在`src`目录下，如果一个Go项目包含`src`目录，则项目路径将会变成：`/some/path/to/workspace/src/your_project/src/your_code.go`，就变得非常丑。
