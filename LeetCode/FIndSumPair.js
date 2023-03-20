function FindSumPair(array) {
  let left = 0;
  let right = array.length - 1;
  let result;
  while (left < right) {
    let sum = array[left] + array[right];
    if (sum === 0) {
      return [array[left], array[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
  return -1;
}
//it works only with the sorted element
const arr = [-5, -4, -3, -2, -1, 0, 6, 7, 8, 10];
console.log(FindSumPair(arr));
