function CheckFib(num){

  if(num === 0 || num ===1){
    return 'fibbo is present';
  }
  let a = 0;
  let b = 1
  const arr = [];
  arr.push(a);
  arr.push(b);
  for(let i=2; i<num-1; i++){
    c = a + b;
    a = b;
    b = c;
    arr.push(c);
    console.log(arr)
    if(c === num){
      return "fibbo is present"
    } 
  }
  return 'fibbo is absent'
}
// console.log(CheckFib(8));
function alternatePrimeNumber(amount){
  let arr = [];
  let count = 0;
  for(let start = 2; start < amount; start++ ){
    let remainder = false
    for(let check = 2; check <=start/2; check++){
       if(start % check == 0){
        remainder = true;
        break;
       }
    }
    // console.log(count)
    if(remainder == false){
      // arr.push(start);

      if(count%2==0){
        arr.push(start);
      }
      count++
    }
  }
  console.log(arr)
}
// alternatePrimeNumber(100)
function primeNumber(length){
 let count = 0;
 if(length == 0){
  return 'No prime Number'
 }
 if(length == 1){
  return [2]
 }
 let arr = []
 for(let i = 2; i<Infinity; i++){
  let prime = false;
  for(let check = 2; check <= i/2 ;check++){
    if(i%check == 0){
      prime = true
    }
  }
  if(prime ==false){
    arr.push(i);
    count++
    if(count===length){
      return arr
    }
  }
 }
}
// console.log(primeNumber(0));
