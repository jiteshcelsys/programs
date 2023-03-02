let arr = [];
let currentSize = 0;
const maxSize = 5;

function Iqueue(newVal) {
  if (currentSize >= maxSize) {
    console.log('Max size' + newVal);
  } else {
    arr[currentSize] = newVal;
    currentSize += 1;
  }
}

function deQueueStack() {
  if (currentSize > 0) {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i + 1];
    }
    currentSize = currentSize - 1;
    arr.length = currentSize;
  } else {
    console.log("all elements is deleted");
  }
}

Iqueue(4);
Iqueue(10);
Iqueue(14);
Iqueue(24);

deQueueStack();
deQueueStack();

console.log(arr);