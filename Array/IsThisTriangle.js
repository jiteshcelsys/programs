function IsThisTriangle(a, b, c){
  if(c < a+b && a < b+c && b < c+a){
    return 'triangle can be possible'
  }
  return 'triangle cannot be possible'
}
console.log(IsThisTriangle(3,4,5));