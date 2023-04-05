function SelectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    if(minIndex !==i ){
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}
// console.log(SelectionSort([2,5,1,3,8]));



function selectionSort2(arr){
for(let i= 0; i<arr.length; i++){
  let minIndex = i
  for(let j=i+1;j<arr.length;j++){
    if(arr[minIndex]>arr[j]){
      minIndex = j
    }
  }
  if(minIndex!==i){
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }
}
return arr
}
console.log(selectionSort2([2,5,1,3,8, 0]));
//first element will be sorted and accordingly all the other elements will be sorted.

//assuming the first element is the smallest and than compare the other element and swap the index based on the condition and after that swap the array element
