function SelectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}
console.log(SelectionSort([43, 341, 112, 452, 12, 6, 7]));
//first element will be sorted and accordingly all the other elements will be sorted.

//assuming the first element is the smallest and than compare the other element and swap the index based on the condition and after that swap the array element
