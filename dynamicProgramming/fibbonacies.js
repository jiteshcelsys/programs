//dynamic programming
function fib(n, prevValues= []){
  if(prevValues[n] != null){
    return prevValues[n]
  }
  let result 
  if(n<=2){
    result = 1;
  }
  else{
    result = fib(n-1, prevValues)+fib(n-2, prevValues)
  }
  prevValues[n] = result;
  return result;
}
//without dynamic programming


// console.log(fibbb(450));
// console.log(fibbb(450));
// console.log(fibbb(450));
// console.log(fibbb(450));
// console.log(fibbb(450));
function fibonacci(n) {
  if(n==0 || n == 1)
      return n;
  return fibonacci(n-1) + fibonacci(n-2);
}
console.log(fibonacci(4))