function FindTheOdd(num){
 const map = new Map();
 for(let  i = 0; i < num.length; i++){
  if(!map.has(num[i])) map.set(num[i],1)
  else{
    map.set(num[i],map.get(num[i])+1)
  }
 }
 for(let [key,value] of map){
  if(value %2 !== 0){
    return key
  }
 }
return 0; 
}
// console.log(FindTheOdd([1,22,3,22]))
function findOdd(num){
  let obj = {};
  for(let  i = 0; i< num.length; i++){
    if(!obj[num[i]]){
      obj[num[i]]=1
    }
    else{
      obj[num[i]] = obj[num[i]]+1
    }
  }
  let value = Object.values(obj)
  console.log(value)
   let result =value.find(value=>value%2!==0)
 let key = Object.keys(obj).find(value =>obj[value] ==result);
 console.log(key)

  // console.log(obj)

}
console.log(findOdd([1,2,3,1,1,1]))