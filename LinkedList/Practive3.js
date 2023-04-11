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

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return true;
    }
    if (index === 0) {
      let temp = this.head;
      this.head = newNode;
      this.head.next = temp;
      this.length++;
      return true;
    }
    if (index == this.length) {
      console.log(this.tail.next);
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return true;
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

    newNode.next = current;
    prev.next = newNode;
    this.length++;
    return this;
    // console.log(this.head);
  }

  removeByIndex(index) {
    if (index < 0 || index >= this.length) {
      return false;
    }
    if (!this.head) return false;
    if (index === 0) {
      if (!this.head) return undefined;
      this.head = this.head.next;
      this.length--;
      return true;
    }
    if (index === this.length - 1) {
      if (!this.head) return false;
      let current = this.head;
      let newTail = current;
      while (current.next) {
        newTail = current;
        current = current.next;
      }
      this.tail = newTail;
      this.tail.next = null;
      this.length--;
      return true;
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
    // console.log()
    return 1;
  }
  print() {
    let current = this.head;
    let arr = [];
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }
  removeDuplicate() {
    let current = this.head;
    if (!current) return false;
    while (current !== null && current.next !== null) {
      if (current.next.value == current.value) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }
  }
  //by primitive value
  // removeByValue(val){
  //   let current = this.head;
  //   let newNode =  new Set()
  //   while(current){
  //     newNode.add(current.value);
  //   current = current.next;
  //   }
  //   return newNode
  //   // console.log(val)
  // }
  removeByValue(value) {
    let temp = new Node(0);
    let prev = temp;
    let current = this.head;
    while (current) {
      if (current.value == value) {
        prev.next = current.next;
        current = current.next;
      } else {
        prev = current;
        current = current.next;
      }
    }
    console.log(temp);
    return temp.next;
  }
  //reversing the linked list
  reverseList() {
    if (!this.head) return false;
    let node = this.head;
    this.head = this.tail;
    let tail = node;

    let prev = null;
    let next;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return true;
  }
  middleOfLinkedList(){
    let current = this.head;
    while(current){
    let k = (Math.floor(this.length )+1)/2;
    for (let i = 1; i < k; i++) {
     current = current.next;
      
    }
    return current.value;

  }
}
}
let list = new SinglyLinkedList;
list.insert(0, 1);
list.insert(1, 2);
list.insert(2, 3);


// console.log(list.removeByValue(2));
// console.log(list.reverseList());
// console.log(list.middleOfLinkedList());
console.log(list);

// list.removeByIndex(0));
// console.log(list.removeByIndex(3));
// console.log(list.removeByIndex(0));
// list);
// list.print();

//position insertion
/* insert(position, value) {
    if (position < 1 && position > this.length) return false;
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length;
      return true;
    }
    if (position === this.length+1) {
      console.log('entered')
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return true;
    }
    if (position === 1) {
      let temp = this.head;
      this.head = newNode;
      this.head.next = temp;
      this.length++;
      return true;
    }
    let current = this.head;
    let counter = 1;
    let prev = current;
    while (counter !== position) {
      prev = current;
      current = current.next;
      counter++;
    }
    newNode.next = current;
    prev.next = newNode;
    this.length;
    return true;
  }*/