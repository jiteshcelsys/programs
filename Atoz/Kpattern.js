function kPattern(n){
  let pattern = '';
  for(let i=1;i<=n;i++){
    for(let j=1;j<=n;j++){
      let k=Math.floor(n/2);
      if(j == 1 || i+j == n+1 && j<=n/2 ){
        pattern +='*';
      }
      else{
        pattern += ' ';
      }

    }
    pattern += '\n'

  }
  console.log(pattern)
}
kPattern(6);