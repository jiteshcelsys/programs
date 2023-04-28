//Time Complexity = O (n*logn)
function QuickSort1(arr){
  if(arr.length == 1){
    return arr;
  }
 let pivot = arr[arr.length -1];
 let leftArr = [];
 let RightArr = [];
 for(let i= 0;  i<arr.length-1;i++){
      if(arr[i]>pivot){
        RightArr.push(arr[i])
      }
      else{
        leftArr.push(arr[i])
      }
 }
 if(leftArr.length>0 && RightArr.length>0){
  return [...QuickSort1(leftArr), pivot, ...QuickSort1(RightArr)];
 }
 else if(leftArr.length > 0){
  return [...QuickSort1(leftArr), pivot];
 }
 else{
  return [ pivot, ...QuickSort1(RightArr)]
 }

}
const array = [2,5,1,7,3,6,9,0];
console.log(QuickSort1(array));