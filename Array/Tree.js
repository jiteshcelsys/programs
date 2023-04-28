const arr = [5,12,7,18,19,5,10,13];

function SeeTree(arr, num){
  let changeTree = num
  const result = [];
  counter = 0;
  for(let i = 0; i<arr.length; i++){
      if(arr[i]===changeTree){
        changeTree = arr[i];
        counter++;
      }
     else if(counter>0){
        if(changeTree<arr[i]){
          changeTree = arr[i];
          result.push(changeTree);
        }
      }
  }
  console.log(result)

}
SeeTree(arr,12)