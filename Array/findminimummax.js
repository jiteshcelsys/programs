function minMax(arr){
  let max = arr[0];
  let min = arr[0];

  for(let i = 1; i<arr.length; i++){
    if(arr[i]>max){
      max = arr[i]
    }
    else{
      min = arr[i]
    }
  }
  console.log(max, min)
}
minMax([1,4,2,3,5,8,12,0,14])