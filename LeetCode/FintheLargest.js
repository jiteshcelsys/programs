function FindLargest(arr){
    let max= arr[0];
    for(let i=1; i<arr.length; i++){
      if(arr[i]>max){
        max=arr[i];
      }
    }
    return max
}
console.log(FindLargest([1,2,3,4,9,5,11]))
