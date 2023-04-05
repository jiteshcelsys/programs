function BinarySorted(arr1){
  for(let i = 0; i <= arr1.length-1; i++){
    for(let j = 0; j <= arr1.length-1-i; j++){
      if(arr1[j]>arr1[j+1]){
        [arr1[j],arr1[j+1]] = [arr1[j+1], arr1[j]]
      }
    }
 }
 return arr1

}

function sortUnsortedArr(arr1, arr2){
 const data = BinarySorted(arr1);
 const data2 = BinarySorted(arr2);
 const result = [];
 let x = 0;
 let y = 0;
 let k = data.length + data2.length;
 for(let i = 0; i< k; i++){
  if(data[x]<data2[y]){
    result.push(data[x]);
    x++;
  }
  else{
    result.push(data2[y]);
    y++
  }
 }
 return result;
//  console.log(result);
}
console.log(sortUnsortedArr([0, 1, 5, 3, 5, 2],[3, 1, 6, 7, 4, 2]));