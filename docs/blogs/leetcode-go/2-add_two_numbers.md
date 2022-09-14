---
title: 2.Add Two Numbers(两数之和)
date: 2022-08-02
tags:
 - Go
categories:
 -  LeetCode
---

## [Add Two Numbers](https://leetcode.com/problems/add-two-numbers/)

### 难易程度：`中等`
### 题目
>给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
>
>请你将两个数相加，并以相同形式返回一个表示和的链表。
>
>你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

 
## 示例
### 示例 1

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2021/01/02/addtwonumber1.jpg)

>输入：l1 = [2,4,3], l2 = [5,6,4]
>
>输出：[7,0,8]
>
>解释：342 + 465 = 807.

### 示例 2

>输入：l1 = [0], l2 = [0]
>
>输出：[0]
### 示例 3

>输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
>
>输出：[8,9,9,9,0,0,0,1]
 

## 提示

- 每个链表中的节点数在范围 [1, 100] 内
- 0 <= Node.val <= 9
- 题目数据保证列表表示的数字不含前导零

## 解题

### 解题 1
```go
type ListNode struct {
	Val  int
	Next *ListNode
}


func handleOne(l1 *ListNode, l2 *ListNode) *ListNode {
	l1Node := l1
	l2Node := l2
	var next int = 0
	var sum int = 0
	var result = &ListNode{0, nil}
	var temp = result
	var left int = l1Node.Val
	var right int = l2Node.Val
	for l1Node != nil || l2Node != nil || next == 1 {
		sum = left + right + next
		if sum > 9 {
			sum = sum - 10
			next = 1
		} else {
			next = 0
		}
		temp.Val = sum
		//判断结果是否要新申请node，并移动指针
		if (l1Node != nil && l1Node.Next != nil) || (l2Node != nil && l2Node.Next != nil) || next == 1 {
			temp.Next = &ListNode{0, nil}
			temp = temp.Next
		}

		//计算下一次left，并移动指针
		if l1Node != nil {
			if l1Node.Next == nil {
				left = 0
				l1Node = nil
			} else {
				l1Node = l1Node.Next
				left = l1Node.Val
			}
		}
		//计算下一次right，并移动指针
		if l2Node != nil {
			if l2Node.Next == nil {
				right = 0
				l2Node = nil
			} else {
				l2Node = l2Node.Next
				right = l2Node.Val
			}
		}
	}
	return result
}
```

### 解题 2
```go
func handleTwo(l1 *ListNode,l2 *ListNode)*ListNode{
	head := &ListNode{Val: 0}
	n1, n2, carry, current := 0, 0, 0, head
	for l1 != nil || l2 != nil || carry != 0 {
		if l1 == nil {
			n1 = 0
		} else {
			n1 = l1.Val
			l1 = l1.Next
		}
		if l2 == nil {
			n2 = 0
		} else {
			n2 = l2.Val
			l2 = l2.Next
		}
		current.Next = &ListNode{Val: (n1 + n2 + carry) % 10}
		current = current.Next
		carry = (n1 + n2 + carry) / 10
	}
	return head.Next
}
```


## 个人体会
> 思路比较简单，l1和l2先从根节点开始，加一次移一次位。
>
> 自己额外实现了一些方法，用于测试用例。
>
> 自己实现比较简单，但也很容易出错。参见handleOne
>
> 别人的代码即简单又优雅，相比较自己实现，有以下优点：
> handleTwo多申请一个内存空间，每次循环的结果存在next node中，而我是存在current node。因此我对 next node的申请比较复杂。
> handleTwo计算更为通用与专业一些。
> handleTwo计算当前循环的左右两个值，而我是将下一次左右节点的值先获取，因此需要额外判断下一次左右节点是否为nil，就显得比较复杂。