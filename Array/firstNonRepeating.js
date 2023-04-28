function firstNonRepeatingElement (arr){

  for(let i = 0; i < arr.length ;i++ ){
    let count = 0
    for(let j = i+1; j < arr.length ;j++ ){
      if(arr[i] === arr[j]){
        count++
      }
    }
    if(count == 0){
      return arr[i]
    }
  }
}
console.log(firstNonRepeatingElement([1,2,3,2,1,5]));\
//find the unique element
const data = [1,1,1,3,3,4,2,1,4,7,1,5,3,7]