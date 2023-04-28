// function findCommonElement(arr1, arr2, arr3){
//  let temp = [];
//  let  k = arr1.length*3;
//  for(let i = 0; i< k; i++){
//   if(arr1.includes(arr2[i])){
//     temp.push(arr2[i])
//   }
  
//  }
//  let result = [];
//  for(let i= 0; i< k; i++){
//   if(temp.includes(arr3[i])){
//     if(!result.includes(arr3[i])){
//  result.push(arr3[i])
//     }
//   }

//  }
//  console.log(result)
// }
// const arr1 = [-95, -45, -28 ,-23, -19, -14, 3 ,33, 41]
// const arr2 = [-97, -75, -72 ,-70, -57, -44, ,-27, -25, -14 ,14 ,20 ,21, 33 ,35 ,36, 53, 95, 9,7 ,98]
// const arr3 = [-96, -93,33]
// findCommonElement(arr1, arr2, arr3)
function findCommonElement(arr1, arr2, arr3,n1 = arr1.length,n2 =arr2.length, n3 = arr3.length){
  let i = 0 ;
  let j = 0; 
  let k = 0; 
  // console.log(n1,n2,n3);
  let result = []
  while(i<n1 && j<n2 && k<n3){
    if(arr1[i]== arr2[j]&& arr2[j]==arr3[k]){
      result.push(arr1[i]);
      i++;
      j++;
      k++;
    }
    else if(arr1[i]<arr2[j]) i++;
    else if(arr2[j]<arr3[k])j++;
    else k++
    // console.log(i,j,k)
  }
  console.log(result)
}
const arr1 = [-95, -45, -28 ,-23, -19, -14, 3 ,33, 41]
const arr2 = [-97, -95,33,-64, -62, -61, -59, -50, -50, -48, -48, -42, -41, -39, -38, -32, -31 ,-26, -21, -20, -16, -11, -10, -6 ,-3, -2, -2, 0, 2, 3, 1, 12, 24, 32, 33, 42 ,44, 47, 48, 50, 54,]
const arr3 = [-96 ,-93 ,-88, -74, -69, -67 ,-66, -65, -64, -62, -61, -59, -50, -50, -48, -48, -42, -41, -39, -38, -32, -31 ,-26, -21, -20, -16, -11, -10, -6 ,-3, -2, -2, 0, 2, 3, 1, 12, 24, 32, 33, 42 ,44, 47, 48, 50, 54, 55, 57, 58, 63, 72, 75, 85, 93, 94]
findCommonElement(arr1, arr2, arr3)