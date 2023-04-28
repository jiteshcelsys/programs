function FindFirstUniqueElement(arr) {
  let result = {}
for(let i = 0; i< arr.length ;i++){
 
    if(!result[arr[i]]){
      result[arr[i]] = 1
    }else{
      result[arr[i]] = result[arr[i]]+1
    }
  
}
// console.log(result)
for(let [key,value] of Object.entries(result)){
  var output = ''
  if(value ==1){
    output+=key
  }
}
if(output.length==0){
  return 0
}
else
{ 
 return Number(output)
}
}
console.log(FindFirstUniqueElement([1,5,2,1,2,1,3]));








function findUniq(arr) {
  let uniq = {},
      result;
  arr.forEach(function(item) {
    uniq[item] = uniq[item] + 1 || 1;
  });
  Object.keys(uniq).forEach(function(key) {
    if (uniq[key] == 1) {
      result = key;
    }
  });
  
  return parseFloat(result);
}