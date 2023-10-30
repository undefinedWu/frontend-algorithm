# 核心思想

## 回顾前缀和思想
在前面讲到过，前缀和因为不对一组数据进行操作，所以我们通过空间换时间，提前算出前 j 项的和，计算原本的数组某一项和利用推导公式来进行计算 **sum(i, j)=pre_sum[j + 1]-pre_sum[i]**

## 差分思想
举一个🌰，比如我们需要对一个数组的[i,j]项进行加一个数（正数或负数），并进行多次操作，最终返回实际的数组，比较容易的想到就是，直接遍历数组对数组下标[i,j]项进行操作，此时的时间复杂度是O(m * n)，如果我们项利用到类似前缀和的思想，此时可以考虑对其进行做差，此时对某一区间内的数据进行操作是，其实仅仅只是影响了计算出来的差分数组在下标 i 项和 j+1 项,通过索引操作数组的时间复杂度是 O(1),总体看来时间复杂度是 O(m) m 表示操作数字的次数
```js
// 伪代码
input list: number[]
declaration diff: number[] = new Array(list.length);
// 第一项前面没有数据 不需要做差
diff[0] = list[0]

for (let i = 1;i < diff.length;i ++) {
  diff[i] = list[i] - list[i - 1]
}

// diff[i] 前面进行累加实际就是 list[i] 值
// 对[i, j] 加上一个数 影响 diff[i] + num
// diff[j + 1] - num

// 对于区间 [i, j] 的进行加一个数 num (0 <= i <= j < list.length)
diff[i] = diff[i - 1] + num
diff[j + 1] = diff[j + 1] - num

```

