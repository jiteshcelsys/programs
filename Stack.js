let arr = [];
let currentSize = arr.length;
const maxSize = 5;

function push(newVal) {
  if (currentSize >= maxSize) {
    console.log("Max size" + newVal);
  } else {
    arr[currentSize] = newVal;
    currentSize += 1;
  }
}
function pop() {
  if (currentSize > 0) {
    currentSize += -1;
    arr.length = currentSize;
  }
  console.log("all elements is removed from an array");
}
push(5);
push(4);
push(52);
push(58);
push(5);
push(35);
push(775);
pop();
pop();
console.log(arr);
