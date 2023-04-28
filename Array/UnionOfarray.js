function unionOf(arr1,arr2){
  let k = arr1.length+ arr2.length -1;
  let result = [];
  console.log(k)
  let x = 0;
  let y = 0;
  for(let i = 0; i<=k; i++){
    console.log(i)
    //arr1[x]is true and suppose arr2[y] is false  i am making it true;
    //which helps to insert the arr1[x] value all together and if both the condition is false we are breaking out of the loop and console.log the result array.
    if(arr1[x]<arr2[y]||(!arr2[y]&&arr1[x])){
      result.push(arr1[x]);
      x++;
    }
    if(arr2[y]<arr1[x]||(!arr1[x]&&arr2[y])){
      result.push(arr2[y]);
      y++;
    }
    if(arr1[x]===arr2[y]&&arr1[x]){
      result.push(arr2[y]);
      y++;
      x++;
    }
    if(!arr1[x]&&!arr2[y]){
      break;
    }
 
  }
  console.log(result);
}
unionOf([1,2,35,5],[4,6,5,7,8,9,10,120,1301])