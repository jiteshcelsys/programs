function binarySearch(arr, number) {
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    let midIndex = Math.floor((min + max) / 2);
    console.log("midIndex: " + midIndex + " min: " + min + " max: " + max);
    if (arr[midIndex] < number) {
      min = midIndex + 1;
    } else if (arr[midIndex] > number) {
      max = midIndex - 1;
    } else {
      return midIndex;
    }
  }
  return -1;
}
const result = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 2);
console.log(result);
