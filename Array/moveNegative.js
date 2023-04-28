function moveNegativeNumber(arr){
  let pivot=0;
  let lefArr=[]
  let RightArr=[];
  for(let i =0; i<arr.length; i++){
    if(arr[i]>pivot){
      RightArr.push(arr[i])
    }
    else{
      lefArr.push(arr[i])
    }
  }
   console.log([...lefArr,...RightArr]);
}
moveNegativeNumber([-1,-4,-4,6,8,9,-4,-4,-2])