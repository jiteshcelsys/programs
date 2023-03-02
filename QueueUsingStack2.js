//Implement Queue using stack
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
  const deQueue = [];
  let k = arr.length;
  for (let i = k - 1; i > 0; i--) {
    deQueue.push(arr[i]);
  }
 arr.length = 0;
 let q = deQueue.length;
  for (let i = q - 1; i >= 0; i--) {
    arr.push(deQueue[i]);
  }
}

Iqueue(4);
Iqueue(10);
Iqueue(14);
Iqueue(24);
deQueueStack();
deQueueStack();
console.log(arr);

/*
24
14
10
4
*/

/*
10
14
24
 */

/*
24
14
10
*/

// deQueueStack();
// deQueueStack();

