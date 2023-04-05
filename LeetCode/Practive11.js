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
      // console.log(this.head)
      let temp = this.head;
      this.head = newNode;
      this.head.next = temp;
      this.length++;
      return true;
    }
    if (index == this.length ) {
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
    return true;
    // console.log(this.head);
  }
  print() {
    let current = this.head;
    let arr = [];
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    console.log(arr);
  }
  remove(index){
    if(index<0 || index >= this.length)return false;
    if(!this.head){
      return false
    }
    if(index == 0){
      this.head = this.head.next;
      this.length--;
      return true

    }
    if(index == this.length-1){

      let current =  this.head;
      let newTail =  current
      while(current.next){
        newTail = current;
        current = current.next;
      }
      this.tail = newTail;
      this.tail.next = null;
      this.length--;
      return true
    }
   let current =  this.head;
   let prev =  current; 
   let counter = 0;
   while(counter !== index){
    prev = current;
    current = current.next;
    counter++;
   }
   prev.next = current.next;
   this.length--;
   return true



  }
}
let list = new SinglyLinkedList();
list.insert(0, "data1");
list.insert(0, "data2");
list.insert(1, "data3");
list.insert(1, "data4");
list.insert(4, "data5");
list.insert(4, "data6");
list.insert(0, "data7");
// console.log(list);
console.log(list.remove(0))
console.log(list.remove(1))
console.log(list.remove(1))
console.log(list.remove(1))
console.log(list.remove(1))
console.log(list.remove(1))
// console.log(list.remove(1))
// console.log(list.remove(1))
// console.log(list.remove(1))
// console.log(list.remove(1))
// console.log(list.remove(1))
// console.log(list.remove(1))
list.print();
