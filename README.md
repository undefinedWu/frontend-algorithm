# 基本描述
本仓库主要是记录一些前端必须会的算法，掌握一些基本的核心“套路”

# 核心概念
1. 数据存储方式只有：数组（顺序存储）和链表（链式存储）
- 数组：可以通过索引快速访问某一个位置的元素（随机访问），但是在插入和删除的时候，存在后续元素的移动
- 链表：可以快速插入和删除某一个节点（改变指针的指向），但是在访问元素的时候，需要从头节点进行遍历
2. 数据结构虽然很多，但无非是，在特定场景下，高效的进行增删改查
3. 遍历数据结构无非两种方式：线性和非线性
- 线性：通过 for/while/iterator 的方式对其进行遍历
- 非线性：通过递归的方式进行遍历

# 常见套路
- 双指针: 快慢指针、左右指针、中心向两端，以及变种：滑动窗口

# 基本算法
| 算法类型   | 链接                            | 完成日期 |
| ---------- | ------------------------------- | -------- |
| 回文串     | [回文串算法](./src/palind_rome) | 10.29    |
| 前缀和数组 | [前缀和思想](./src/pre_sum)     | 10.30    |
| 差分数组   | [差分思想](./src/difference/)   | 10.31    |
| LRU        | [缓存淘汰思想](./src/LRU/)      | 10.31    |

# TODO
1. 集成 github ci，在提交代码后跑一遍单测
2. 集成 husky，将 commit message 进行规范
3. 探索 github 托管这些文件，构建成一个托管服务器
4. 在 leetcode 上找到相关联的题目
5. ~~添加 Eslint 规范代码 11.02 fixed ~~
