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

需要注意的是，在实际实现中，MySQL会根据具体的查询条件和数据量进行一定的优化和调整。在涉及查询性能或者与索引有关的东西时，这张图就不适用了。<Badge text="注意" type="warning"/>

## 详细查询顺序

1.FROM子句
MySQL首先处理FROM子句，该步骤主要是确定需要查询的数据表，并建立数据表之间的连接关系。

2.WHERE子句
根据WHERE子句指定的查询条件，MySQL会进行筛选并过滤出符合条件的数据。

3.GROUP BY子句
如果查询需要对数据分组，则MySQL会按照GROUP BY子句中指定的分组条件对数据进行分组，然后对每个组进行汇总计算。

4.HAVING子句
HAVING子句用于过滤分组后的数据，和WHERE子句类似。只有满足HAVING子句指定的条件的组才会出现在结果集中。

5.SELECT子句
SELECT子句是MySQL查询语句最主要的部分，它用于指定需要查询的数据集合以及计算这个数据集合中的一些列值。

6.DISTINCT
如果使用了DISTINCT关键字，则MySQL会过滤掉查询结果中的重复记录。

7.ORDER BY
ORDER BY子句用于对查询结果进行排序。MySQL会按照指定的列或表达式的结果对查询结果进行排序，可以指定升序或降序。

8.LIMIT
LIMIT关键字用于限制查询结果的数量。MySQL只返回前N条符合条件的记录，其中N由LIMIT语句后面的数字指定。

## 参考文献

[SQL查询不是以select开始](https://jvns.ca/blog/2019/10/03/sql-queries-don-t-start-with-select/)
