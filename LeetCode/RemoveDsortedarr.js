function removeDuplicates(number, x = 0, count = 0) {
  console.log(count);
  for (let i = 0, l = number.length; i < l; i++) {
    if (x !== number.lastIndexOf(number[x])) {
      number.splice(number.lastIndexOf(number[x]), 1);
      count++;
    }
    if (number.length - 1 === x) {
      // number.length += count;
      return number;
    }
  }
  return removeDuplicates(number, ++x, count++)
}
console.log(
  removeDuplicates([
  2,1,2,1,4,1,5,6
  ])
);

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

