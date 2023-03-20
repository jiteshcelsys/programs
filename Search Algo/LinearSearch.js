function linearSearch(arr, number) {
  for (let i = 0, l = arr.length; i < l; i++) {
    if(arr[i]===number)
    return i
  }
}
const result = linearSearch([3,1,4,1,5,6,79,9], 3)
console.log(result)
