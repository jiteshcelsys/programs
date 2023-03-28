function getLength(string1) {
  let count = 0;
  for (let i of string1) {
    count++;
  }
  return count;
}

const isAnagram = (string1, string2) => {
  if (getLength(string1) !== getLength(string2)) {
    return false;
  }
  let counter = {};
  for (let i of string1) {
    counter[i] = (counter[i] || 0) + 1;
    console.log(counter);
  }
  for (let i of string2) {
   if(counter[i]){
    counter[i] = (counter[i] || 0) - 1;
   }
   else{
      console.log(counter)
     return false 
   }
  }
  return true
};
console.log(isAnagram("rat", "car"));
