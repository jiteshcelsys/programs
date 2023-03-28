class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  addToHead(value) {
    let headNode = new Node(value, this.head, null);
    if (this.head) this.head.prev = headNode;
    else this.tail = headNode;
    this.head = headNode;
  }
  addToTail(value) {
    let tailNode = new Node(value, null, this.tail);
    if (this.tail) this.tail.next = tailNode;
    else this.head = tailNode;
    this.tail = tailNode;
  }
  removeFromHead() {
    if (!this.head) return null;
    let val = this.head.value;

    this.head = this.head.next;
    if (this.head) this.head.prev = null;
    else this.tail = null;
    return val;
  }
  removefromtail() {
    let val = this.tail.value;
    this.tail = this.tail.prev;
    if (this.tail) this.tail.next = null;
    else this.head = null;
    return val;
  }
  search = function (data) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === data) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };
  indexOff = function (value) {
    let currentNode = this.head;
    let counter = 0;
    while (currentNode) {
      if (currentNode.value === value) {
        return counter;
      }
      counter++, (currentNode = currentNode.next);
    }
  };
  deleteFromNode(dataArr, del) {
    let currentNode = dataArr;
    while (currentNode.head) {
      if (currentNode.head.value === del) {
        currentNode.head.prev.next=currentNode.head.next
        currentNode.head.next.prev = currentNode.head.prev
      }
      currentNode.head = currentNode.head.next;
    }
    return currentNode.tail
    // console.log(dataArr)
  }
}
class Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

function BubbleSorting(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}
function SortedNode(array) {
  const sortedArr = BubbleSorting(array);
  for (let i = 0; i < sortedArr.length; i++) {
    ll.addToHead(sortedArr[i]);
  }
  return ll;
}

let ll = new LinkedList();
// ll.addToHead(1)
// ll.addToHead(2)
// ll.addToHead(3)
// ll.addToHead(4)

const data = SortedNode([1,2,3,4,6,5])
// console.log(data)
// console.log(ll)

console.log(ll.deleteFromNode(data,5 ));
