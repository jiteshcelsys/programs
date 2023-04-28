function ArmstrongNumber(number){
  let data = number.toString().length;
  let result =number.toString().split('').map(value => Number(value));
  let output = 0;
  for(let  i = 0; i < result.length ; i++){
    output += result[i]**data;
  }
  if(number === output){
    return true
  }
  else{
    return false
  }
  // for()

}
console.log(ArmstrongNumber(153))