function MajorityElement(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = (obj[arr[i]] || 0) + 1;
  }
  let data = Object.values(obj);
  const max = Math.max(...data);
  if(max >=(arr.length/2))
  var result = Object.keys(obj).find((key) => obj[key] === max)
  console.log(result?result:"Majority element is not exist");
}
MajorityElement([2, 5, 5, 4, 5]);

