const data = "hello World how are you";
let result = "";
let output = "";
const length = data.length - 1;

for (let i = length; i >= 0; i--) {
  if (data[i] == " ") {
    output = output + result + " ";
    result = "";
  } else {
    result = data[i] + result;
  }
  if (i == 0) {
    output = output + result;
  }
}
console.log(output);

/**
 * @param {string} s
 * @return {string}
 */
// var reverseWords = function (data) {
//   let result = "";
//   let output = "";
//   let length = data.length - 1;
//   for (let i = length; i >= 0; i--) {
//     if (data[i] == " ") {
//       if (result !== "") {
//         output = output + result + " ";

//         result = "";
//       }
//     } else {
//       result = data[i] + result;
//     }
//     if (i == 0) {
//       output = output + result;
//     }
//   }
//   return output.trim();
// };
// console.log(reverseWords("hello world!"));
