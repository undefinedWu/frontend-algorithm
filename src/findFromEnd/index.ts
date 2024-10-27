
import { ListNode } from "../base/ListNode"

/**
 * 找寻单链表倒数第 K 个节点 (0 < K <= N)
 * 
 * @param list 单链表
 * @param k 倒数第 k 个
 * 
 * 
 * 一条链表有 N 个节点，走 N 步刚好到 NULL 节点
 * 找倒数第 1 个节点 -> 找正数第 N 个节点         -> 走 N - 1 步
 * 找倒数第 2 个节点 -> 找正数第 N - 1 个节点     -> 走 N - 2 步
 * 找倒数第 3 个节点 -> 找正数第 N - 2 个节点     -> 走 N - 3 步
 * ...
 * 找倒数第 K 个节点 -> 找正数第 N - K + 1 个节点 -> 走 N - K 步
 * 
 * 让一个指针先走 K 步 再在让一个指针指向头节点 同时走 第一个指针走 N - K 刚好到尾部 第二个指针就是我们想要的
 */

export function findFromEnd<T>(
  list: ListNode<T>,
  k: number
): ListNode<T> {
  let p1 = list;

  for (let i = 0;i < k;i ++) {
    p1 = p1.next
  }

  let p2 = list;

  while (p1 !== null) {
    p1 = p1.next;
    p2 = p2.next;
  }

  return p2;
}