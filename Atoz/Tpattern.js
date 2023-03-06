function Tpattern(num){
  if(num%2 !== 0){
    let result = '';
  for(let i = 1; i <= num; i++){
    for(let j = 1; j <= num; j++){
      if(j == Math.round(num/2) || i == 1 ){
        result += '*'+ ' ';
      }
      else{
        result+=' '+ ' ';
      }

    }
    result += '\n'
  }
  console.log(Math.round(num/2))
  console.log(result)
  }
  else{
    console.log('enter the odd input')
  }
}
Tpattern(31)