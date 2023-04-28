function FindTwoSum(arr, target){
  // console.log(arr)
  for(let i = 0; i< arr.length ;i++){
      for(let j = i+1; j< arr.length; j++){
        if(arr[i]+arr[j]===target){
          return [i,j]
        }
      }
  }
  return -1
}
console.log(FindTwoSum([12,5,7,9,10],22));