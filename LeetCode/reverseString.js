// var reverseString = function(s) {
//   const arr =[];
//   let k =s.length -1
//   for(let i= k; i>=0; i-- ){
//       arr.push(s[i])
//   }
//   return arr
//   }
// const arr =['h','e','l','l','o']
// console.log(reverseString(arr))
//without empty array
var reverseString = function(s) {
  let k =s.length -1
  for(let i= 0; i<=k; i++ ){
  
     s.push(s[k-i])
  }
  s.splice(0,s.length/2)
  console.log(s)
  }

  reverseString(['h','e','l','l','o'])