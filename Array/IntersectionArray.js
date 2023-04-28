function IntersectionArray(arr1, arr2){
  let k = arr1.length + arr2.length;
  console.log(k)
  let result = []
  let length2 = arr2.length
  for(let  i = 0; i<k; i++){
    for(let j = 0; j<length2; j++){
      if(arr1[i]===arr2[j]){
        result.push(arr1[i])
      }
    }
    // console.log(i)
  }
  console.log(result)
  
}
IntersectionArray([1,2,3,5,6,7,8,9,12],[5,8,9,10,12])