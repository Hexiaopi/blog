---
title: Add Two Numbers
date: 2022-08-02
tags:
 - Go
categories:
 -  LeetCode
---

## 题目[2. Add Two Numbers](https://leetcode.com/problems/add-two-numbers/)

You are given two `non-empty` linked lists representing two non-negative integers. The digits are stored in `reverse order`, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

**Example 1:**

```
Input: l1 = [2,4,3], l2=[5,6,4]
Output: [7,0,8]
Explanation: 342+465=807.
```

**Example 2:**

```
Input: l1 =[0], l2=[0]
Output:[0]
```

**Example 3:**

```
Input: l1=[9,9,9,9,9,9,9], l2=[9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
```

**Constraints:**

- The number of nodes in each linked list is in the range [1, 100].
- 0 <= Node.val <= 9
- It is guaranteed that the list represents a number that does not have leading zeros.

## 第一次解题

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

## 第二次解题
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