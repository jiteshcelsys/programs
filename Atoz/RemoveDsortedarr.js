function removeDuplicates(number, x = 0) {
  for (let i = 0, l = number.length; i < l; i++) {
    if (x !== number.lastIndexOf(number[x])) {
      console.log(number.lastIndexOf(number[x]))
      number.splice(number.lastIndexOf(number[x]), 1);
      // count++;
    }
    if (number.length - 1 === x) {
      return number;
    }
  }
  return removeDuplicates(number, ++x)
}
console.log( removeDuplicates([2,1,2,1,4,1,5,6]));
//2,1,1,4,1,5,6
//2,1,4,5,6 


//Rishi's Code
// var removeDuplicates = function (nums, index = 0) {
//   let count = 0;
//   const requiredEle = nums[index];
//   while (index !== nums.lastIndexOf(requiredEle)) {
//     const lastIndex = nums.lastIndexOf(requiredEle);
//     nums.splice(lastIndex, 1);
//     ++count;
//   }
//   if (typeof nums[index + 1] === "number") {
//       removeDuplicates(nums, ++index);
//     }
//     nums.length = nums.length + count;
//     return nums;
//   };

// var removeDuplicates = function (number) {
//   let x = 0;
//   for(let i=0, l =number.length; i<l; i++){
//     console.log(i)
//     if(number[x]==number[i]){
//       number.splice(i, 1);
//     }
//   }
//   return number

// };
// console.log(removeDuplicates([2,2,3,0,4,2]));

//remove duplicate by using the object
function removeDuplicates(arr){
  let obj = {};
  for(let a of arr){
    obj[a] = true;
  }
  let data = Object.keys(obj);
  //let gives the key data in an array format
  // console.log(data)

}
removeDuplicates([1,2,3,1,4,5])

const arr = ['1',2,4,1,2,3,35];
let data = [...new Set(arr)];
console.log(data)
for(let element of data){
  // console.log(typeof element)
}
//[1,1,1,1,4,2,4,1,5];
function removeDub(arr){
  for(let  i = 0 ; i< arr.length; i++){
    for(let j= i+1; j< arr.length; j++){
      if(arr[i]===arr[j]){
        arr.splice(j,1);
        j--;
      }
    }
  }
  console.log(arr)
}
