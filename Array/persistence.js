function persistence(num){
let str = String(num);
while(str.length>1){
  str = String([...str].reduce((acc,current)=>{
    return acc*current
  },1))
}
console.log(str)
}
console.log(persistence(39))