let queue = [];
const maxSize = 5;
let currentSize = queue.length;

function addQueue(newVal) {
  if (currentSize >= maxSize) {
    console.log(" queue limit reached");
  } else {
    queue[currentSize] = newVal;
    currentSize++;
  }
}
function removeQueue() {
  if (currentSize > 0) {
    for (let i = 0; i < queue.length; i++) {
      queue[i] = queue[i + 1];
    }
    currentSize--;
    queue.length = currentSize;
  } else {
    console.log("queue is empty");
  }
}
addQueue(18);
addQueue(19);
removeQueue();
console.log(queue);

// removeQueue();

// let queue = [];
// let maxSize = 5;
// let currentSize = queue.length;

// function QueueAdd(newVal) {
//   if (currentSize >= maxSize) {
//     console.log("queue length exceeded");
//   } else {
//     queue[currentSize] = newVal;
//     currentSize++;
//   }
// }

// function deQueue() {
//   if (currentSize > 0) {
//     for (let i = 0; i < queue.length; i++) {
//       queue[i] = queue[i + 1];
//     }
//     currentSize--;
//     queue.length = currentSize;
//   } else {
//     console.log("queue is empty");
//   }
// }
// QueueAdd(10);
// QueueAdd(20);
// QueueAdd(30);
// QueueAdd(40);

// deQueue();
// console.log(queue);
