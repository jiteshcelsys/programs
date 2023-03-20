const strStr = function(haystack, needle) {
  let k=needle.length
  for(let i=0 ,l=haystack.length; i<l;i++){
      const result = haystack.slice(i,i+k);
      if(result == needle){
          return i
      }
  }
  return -1
};
console.log(strStr('asadbutsad', 'sad'));