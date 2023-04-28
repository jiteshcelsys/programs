function pyramid(n) {
  let string = "";
  // External loop
  for (let i = 1; i <= n; i++) {
    // printing spaces
    for (let j = 1; j <= n - i; j++) {
      string += " ";
    }
    // printing star
    for (let k = 1; k <= 2 * i - 1; k++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
}
pyramid(12)

// leftRightTriangle(6);
function leftRightTriangle(num){
  let string = '';
  for(let i = 1; i<=num; i++){
    for(let print = 0; print < i; print++){
      string +='*'
    }
    string += '\n'
  }
  console.log(string);
}
// leftRightTriangle(4)

function RightTriangle(num){
  let string = '';
  for(let i = 1; i<= num; i++){
    for(let space = 1; space <= num-i; space++){
      string += ' ';
    }
    for(let print = 1; print <= i; print++){
      string += '*'
    }
    string += '\n'
  }
  console.log(string)
}
RightTriangle(5)

