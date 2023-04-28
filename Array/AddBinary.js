function AddBinary(a,b){
  let data = a+b;
  //convert the number to binary
  let some = data;
  let binaryCode =''
  while(some!==0){
    let remainder = some % 2;

    binaryCode =remainder + binaryCode;
    some =Math.floor(some/2);
    console.log(some)
  }
  return Number(binaryCode)

}
AddBinary(10, 4);