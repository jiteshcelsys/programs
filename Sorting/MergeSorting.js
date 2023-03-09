const merge = (leftArr, rightArr) => {
  const output = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    const leftEl = leftArr[leftIndex];
    const rightEl = rightArr[rightIndex];
    if (leftEl < rightEl) {
      output.push(leftEl);
      leftIndex++;
    } else {
      output.push(rightEl);
      rightIndex++;
    }
  }
  return [
    ...output,
    ...leftArr.slice(leftIndex),
    ...rightArr.slice(rightIndex),
  ];
};

const mergeSort = (array) => {
  if (array.length <= 1) {
    return array;
  }
  const middleIndex = Math.floor(array.length / 2);
  const leftArr = array.slice(0, middleIndex);
  const rightArr = array.slice(middleIndex);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
};
console.log(mergeSort([1, 4, 2, 3, 5, 6]));
//split the given array into two arrays and continue the splitting process until the array having the one element..
//In mergeSort we have to implement the recursive functionality 
function QuickSort(array) {
  if (array.length === 1) {
    console.log("object");
    return array;
  }
  const pivot = array[array.length - 1];
  const leftArr = [];
  const rightArr = [];
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      leftArr.push(array[i]);
    } else {
      rightArr.push(array[i]);
    }
  }
  if (leftArr.length > 0 && rightArr.length > 0) {
    return [...QuickSort(leftArr), pivot, ...QuickSort(rightArr)];
  } else if (leftArr.length > 0) {
    return [...QuickSort(leftArr), pivot];
  } else {
    return [pivot, ...QuickSort(rightArr)];
  }
}

const arr = [3, 4, 1, 9, 6];
console.log(QuickSort(arr));
