function FindTheNextSquare(square){
  let nextInteger = Math.sqrt(square);
  let check = nextInteger - Math.floor(Math.sqrt(square));
  console.log(check?true:false)
  if(check){
    return -1
  }
  else{
    return (nextInteger+1)**2
  }
}
console.log(FindTheNextSquare(122))