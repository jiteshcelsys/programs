function isAnagram(string1,string2){
 if(string1.length !== string2.length){
  return false;
 }
 let counter ={}
 for (let letter of string1) {
  counter[[letter]]=(counter[letter] || 0) +1;
 }
 console.log(counter);
 for(let check of string2){
  if(!counter[check]){
    return false
  }
  counter[check]-=1
 }
 return true
}
console.log(isAnagram('hello','oellh'));