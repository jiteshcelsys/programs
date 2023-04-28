function count(arr) {
  let obj = {};
  for (let i = 0, l = arr.length; i < l; i++) {
    obj[arr[i]] = (obj[arr[i]] || 0) + 1;
  }
  console.log(obj);
}
// count([1,2,1,3,4,1,2]);
function fibbonacies(num) {
  const arr = [];
  let a = 0;
  let b = 1;

  if (num == 1) {
    arr.push(a);
    return arr;
  }
  if (num == 2) {
    arr.push(a);
    arr.push(b);
    return arr;
  }
  arr.push(a);
  arr.push(b);
  for (let i = 3; i < num; i++) {
    let temp = a;
    a = b;
    b = temp + b;
    arr.push(b);
  }
  console.log(arr);
}
fibbonacies(8);


//using recursion


