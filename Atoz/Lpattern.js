function Lpattern(num){
  let result =''
  for(let i=1; i<=num; i++){
    for(let j=1; j<=num; j++){
      if(j==1||i==num){
        result += '*' + ' '
        
      }
      else{
        result += ' '
      }
    }
    result+='\n'
  }
  console.log(result)

  
}
Lpattern(15);
// console.log('object')