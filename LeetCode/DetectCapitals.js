function detectCapitals(str){
  // const string=str.slice(0,str.length-1)
  for(let i=0,l=str.length; i<l; i++){
     if(str[i]!==str[i].toUpperCase()){
      return false
     }
    
  }
  return true

}
console.log(detectCapitals('USA'));