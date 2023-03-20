function Lpattern(num){
  let result =''
  for(let row=1; row<=num; row++){
    for(let column=1; column<=num; column++){
      if(column==1 || row==num){
        result +=  '*' + ' '
        
      }
      else{
        result += ' '
      }
    }
    result+='\n'
  }
  console.log(result)
}
Lpattern(7);
// console.log('object')