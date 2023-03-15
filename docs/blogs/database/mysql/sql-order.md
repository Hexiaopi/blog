---
title: SQL查询顺序
date: 2023-03-09
tags:
 - 数据库
categories:
 - 数据库
---

![sql-queries](https://jvns.ca/images/sql-queries.jpeg)

<!-- more -->

这张图与 SQL 查询的语义有关，让你知道一个查询会返回什么，并回答了以下这些问题：

- 可以在 GROUP BY 之后使用 WHERE 吗？（不行，WHERE 是在 GROUP BY 之前！）
- 可以对窗口函数返回的结果进行过滤吗？（不行，窗口函数是 SELECT 语句里，而 SELECT 是在 WHERE 和 GROUP BY 之后）
- 可以基于 GROUP BY 里的东西进行 ORDER BY 吗？（可以，ORDER BY 基本上是在最后执行的，所以可以基于任何东西进行 ORDER BY）

- LIMIT 是在什么时候执行？（在最后！）

但数据库引擎并不一定严格按照这个顺序执行 SQL 查询，因为为了更快地执行查询，它们会做出一些优化。

所以：

如果你想要知道一个查询语句是否合法，或者想要知道一个查询语句会返回什么，可以参考这张图；

在涉及查询性能或者与索引有关的东西时，这张图就不适用了。<Badge text="注意" type="warning"/>

## 参考文献

[SQL查询不是以select开始](https://jvns.ca/blog/2019/10/03/sql-queries-don-t-start-with-select/)
