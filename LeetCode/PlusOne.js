//problem
// var plusOne = function (digits) {
//   let str = "";
//   for (let i = 0, l = digits.length; i < l; i++) {
//     str += digits[i];
//   }
//   console.log(str);
//   let num = BigInt(str);
//   console.log(num + 1n);
//   num = num + "";

//   let result = [];
//   for (let i = 0; i < num.length; i++) {
//     result.push(Number(num[i]));
//   }
//   return result;
// };
// plusOne([1,9,9])

//correct
//with For loop
// var plusOne = (array) => {
//  for(let i = array.length-1; i>=0; i--){
//   array[i]++;
//   if(array[i]>9){
//     array[i]=0
//   }
//   else {
//     return array
//   }

//  }
//  array.unshift(1)
//  return array
// };
//with While loop
const plusOne = (array) => {
  let length = array.length - 1;
  while (length >= 0) {
    array[length]++;
    if (array[length] > 9) {
      array[length] = 0;
    } else {
      return array;
    }
    length--;
  }
  array.unshift(1);
  return array;
};

// console.log(plusOne([1,9, 1]));
//with using predefined method
const plusAnyNumber = (array, number) => {
const result = Number(array.join(''));
let output =result+number;
output+=''
return output.split('');
};
// console.log(plusAnyNumber([1, 2, 3],9999999));
//without using predefined methods






const plusAnyNumber1=(array,element)=>{
  let len=array.length-1;
  const result =[]
  while(len>=0){
    array[array.length-1] = array[array.length-1] + element;
   break;
  }
   result.push(...array)
  console.log(result)
  for(let i=result.length-1; i>=0; i--){
    const makeString = result[i] + ''
    if(makeString.length>1){
  const Add = Math.floor(Number(makeString)/10)
       console.log(Add)
      return result[i-1]+Add
    }
    }
    return array
  }

// console.log(plusAnyNumber1([1,2,3],51))
var plusOneany = function(digits) {    
  let i = digits.length;
  
  while (i--) {
      digits[i] = (digits[i] + 5) % 10;
      
      if (digits[i] > 0) {
          return digits;
      }
  }
  
  return [1, ...digits];
};
console.log(plusOneany([1,2,3]))
// var plusOne = (array) => {

//     for (let i = array.length - 1; i >= 0; i--) {
//       if (array[i] == 9) {
//         array[i] = 0;

//       } else {
//         array[i]++;
//         return array;
//       }
//     }

// };
