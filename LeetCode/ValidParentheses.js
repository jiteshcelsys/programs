const isValid = function(s) {
  const obj = {
      '{':'}',
      '[':']',
      '(':')'
  }
  let stack = []
  for(let i= 0 ,l = s.length; i<l; i++){
      if(obj[s[i]]){
          stack.push(obj[s[i]]);
      }
      else{
          const closing = stack.pop()
          console.log(s[i])
          if(closing!==s[i]) {
            return false}
      }
  }
  return stack.length === 0
 
};
// console.log(isValid(']'))












const valid_Parenthsis = (array) =>{
    const obj ={
        '{':'}',
        '[':']',
        '(':')'
    }
    let stack = [];
    for(let i = 0 , l = array.length; i<l; i++){
        if(obj[array[i]]){
            stack.push(obj[array[i]])
        }
        else{
            const closing= stack.pop();
          
            if(closing!==array[i]){
                console.log('entered')
                return false
            }
        }
        console.log(stack)

    }
    return stack.length === 0
  
}
console.log(valid_Parenthsis('(]')//}
)











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