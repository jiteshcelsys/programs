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
