function sumArray(arr){
  let result = 0;
  for(let i = 0; i<arr.length; i++){
    result += arr[i]; 
  }
  console.log(result)
}
sumArray([2,1,5,2,3])