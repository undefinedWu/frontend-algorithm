# 核心思想
LRU(least recently used),简单理解就是，最近使用过的数据是有用的，很久都没有使用的数据应该是无用的，内存满了就先删除很久没有使用的。
> [leetcode 146 题](https://leetcode.cn/problems/lru-cache/)要求 put 和 get 方法的平均时间复杂度为 O(1)

# 功能列表
实现上述功能需要设计出以下三点
1. 需要保证是有“时序”的，在插入新值，和删除最久未使用的能快速索引到；
2. 要能在查找的时候，要能快速判断是否存在；
3. 在插入的时候，如果已经满了，就需要删除最久未使用的，并把当前节点插到最前面


# 数据结构
1. hash表，查询数据较快，但是不能保证顺序
> hash 表，本质底层还是维护一个数组，将一个 key-value 对，对 key 通过一个散列函数，得到一个唯一标识（转换成在数组中的一个索引），然后将对应的 value 存储在这个索引下，但存在一个问题，如果散列函数设计的比较简单，就有可能出现不同的 key 对应到数组中的相同索引（简称**哈希冲突**），其中一个解法是使用 **拉链法**，数组中的每一个位置，不在是一个单独值，而是一个**单链表**，并且此时每一个节点不能简单的只存储 value 了，必须也要存储 key，方便在查找的时候进行对比
- 像 JAVA 中的 HashMap 原理亦是如此，当容量到达一个因子系数（0.75）的时候，就会自动扩容，此外使用拉链法解决 hash 冲突问题时，有单链表和红黑树两种存储方式

2. 链表可以保证顺序，并且插入和删除一个已知节点是比较快的
> 如果使用单链表，因为是有向的，在更新尾节点的时候，需要遍历到尾部进行操作，此外在插入节点的时候，需要知道之前一个节点才能进行插入，不满足时间复杂度要求，此时就考虑双向链表（带头节点和尾节点的）

# 分析数据类型

```ts
// 其实 key 和 value 可以是任意类型
// 不过本期不会设计到散列函数，所以简单的认为是数字对应
// 此处存储 key 不仅仅是为了考虑 hash 表的哈希冲突
// 也是为了解决
interface Node {
  key: number
  value: number
  prev: Node | undefined
  next: Node | undefined
}
```