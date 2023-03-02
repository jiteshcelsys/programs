function YPattern(num){
  let result = ''
  for(let i = 1 ; i <= num; i++){
    for(let j = 1; j <= num; j++){
      if(i+j ==num+1||(i==j && i !== num/2  && j < num/2)) {
        result += '*';
      }
      else{
       result += ' ' ;
      }
    }
    result = result +'\n';
  }
  
  console.log(result);
}
YPattern(8);