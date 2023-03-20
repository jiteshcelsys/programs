function Apattern(num){
  let result ='';
  for(let i=1; i<=num; i++){
    for(let j=1; j<=num; j++){
      if((i>=Math.floor(num/2)+1) && (j == 1)|| (i >= Math.floor(num/2) + 1) && (j == num)||(i==Math.floor(num/2)+1)||j-i==Math.floor(num/2)||){
       
        result =result+'*'
      }
      
      
      else{
        result += ' '
      }
      
    }
    result+= '\n';
  }
  console.log(result)
}

Apattern(15)