function MissingNumber(array,n){
  const result =array.sort((a,b)=>{
      return a-b;
  })

}
console.log(MissingNumber([1,3],2))