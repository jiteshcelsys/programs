class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  unshift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let temp = this.head;
      this.head = newNode;
      this.head.next = temp;
    }
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
  }

  shift() {
    if (!this.head) return undefined;
    this.head = this.head.next;
    this.length--;
  }

  insert(index, value) {
    if (index < 0 || index >= this.length) {
      return false;
    }
    if (index === 0) {
      this.unshift(value);
      return true;
    }
    if (index == this.length - 1) {
      this.push(value);
      return true;
    }
    let newNode = new Node(value);
    let current = this.head;
    let prev = current;
    let counter = 0;
    while (counter !== index) {
      prev = current;
      current = current.next;
      counter++;
    }
    prev.next = newNode;
    newNode.next = current;
    this.length++;
    return true;
  }
  // traversing
  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    console.log(arr);
    // console.log(this.length)
  }
  remove(index) {
    if (index < 0 || index >= this.length) {
      return false;
    }
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }
    let current = this.head;
    let prev = current;
    let counter = 0;
    while (counter !== index) {
      prev = current;
      current = current.next;
      counter++;
    }
    prev.next = current.next;
    this.length--;
    return true;
  }
  get(index) {
    if (index < 0 || index >= this.length) return false;
    let current = this.head;
    let counter = 0;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(index, value) {
    if (index < 0 || index >= this.length) return false;
    let current = this.head;
    let counter = 0;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    current.value = value;
    return this;
  }
}
let list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.insert(1, 344);
list.print();
// console.log(list)
