// [1, 22, 34, 66, 78, 99, 110];
//56
// function averageNumberFind(arr, num) {
//   for (let i = 0; i < arr.length; i++) {
//     let result = 0;
//     for (let j = i + 1; j < arr.length; j++) {
//       result = (arr[i] + arr[j]) / 2;
//       if (result == num) return true;
//     }
//   }
//   return false;
// }
function averageNumberFind(arr, num) {
  let first = 0;
  let last = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    if ((arr[first] + arr[last]) / 2 < num) {
      first++;
    } else if ((arr[first] + arr[last]) / 2 > num) {
      last--;
    }
    if ((arr[first] + arr[last]) / 2 == num) {
      return true;
    }
  }
  return false;
}
// console.log(averageNumberFind([1, 22, 34, 66, 78, 99, 110], 56));
// function fibonaciesNUmber(num) {
//   if (num <= 0) {
//     return false;
//   }
//   if (num == 1) {
//     return [1];
//   }
//   const arr = [];
//   let a = 0;
//   let b = 1;
//   arr.push(a);
//   arr.push(b);
//   for (let i = 2; i < num; i++) {
//     c = a + b;
//     a = b;
//     b = c;
//     arr.push(c);
//   }
//   return arr;
// }
// console.log(fibonaciesNUmber(1))

// function fibbnacieRecursion(num,i = 1, result=1,){
//   console.log(num , i , result);
//   if(i === num){
//     return  result;
//   }
//   const updatedResult = result + i; 
//   fibbnacieRecursion(num, i+=1, updatedResult);
// }

// function ParentFibbonacie(num){
//   for(let  i = 0 ; i< num; i++){
//     console.log(  fibbnacieRecursion(i))//0,1,1
//   }
// }

// ParentFibbonacie(45)
//
// console.log(fibbnacieRecursion(5));
function factorialRecursive=(function(n){
  let arr = [];
  return function(n){
    if(n==2){
      arr.push(2)
      return arr;
    }
    else{
      for(let )
    }
  }
})