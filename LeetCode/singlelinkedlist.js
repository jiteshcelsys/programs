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
  //adding the data at the last node
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
    return this;
  }
  //removing the data from the last node
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      // console.log(current.next)
      newTail = current;
      current = current.next;
      // console.log(newTail+"newTail")
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  //remove from the beginning of the node
  shift() {
    if (!this.head) return false;
    let temp = this.head;
    this.head = this.head.next;
    this.length--;
    if (!this.head) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }
  //add to the beginning of the node
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
    this.length++;
    return this;
  }
  //display the data by adding into an array--- traversing a singly linked list
  print() {
    let current = this.head;
    let count = 0;
    let arr = [];
    while (count < this.length) {
      arr.push(current.value);
      current = current.next;
      count++;
    }
    // console.log(arr);
    return arr;
  }
  //by index find the value at the given index
  get(index) {
    if (index < 0 || index >= this.length) return false;
    let current = this.head;
    let counter = 0;
    while (counter !== index) {
      // console.log(current)
      current = current.next;
      counter++;
    }
    return current;
  }
  //replace the existing node value and setting it by a new value
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
  insert(index, value) {
    if (index < 0 || index >= this.length) return false;
    let newNode = new Node(value);
    if (index == 0) return !!this.unshift(value);
    if (index == this.length - 1) return !!this.push(value);
    let counter = 0;
    let current = this.head;
    let prev = this.head;
    while (counter !== index) {
      let temp = current;
      current = current.next;
      prev = temp;
      counter++;
    }

    newNode.next = current;
    prev.next = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) {
      this.shift();
      return 0;
    }
    if (index === this.length - 1) {
      this.pop();
      return this.length;
    }
    let counter = 0;
    let current = this.head;
    let prev = this.head;
    while (counter !== index) {
      let temp = current;
      current = current.next;
      prev = temp;
      counter++;
    }
    prev.next = current.next;
    this.length--;
    return true;
  }
  reverse() {
    if (!this.head) return false;
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prev = null;
    let next;
    let k = this.length;

    for (let i = 0; i < k; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return true;
  }
  middleElement() {
    let k = Math.floor(this.length / 2) + 1;
    let counter = 0;
    let current = this.head;
    let middleElement = current;
    while (counter !== k) {
      middleElement = current;
      current = current.next;
      counter++;
    }
    return middleElement;
  }
  numberOfTimes(value) {
    let count = 0;
    let k = this.length;
    let current = this.head;
    while (current) {
      if (current.value == value) {
        count++;
      }
      current = current.next;
    }
    return count;
  }
  removeDuplicate() {
    let current = this.head;

    while (current !== null) {
      let temp = current;
      while (temp != null && temp.value == current.value) {
        temp = temp.next;
      }
      current.next = temp;
      current = current.next;
    }
    // this.length --;
    return this;
  }
  
}
let list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(4);
list.push(4);
list.push(5);
list.push(2);
list.push(1);
// list.push(5);
// list.push(5);
// list.insert(1, "inserted successfully");
// list.reverse();
// console.log(list.numberOfTimes(3)+' '+'Times');
// console.log(list.middleElement());
// list.removeDuplicate()
console.log(list.palindromeCheck())
// list.print();
