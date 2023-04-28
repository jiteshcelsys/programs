function reverseNumber(number) {
  let result = 0;
  result = number.toString().split("").reverse().join("");
  return parseInt(result) * Math.sign(number);
}
// console.log(reverseNumber(-890));

//123 ---  321
//122 ---  221
function ReverseNumber(num) {
  let temp = num;
  let result = 0;
  let i = 1;
  while (temp > 0) {
    let quotient = temp % 10;
    result = result * i + quotient;
    i = 10;
    temp = Math.floor(temp / 10);
  }
  console.log(result);
}
// ReverseNumber(1200);
function ReverseNum(num){
  const negativeNumber = num>0?true:false;
  const print = Math.abs(num);//return absolute value of a number
  let final = 0;
  let temp = print;
  let result = 0;
  let i =1
  while(temp > 0){
    let quotient = temp % 10;
    result = result*i + quotient;
    i=10;
    temp = Math.floor(temp/10)
  }
  const output = negativeNumber?result : -result;
  console.log(output)
}
ReverseNum(123)
