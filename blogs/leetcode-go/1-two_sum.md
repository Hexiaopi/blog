---
title: 1.Two Sum(两数之和) 
date: 2022-08-01
tags:
 - Go
categories:
 -  LeetCode
---

## [Two Sum](https://leetcode.com/problems/two-sum/)

### 难易程度：`简单`
### 题目
>给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
>
>你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
>
>你可以按任意顺序返回答案。

 
## 示例
### 示例 1
>输入：nums = [2,7,11,15], target = 9
>
>输出：[0,1]
>
>解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
### 示例 2
>输入：nums = [3,2,4], target = 6
>
>输出：[1,2]
### 示例 3
>输入：nums = [3,3], target = 6
>
>输出：[0,1]
 
## 提示

- 2 <= nums.length <= 104
- -109 <= nums[i] <= 109
- -109 <= target <= 109
- 只会存在一个有效答案

## 解题
### 解题 1
>这道题的思路是：将数组中的元素放在map中，key为该元素，value为该元素在数组中的索引，通过target-i=j，得到期望的j，再判断j是否存在。

```go
func handleOne(nums []int, target int) []int {
	var numIndex = make(map[int]int)
	for k, v := range nums {
		numIndex[v] = k
	}
	for i := 0; i < len(nums); i++ {
		want := target - nums[i]
		if j, ok := numIndex[want]; ok {
			if j == i {
				continue
			}
			return []int{i, j}
		}
	}
	return nil
}
```

### 解题 2
>参考了其他人的代码，发现别人的代码只需要一次循环即可，降低了时间复杂度，且更为优雅。
```go
func handleTwo(nums []int, target int) []int {
	var numIndex = make(map[int]int)
	for j, v := range nums {
		want := target - v
		if i, ok := numIndex[want]; ok {
			return []int{i, j}
		}
		numIndex[v] = j
	}
	return nil
}
```


## 总结

> 尽可能的在一次循环里进行：赋值、计算。



