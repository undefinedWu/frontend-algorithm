export class ListNode<T> {
  public value: T;
  public next: ListNode<T>

  constructor(value: T) {
    this.value = value;
    this.next = null
  }
}