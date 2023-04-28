var countBits = function (n) {
  let binary = "";
  let temp = n;
  while (temp > 0) {
    let remainder = temp % 2;
    binary = remainder + binary;
    temp = Math.floor(temp / 2);
  }
  let count =0;
  for(let i=0; i< binary.length;i++){
    if(binary[i]==1){
    count++
    }
  }
  if(count){
    return count
  }
  else{
    return 0
  }
};
countBits(4);
