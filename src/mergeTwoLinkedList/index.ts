import { ListNode } from "../base/ListNode"

/**
 * 有两条有序链表 需要对它们进行合并 最终形成一条链表
 * 
 * l1: 1 -> 3 -> 4 -> 6
 * l2: 1 -> 2 -> 5
 * 
 * result: 1 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6
 * 
 * 引入虚拟列表 来减少第一次判断需要取哪一个的问题了
 * 
 */
function mergeTwoLinkedList(l1: ListNode<number>, l2: ListNode<number>) {
  // 只是一个虚拟节点 没有做实质的比较 
  const dummy = new ListNode(-1);
 
  let p1 = l1;
  let p2 = l2;
  let p3 = dummy;

  while (p1 !== null && p2 !== null) {
    if (p1.value < p2.value) {
      p3.next = p2;
      
      p2 = p2.next;
    } else {
      p3.next = p1;

      p1 = p1.next;
    }

    p3 = p3.next
  }

  if (p1 !== null) {
    p3.next = p1
  }

  if (p2 !== null) {
    p3.next = p2
  }
  
  return dummy.next;
}