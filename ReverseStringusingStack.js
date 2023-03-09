//Reverse string by using stack
let data = [];
let currentSize = data.length;
function push(newVal) {
  data[currentSize] = newVal;
  currentSize++;
}

function pop() {
  lastRemoved = data[currentSize - 1];
  currentSize -= 1;
  data.length = currentSize;
  return lastRemoved;
}

function reverseStr(item) {
  for (let i = 0; i < item.length; i++) {
    push(item[i]);
  }
  for (let i = 0; i < item.length; i++) {
    item[i] = pop();
  }
}

let str = "jitesh ";
str = str.split("");
reverseStr(str);
console.log(str.join(""));
