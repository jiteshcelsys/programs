class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}
class SinglyLinkedList{
  constructor(){
    this.head = null;
     this.tail = null;
     this.length = 0;
  }
  push(value){
    let newNode =  new Node(value);
    if(!this.head){
      this.head =  newNode;
      this.tail = newNode;
      this.length++;
      return true;
    }
    else{
      this.tail.next = newNode;
    this.tail = newNode;
    this.length++
    return true;
    }
  }
  unshift(value){
    let newNode =  new Node(value);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
      this.length++
    }
    else{
      let temp = this.head;
      this.head =  newNode;
      this.head.next =  temp;
      this.length++;
    }
  }
  removeByPosition(position){
    if(position<1 && position > this.length){
      return false;
    }
    if(!this.head) return false;
    if(position === 1){
      this.head =  this.head.next;
      this.length--;
      return true;
    }
    if(position === this.length){
      console.log(position, this.length)
      let current = this.head;
      let newTail =  current;
      while(current.next){
        newTail = current;
        current =  current.next;

      }
      this.tail =  newTail;
      this.tail.next = null;
      this.length--;
      return true;
    }
    let current = this.head;
    let prev = current;
    let counter = 1;
    while(counter!== position){
      prev = current;
      current = current.next;
      counter++;
    }
    prev.next = current.next;
    this.length--;
    return true;
  }
}
const list = new SinglyLinkedList;
list.push(12);
list.push(22);
list.push(23);
list.unshift(14)
list.removeByPosition(4)
console.log(list)