const data = "hello World how are you how";
//replace every vowel with z;
const isVowel = 'aeiou';
let result = '';

for(let i=0; i<data.length; i++){
  if(isVowel.includes(data[i])){
    result +='z';
  }
  else{
    result+=data[i];
  }

}
console.log(result)
