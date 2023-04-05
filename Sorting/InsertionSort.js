function InsertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let minIndex = arr[i];
    for (var j = i-1 ; arr[j]>minIndex && j >- 1; j--) {
        arr[j+1] = arr[j];
    }

    arr[j+1] = minIndex;

  }
  return arr;
}
console.log(InsertionSort([2,5,1,3,8]));

