class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  addToHead = function (value) {
    var newNode = new Node(value, this.head, null);
    if (this.head) this.head.prev = newNode;
    else this.tail = newNode;
    this.head = newNode;
  };
  addToTail = function (value){
    var newNode = new Node(value,null, this.tail);
    if(this.tail) this.tail.next = newNode;
    else this.head = newNode;
    this.tail =newNode;
  }
}
class Node {
  constructor(value, next, previous) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }
}

// LinkedList.prototype.addToHead = function (value) {
//   var newNode = new Node(value, this.head, null);
//   if (this.head) this.head.prev = newNode;
//   else this.tail = newNode;
//   this.head = newNode;
// };
var ll = new LinkedList();

ll.addToHead(1000);
ll.addToHead(2000);
ll.addToTail(3000);
ll.addToTail(4000);
console.log(ll);
// LinkedList.prototype.addToTail =function(value){
//   var newNode =new Node(value, null, this.tail);
//   if(this.tail) this.tail.next = newNode;
//   else this.head = newNode;
//   this.tail = newNode;
// }

// LinkedList.prototype.removeHead = function (){
//   if(!this.head) return null;
//   var val = this.head.value;
//   this.head = this.head.next;
//   if(this.head)this.head.previous = null;
//   else this.tail = null;
//   return val;
// }

// ll.addToTail(10);
// ll.addToTail(20);
// ll.addToHead(100);
// ll.addToHead(200);
// ll.removeHead()
