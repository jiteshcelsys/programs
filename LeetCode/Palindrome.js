var isPalindrome = function(x) {
  let temp =x
  let swap=''
  while(temp>0){
      swap +=temp%10
      temp=Math.floor(temp/10)

  }
  // console.log(typeof Number(swap))
  if(swap===x){
      return true
  }
  return false 
  
};

console.log(isPalindrome(171))