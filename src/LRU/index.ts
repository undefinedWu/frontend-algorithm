export class LRU {
  private capacity: number
  hashMap: Record<number, Node>;
  double_linked_list: DoubleLinkedList;
  
  constructor(capacity: number) {
    this.capacity = capacity;
    this.hashMap = {};
    this.double_linked_list = new DoubleLinkedList();
  }

  get(key: number) {
    let node = this.hashMap[key];
    if (!node) {
      return null
    }
    this.make_recently(key);
    return node.value;
  }

  put(key: number, value: number) {
    let temp_node = this.hashMap[key];

    if (temp_node) {
      // 删除节点
      this.delete_node_by_key(key);
      // 添加新节点到最前
      return this.add_recently(key, value);
    }

    const node = new Node(key, value);

    if (this.double_linked_list.size >= this.capacity) {
      // 删除最旧的
      this.delete_oldest()
    }

    // 插入当前节点
    return this.add_recently(key, value);
  }

  // 其实节点的添加/删除（操作双链表），和 key 的添加/删除（操作）是相对应的
  // 避免漏改 抽象出相关的 Api 来进行统一操作

  // 让一个已经存在的节点变成最新的节点
  private make_recently(key: number) {
    const node = this.hashMap[key];
    // 删除旧节点
    this.double_linked_list.remove(node);
    // 添加到最新访问的
    return this.double_linked_list.addLast(node);
  }

  // 新添加一个一个节点
  private add_recently(key: number, value: number) {
    const node = new Node(key, value);
    this.hashMap[key] = node;
    return this.double_linked_list.addLast(node);
  }

  // 删除任意节点 by key
  private delete_node_by_key(key: number) {
    const node = this.hashMap[key];
    delete this.hashMap[key];
    this.double_linked_list.remove(node)
  }

  // 删除最旧
  private delete_oldest() {
    // 已经移除了当前节点
    let node = this.double_linked_list.removeFirst()
    if (node) {
      // 似乎有点重复工作
      this.delete_node_by_key(node.key);
    }
  }
}


// 越靠近尾节点，表示是最近使用的
export class DoubleLinkedList {
  head: Node;
  tail: Node;

  size: number

  constructor() {
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);
    this.size = 0;

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  // 在尾部添加节点
  addLast(node: Node): Node["value"] {
    node.next = this.tail;
    node.prev = this.tail.prev;
    this.tail.prev.next = node;
    this.tail.prev = node;
    
    this.size ++;

    return node.value;
  }

  removeFirst(): Node | null {
    const node = this.head.next;

    if (node === this.tail) {
      return null;
    }

    this.remove(node)
    
    return node;
  }

  // 删除非 tail 和 head 节点
  remove(node: Node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;

    this.size --;
  }
}

export class Node {
  prev: Node | undefined;
  next: Node | undefined;
  key: number;
  value: number;

  constructor(key: number, value: number) {
    this.key = key;
    this.value = value;
    this.prev = undefined;
    this.next = undefined;
  }
}