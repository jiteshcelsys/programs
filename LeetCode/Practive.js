// class Node{
//   constructor(value){
//     this.value =  value;
//     this.next = null;
//   }
// }
// class SinglyLinkedList{
//   constructor(){
//     this.head = null;
//     this.tail = null
//   }
//   push(value){
//     let newNode = new Node(value)
//     if(!this.head){
//       this.head = newNode;
//       this.tail = newNode;
//     }
//     else{
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//   }
//   pop(){
//     let current = this.head;
//     let newTail = current;
//     while(current.next){
//       newTail = current;
//       current = current.next
//     }
//     this.tail = newTail;
//     this.tail.next = null;
//   }
// }
// let data = new SinglyLinkedList();
// data.push(1)
// data.push(2)
// data.push(3);
// data.pop();
// console.log(data);
class Node {
  constructor(value){
    this.value =value;
    this.next =null;
  }
}
class SinglyLinkedList{
  constructor(){
    this.head = null;
    this.next = null;
    this.length = 0;
  }
  push(value){
    let newNode = new Node(value);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode
    }
    else{
     
      this.tail.next =newNode;
      this.tail = newNode;
      // this.head = temp
    }
    this.length++
    return this
  }
  pop(){
    if(!this.head) return false;
    let current = this.head ;
    let newTail =  current;
    while(current.next){
      newTail = current;
      current = current.next
    }
    this.tail = newTail; 
    this.tail.next = null;
    this.length--;
    if(this.length==0){
      this.head = null;
      this.tail = null;
    }
    return this
  }
  unshift(value){
    let newNode = new Node(value)
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }
    else{
      let temp = this.head
      this.head = newNode;
      this.head.next  = temp ;
    }
    this.length++;
    return this
  }
  //removing the node from the beginning 
  shift(){
  if(!this.head) return undefined;
    let temp = this.head;
    this.head = this.head.next;
    this.length--;
    if(!this.head){
      this.head = null;
      this.tail = null;
    }
  return temp;
  }
  get(index){
    if(index<0||index>=this.length) return false
    let current = this.head;
    let counter =0;
    while(counter!== index){
      
      current = current.next;
      counter++;
    }
    return current
  }
  setIndex(index, value){
    if(index < 0 || index >= this.length) return false
    let current =  this.head;
    let counter = 0;
    while(counter !== index){
      current = current.next;
      counter++;
    }
    current.value = value;
    return this
  }
  print(){
    let current = this.head;
    let arr = []
    while(current){
       arr.push(current.value);
       current = current.next
    }
    return arr
  }
}
let list = new SinglyLinkedList;
list.push(1)
list.push(2)
list.push(3)
list.push(4)
// console.log(list.shift())
// list.pop()
console.log(list.setIndex(2,1222))
console.log(list.print());
// console.log(list)