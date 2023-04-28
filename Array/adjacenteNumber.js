//[1,2,6,5,4]--->[6]//find the element with is greater than his Neighbor
function adjacentNeighbor(arr){
let counter ;
let result = [];
for(let  i = 0; i< arr.length; i++){
  if(i == 0){
    counter = arr[i];
    if(counter>arr[i+1]){
      result.push(counter)
      //it skip the particular iteration.
      //break it comes out of the loop
    }
  }
  counter = arr[i];
  if(counter>arr[i+1]&&counter>arr[i-1]){
    result.push(counter)
  }
  if(i==arr.length-1){
    counter = arr[i]
    if(counter>arr[i-1]){
      result.push(counter)
    }
  }
  
}
console.log(result)
}
adjacentNeighbor([1,2,6,5,9,4,1000000000])