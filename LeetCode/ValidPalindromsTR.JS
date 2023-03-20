function validPalindrome(string){
  let result = ''
  for(let i = 0 ,l=string.length; i<l ; i++){
    
     if((string[i]>='A'&& string[i]<='Z'||string[i]>='a' && string[i]<='z')||(string[i]>=0 && string[i]<=9) && (string[i]!==' ')){
      result += string[i].toLowerCase()

     }
    
  }
  console.log(result)
  const reverseResult = result.split('').reverse().join('')
  // return reverseResult

  if(result ===reverseResult){
    return true
  }
  else{
    return false
  }
console.log(result)
}
console.log(validPalindrome('ab_a'))
//true
;