var searchInsert = function(number, target) {
  for(let i = 0 ; i<number.length; i++){
    if(target<=number[i]){
      return i
    }
  }
  return number.length
}

console.log(searchInsert( [0,1,6,9], 8)
)
//[1,3,5,6]
// 0,1,2,3