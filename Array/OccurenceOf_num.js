function NumberOccurred(arr){
  // console.log(arr)
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if(typeof arr[i] == 'number'){
      result.push(arr[i])
    }
  }
  console.log(result)
}
NumberOccurred([1,'hello',false,true, 'number',10]);