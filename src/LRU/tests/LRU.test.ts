import { DoubleLinkedList, LRU, Node } from '..'

it('lRU', () => {
  const lru = new LRU(2)

  lru.put(1, 1)

  const doubleLinkedList = new DoubleLinkedList()
  doubleLinkedList.addLast(new Node(1, 1))
  expect(lru.map[1]).toEqual(doubleLinkedList.head.next)

  expect(lru.get(1)).toBe(1)
  expect(lru.get(2)).toBeNull()

  // 添加节点
  lru.put(2, 2)
  doubleLinkedList.addLast(new Node(2, 2))
  expect(lru.double_linked_list).toEqual(doubleLinkedList)

  // 访问节点 将其提升到最新的
  lru.get(1)
  const node = doubleLinkedList.removeFirst()
  doubleLinkedList.addLast(node)
  expect(lru.double_linked_list).toEqual(doubleLinkedList)

  // 修改已有节点的值
  lru.put(2, 3)
  const new_node = doubleLinkedList.remove(doubleLinkedList.head.next)
  doubleLinkedList.addLast(new Node(2, 3))
  expect(lru.double_linked_list).toEqual(doubleLinkedList)
})
