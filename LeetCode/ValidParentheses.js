const isValid = function(s) {
  const obj = {
      '{':'}',
      '[':']',
      '(':')'
  }
  let stack = []
  for(let i= 0 ,l= s.length; i<l; i++){
      if(obj[s[i]]){
          stack.push(obj[s[i]]);
      }
      else{
          const closing = stack.pop()
          if(closing!==s[i]) return false
      }
  }
  return stack.length === 0
 
};
console.log(isValid('(){'))












// var isValid = function(s) {
//   let result =false
//   for(let i=0, l=s.length;i<l;i++ ){
//       if(s[i]=='('){
//     result=  (s[i]=='('&& s[i+1]==')')?true:false
//     i++
//       }
//       if(s[i]=='{'){
//     result=  (s[i]=='{'&& s[i+1]=='}')?true:false
//     i++
//       }
//      if(s[i]=='['){
//     result=  (s[i]=='['&& s[i+1]==']')?true:false
//     i++
//       }
//   }
//       return result
// };