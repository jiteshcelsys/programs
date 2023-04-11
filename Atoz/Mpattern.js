// function Mpattern(num) {
//   let result = '';
//   for (let i = 1; i <= num; i++) {
//     for (let j = 1; j <= num; j++) {
//       if (
//         (i == j && i <= num / 2 + 1) ||
//         (i + j == num + 1 && j >= num / 2) ||
//         j == 1 ||
//         j == num
//       ) {
//         result += '*';
//       } else {
//         result += ' ';
//       }
//     }
//     result += '\n';
//   }
//   console.log(result);
// }
// Mpattern(15);
function Mpattern(n){
  let result = '';
  for (let row = 1; row <= n; row++){
    for (let col = 1; col <= n; col++){
        if((col ==row && row <= n/2 +1)||
        (row+col == n+1 && col>=n/2)||col==1||col==n){
          result += '*';
        }
        else{
          result+= ' ';
        }
    }
    result += '\n';
  }
  console.log(result)
}
// Mpattern(24);

function removeDuplicates(number, x = 0){
  for (let i = 0; i < number.length; i++) {
   if(x !== number.lastIndexOf(number[x])){
    number.splice(number.lastIndexOf(number[x]),1);
   }
   if(number.length-1 === x){
    return number
   }
  }
  return removeDuplicates(number, ++x)
}
console.log(removeDuplicates([1,2,1,1,1]))