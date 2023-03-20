function QuickSort(array) {
  if (array.length === 1) {
    return array;
  }
  let pivot = array[array.length - 1];
  let leftArr = [];
  let RightArr = [];
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > pivot) {sz cx
      RightArr.push(array[i]);
    } else {
      leftArr.push(array[i]);
    }
  }
  if (leftArr.length > 0 && RightArr.length > 0) {
    return [...QuickSort(leftArr), pivot, ...QuickSort(RightArr)];
  } else if (leftArr.length > 0) {
    return [...QuickSort(leftArr), pivot];
  } else {
    return [pivot, ...QuickSort(RightArr)];
  }
}
const arr = [4, 6, 22, 4];
console.log(QuickSort(arr));
