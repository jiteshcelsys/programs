function IntegerRoman(num) {
  const obj = {
    M: 1000,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let result = "";
  for (let data in obj) {
    let remainder = num / obj[data];
    result += data.repeat(remainder);
    num = num % obj[data];
  }
  console.log(result);
}
// IntegerRoman(129);
function RomanToInteger(string) {
  const romanHash = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  for(let i = 0; i< string.length ;i++){
    let first = romanHash[string[i]];
    let last = romanHash[string[i+1]];
    if(last>first){
      result += last - first;
      i++;
    }
    else{
      result += first 
    }
  }
  return result;
}
console.log(RomanToInteger("IXI"));
