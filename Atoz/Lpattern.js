function Lpattern(n){
  let result = '';
  for(let i = 1; i <= n; i++){
    for(let j = 1; j <= n; j++){
      if(j==1|| i==n){
        result += '*'+ ' ';
      }
      else
      result+=' ';
    }
    result += '\n';
  }
  console.log(result);
}
Lpattern(5)
function Lpattern1(n){
  let result = '';
  for(let row = 1; row <= n; row++){
    for(let col = 1; col <= n; col++){
      if(col==1||row==n){
        result += '*';
      }
      else{
        result += ' ';
      }
    }
    result += '\n';
  }
  console.log(result)
}
// Lpattern1(5)
