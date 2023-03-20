function BubbleSorting(arr) {
  for (let i = 0; i <= arr.length - 1; i++) {
    for (let j = 0; j <= arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
console.log(BubbleSorting([8, 2, 8, 2]));
//comparing two alternative element and swap it and after each iteration of the 1st loop(i) loop we will get our largest element  which will be reflected in the second loop of iteration where the no. of iteration is reduced by value i .
