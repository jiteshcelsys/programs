function reverseString(str){
  let result = '';
  let k=  str.length-1;
  for(let i =k ; i>=0; i--){
    result +=str[i];
  }
  return result
}
console.log(reverseString('GEEKS'));