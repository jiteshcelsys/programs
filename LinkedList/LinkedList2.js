const addNodeInput = document.getElementById("addNode");
const addNodeIndex = document.getElementById("index");
const addNodeBTN = document.getElementById("addNodeBTN");

const uNode = document.getElementById("uNode");
const uIndex = document.getElementById("uIndex");
const updateNodeBTN = document.getElementById("updateNodeBTN");
const dIndex = document.getElementById("dIndex");
const deleteBTN = document.getElementById("deleteBTN");

const render = document.getElementById("render");
const count = document.getElementById("count");

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
    if (index < 0 || index > this.length) {
      alert("Index out of bounds");
      return false;
    }
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return true;
    }
    console.log(index, this.length);
    if (index == 0) {
      console.log(this.head);
      let temp = this.head;
      this.head = newNode;
      this.head.next = temp;
      this.length++;
      return true;
    }
    if (index == this.length) {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return true;
    }
    let counter = 0;
    let current = this.head;
    let prev = this.head;
    while (counter != index) {
      let temp = current;
      current = current.next;
      prev = temp;
      counter++;
    }
    console.log(current);

    newNode.next = current;
    prev.next = newNode;
    this.length++;
    return true;
    // console.log(this.head);
  }

  removeByIndex(index) {
    console.log(index);
    if (index < 0 || index >= this.length) {
      alert("failed to delete node");
      return false;
    }
    if (!this.head) return false;
    if (index == 0) {
      if (!this.head) return undefined;
      this.head = this.head.next;
      this.length--;
      return true;
    }
    if (index == this.length - 1) {
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
    while (counter != index) {
      prev = current;
      current = current.next;
      counter++;
    }
    prev.next = current.next;
    this.length--;
    // console.log()
    return 1;
  }
  update(index, value) {
    console.log("index: " + index);
    console.log("value: " + value);
    if (index < 0 || index >= this.length) {
      alert(" update failed");
      return false;
    }
    let current = this.head;
    let counter = 0;
    while (counter != index) {
      console.log(counter, index);
      current = current.next;
      counter++;
    }
    current.value = value;
    return this;
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
}
let list = new SinglyLinkedList();

addNodeBTN.addEventListener("click", NodeAdd);

function NodeAdd() {
  let index = addNodeIndex.value;
  let value = addNodeInput.value;
  console.log(index, value);
  if (index && value) {
    list.insert(index, value);
  } else {
    alert("enter the value and index for addedNode ");
  }
  addNodeIndex.value = "";
  addNodeInput.value = "";
  console.log(list);
  renderFunc();
}

updateNodeBTN.addEventListener("click", NodeUpdate);
function NodeUpdate() {
  let value = uNode.value;
  let index = uIndex.value;
  if (index && value) {
    list.update(index, value);
  } else {
    alert("enter the value and index for update node");
  }
  uNode.value = "";
  uIndex.value = "";
  console.log(list);
  renderFunc();
}

function deleteSpecificNode(e) {
  let index = document.getElementById("dIndex").value;
  if (index) {
    list.removeByIndex(index);
  } else {
    alert("enter the index to delete");
  }
  document.getElementById("dIndex").value = "";
  console.log(list);
  renderFunc();
}

deleteBTN.addEventListener("click", deleteSpecificNode);

function renderFunc() {
  render.innerHTML = "";
  const rendering_data = list.print();
  count.innerHTML = rendering_data.length
  console.log(rendering_data);
  rendering_data.map((item,index) => {
    let li = document.createElement("li");
    let span = document.createElement("span");
    span.innerHTML = ">";
    li.innerText = item;
    console.log(this.length);
    console.log(index);
    render.appendChild(li);
    render.appendChild(span);
    console.log(item)
    // if(index!==0 && index <=this.length) {
    //   console.log('entered')
    // }

    //  console.log(list);
  });
  // let current = list.head;
  // let prev;
  // let span = document.createElement("span");
  // span.innerHTML = ">"
  // while (current.next) {
  //   prev = current;
  //   if (current) {
  //     render.appendChild(span);
  //   }
  //   current = current.next;
  // }
}
