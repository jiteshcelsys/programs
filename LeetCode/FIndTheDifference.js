//question 389 leetcode
var findTheDifference = function(s, t) {
  let str=''
  let array =t.split('');
  console.log(array)
  
    for(let i= 0, l=s.length;  i<l; i++){
      const v=array.indexOf(s[i])
      console.log(v);
      str+=v
      if(v||v==0){
        array.splice(v,1);
      }
    }
    return array.join('');
  }

console.log(findTheDifference("daqhxesvj","madqhxesvj"))
// console.log(findTheDifference("abcd","eabcd"))