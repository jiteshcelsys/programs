function LinkedList(){
  this.head = null;
  this.tail =null;

}
function Node(value,next, prev){
  this.value = value;
  this.next = next;
  this.prev = prev;
}
LinkedList.prototype.addToHead = function (value){
let headNode = new Node(value,this.head,null);
if(this.head) this.head.prev = headNode;
else this.tail = headNode;
this.head =headNode
}

LinkedList.prototype.addToTail = function (value){
  let tailNode =new Node(value,null,this.tail);
  if(this.tail) this.tail.next = tailNode;
  else this.head = tailNode;
  this.tail = tailNode
}

LinkedList.prototype.removeFromHead = function (){
 if(!this.head) return null;
 let val = this.head.value;//for checking purpose which value is removed
 this.head= this.head.next;
 if(this.head) this.head.prev =null
 else this.tail =null;
 return val;
}