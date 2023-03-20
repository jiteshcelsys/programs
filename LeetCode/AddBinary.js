function AddBinary(num1, num2) {
  let sum1 = parseInt(num1, 2);
  let sum2 = parseInt(num2, 2);
  let result = sum1 + sum2;
  console.log(typeof result);
  let binary = 0;
  let remainder,
    i = 1;
  while (result !== 0) {
    remainder = result % 2;
    result = Math.floor(result / 2);
    binary += remainder * i;
    i = i * 10;
  }
  return binary + "";
}
console.log(AddBinary(11, 11));
const AddBinary1 = (num1, num2) => {
  let k = num1.length + num2.length;
  let str=''
  for (let i = k-1; i >=0; i--) {


  };
  console.log( str);
}
AddBinary1('11','12');
