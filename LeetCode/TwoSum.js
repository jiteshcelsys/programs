var twoSum = function(number, target) {
  let output =[]
  let result=0
  for(let i = 0, l = number.length; i < l-1; i++){
      for(let j = i+1, l = number.length; j < l; j++ ){
        result =number [i]+ number[j];
        if(result == target){
          return [...output, i, j]
        }
      }
      
  }
  
};

console.log(twoSum([3,3,3],6))
