function binarySearch(arr,number){
  let min = 0 ;
  let max = arr.length -1;
  while(min <= max){
    let midIndex = Math.floor((min + max) / 2);
    if(arr[midIndex]<number){
      min = midIndex +1;
    }
    else if(arr[midIndex]>number){
      min = midIndex -1
    }
    else{
      return midIndex +1;
    }
  }
  return -1
}
console.log(binarySearch([1,2,3,4],3)
)