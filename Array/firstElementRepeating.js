//find the first element repeating in an array
function firstElementRepeated(arr){
  for(let i = 0; i< arr.length; i++){
    for(let j = i+1; j< arr.length; j++){
      if(arr[i]===arr[j]){
        return arr[i]
      }
    }
  }

}
console.log(firstElementRepeated([1 ,5 ,3 ,4 ,3 ,5, 6]))