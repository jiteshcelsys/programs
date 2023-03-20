var singleNumber = function(nums) {
  let unique = new Set();
  for(a of nums){
      if(unique.has(a)){
          unique.delete(a)
      }else{
          unique.add(a)
      }
  }
  console.log(unique.size)
  return Array.from(unique)
};
console.log(singleNumber([1,2,3,2,4,1]))