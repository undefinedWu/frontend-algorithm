# 思路
举一个🌰，现在有一个 number 数组，我们现在有一个数组，想求[i, j](0 <= i <= j < arr.length)区间和
比较通用的思路是，直接遍历数组 [i,j] 对其进行求和，此时时间复杂度是 O(n), 如果重复这样做，其实整体效率不会很高
因为其实数组是**固定不变的**，所以是否可以求出前 n 项的和，进行存储了，然后求区间的和时候，通过做差的方式来变相求和了
```js
// 伪代码
declaration list: number[];
declaration pre_sum: number[] = new Array(list.length + 1)
pre_sum[0] = 0;
for i = 1; i < pre_sum.length; i ++ {
  pre_sum[i] = pre_sum[i - 1] + list[i - 1]
}
// pre_sum[j] 是前 j - 1 项和
list[i..j] = pre_sum[j + 1] - pre_sum[i]
```
