function removeDuplicates(arr){
  let obj = {};
  for(let a of arr){
    obj[a] = true;
  }
  let data = Object.keys(obj);
  //let gives the key data in an array format
  console.log(data)

}
removeDuplicates([1,2,3,1,4,5])