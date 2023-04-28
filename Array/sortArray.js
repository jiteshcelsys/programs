function sortArray(arr) {
  if (arr.length == 1) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let leftArr = [];
  let RightArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (pivot > arr[i]) {
      leftArr.push(arr[i]);
    } else {
      RightArr.push(arr[i]);
    }
  }
  if (leftArr.length > 0 && RightArr.length > 0) {
    return [...sortArray(leftArr), pivot, ...sortArray(RightArr)];
  } else if (leftArr.length > 0) {
    return [...sortArray(leftArr), pivot];
  } else {
    return [pivot, ...sortArray(RightArr)];
  }
}
// console.log(sortArray([6,3,7,3,1,8]))

//You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original position
function sortArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    if (arr[i] % 2 !== 0) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j] && arr[j] % 2 !== 0) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
      }
    }
  }
  console.log(arr);
}
// sortArray([5, 8, 6, 3, 4, 1]);
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000
function RomanToInteger(roman) {
  let obj = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
  };
  let result = 0;
  for(let i = 0;i <roman.length; i++){
   let first = obj[roman[i]];
   let last = obj[roman[i+1]];
   if(last > first){
    result +=last-first;
    i++;
   }
   else{
    result += first;
   }

  }
  console.log(result)
}
RomanToInteger("VII");
