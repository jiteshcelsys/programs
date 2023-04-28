//143 --- 431

function biggestNumber(num){

  let result = num.toString().split('').sort((a,b)=>{return b-a}).join('')
  var data =Number(result)
 
  console.log(result,typeof data)
}
biggestNumber(131)
