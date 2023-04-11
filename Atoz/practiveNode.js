// // //stack
// // let arr = [];
// // let currentSize = 0;
// // const maxSize = 5;

// // function PushData(value) {
// //   if (currentSize <= maxSize) {
// //     arr[currentSize] = value;
// //     currentSize++;
// //   }
// // }
// // function PopData(){
// //   if(currentSize>0){
// //     currentSize--;
// //     arr.length = currentSize;
// //   }
// // }
// // PushData(12);
// // PushData(22);
// // PopData();
// // // PopData();
// // console.log(arr)

// let arr = [];
// let currentSize = 0;
// const maxSize = 5;
// function queueAdd(value){
//   if(currentSize<=maxSize){
//     arr[currentSize] = value;
//     currentSize++;
//   }
//   else{
//     console.log('Maximum size exceeded')
//   }
// }
// function popQueueData(){
//   for(let i = 0, l = arr.length; i<l; i++){
//     arr[i] = arr[i+1];
//   }
//   currentSize--;
//   arr.length = currentSize;
// }

// queueAdd(12)
// queueAdd(13);
// popQueueData()
// console.log(arr)
// function anagram(str1, str2){
//   let counter = {};
//   if(str1.length !== str2.length) return false;
//   for(let check of str1){
//     counter[check] = (counter[check]||0)+1
//   }
//   for(let result of str2){
//     if(!counter[result]){
//       console.log(counter[result])
//       return 'Not anagram'
//     }
//     counter[result] -=1;
//     console.log(counter[result])
//   }
//   return 'anagram'
// }
// console.log(anagram('hello','heolm'))
// function pangram(str){
//   const result = new Array(26).fill(false);
//   for(let i=0; i<str.length; i++){
//     let index ;

//     if(str[i]>='A'&&str[i]<='Z'){
//       index = str[i].charCodeAt() - 'A'.charCodeAt(0)
//     }
//     if(str[i]>='a'&& str[i]<='z'){
//       index = str[i].charCodeAt() - 'a'.charCodeAt(0);
//     }
//     result[index] = true;
//   }
//   for(let check of result){
//     if(!check){
//       return false
//     }
//   }
//   return true;
// }
// console.log(pangram('The quick brown fox jumps over the lazy dog'))
// function reverseSentence(str){
//   let compile = '';
//   let result = '';
//   let k = str.length-1
//   for(let i= k ;i>=0; i--){
//     if(str[i]===' '){
//       result +=compile+' '
//       compile = ''
//     }
//     else{
//       compile = str[i]+compile
//     }
//   if(i==0){
//     result += compile;
//   }
//   }
//   // console.log(result);
//   return result
// }
// console.log(reverseSentence('hello boys how are you '))

var name = 'Node';
function NodeInput(){
  console.log(`${name} and ${name}`)
  var name = 'some';
}
NodeInput();