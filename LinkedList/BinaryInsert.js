class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BST {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let temp = this.root;
    while (true) {
      if (newNode.value === temp.value) return undefined;
      if (newNode.value < temp.value) {
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      } else {
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }
  contains(value) {
    if (!this.root) return false;
    let temp = this.root;

    while (temp) {
      if (value > temp.value) {
        temp = temp.right;
      } else if (value < temp.value) {
        temp = temp.left;
      } else {
        return true;
      }
    }
    return false;
  }
  minimumValue() {
    if (!this.root) return undefined;
    let temp = this.root;
    while (temp) {
      if (temp.left) {
        temp = temp.left;
      } else {
        return temp.value;
      }
    }
  }
  maximumValue() {
    if (!this.root) return undefined;
    let temp = this.root;
    while (temp) {
      if (temp.right) {
        temp = temp.right;
      } else {
        return temp.value;
      }
    }
  }
}

let myBST = new BST();
myBST.insert(100);
myBST.insert(200);
myBST.insert(150);
myBST.insert(50);
myBST.insert(10);
myBST.insert(1);
myBST.insert(300);
// console.log(myBST.contains(150));
// console.log(myBST.minimumValue())
// console.log(myBST.maximumValue());
console.log(myBST);
