const arr1 = [1, 2, 3, 5, 7, 23, 65, 90];
const arr2 = [11, 22, 33, 66, 88, 100];
const k = arr1.length + arr2.length;
let arr3 = [];
let x = 0;
let y = 0;

for (let i = 0; i < k; i++) {
  if (arr1[x] < arr2[y]) {
    arr3.push(arr1[x]);
    x += 1;
  } else {
    arr3.push(arr2[y]);
    y += 1;
  }
}
console.log(arr3);
