var isValid = function(s) {
  const map = {
      '{':'}',
      '[':']',
      '(':')'
  }
  let array = []
  for(let i= 0 ,l= s.length; i<l; i++){
      if(map[s[i]]){
          array.push(map[s[i]]);
      }
      else{
          const closing = array.pop()
          if(closing!==s[i]) return false
      }
  }
  return array.length === 0
 
};
// console.log(isValid('[[{}]]')
// )
