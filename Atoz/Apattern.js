// function A_Pattern(num){

// }
function A_pattern(num) {
  let string = "";
  for (let i = 1; i <= num; i++) {
    for (let j = 0; j < num - i; j++) {
      string += " ";
    }
    for (let j = 0; j < 2 * i - 1; j++) {
      if (i === 1 || i === Math.floor(num / 2) + 1) {
        string += "*";
      } else {
        if (j == 0 || j == 2 * i - 2) {
          string += "*";
        } else {
          string += " ";
        }
      }
    }
    string += "\n";
  }
  console.log(string);
}
// A_pattern(11)

// function Pattern(num) {
//   let string = "";
//   for (let i = 1; i <= num; i++) {
//     for (let space = 0; space < num - i; space++) {
//       string += " ";
//     }
//     for (print = 0; print < 2 * i - 1; print++) {
//       if (i == 1 || i == Math.floor(num / 2) + 1) {
//         string += "*";//first star and the middle star print
//       } else {
//         if (print == 0 || print == 2 * i - 2) {
//           string += "*";//side star
//         } else {
//           string += " ";
//         }
//       }
//     }
//     string += "\n";
//   }
//   console.log(string);
// }
function Patter(num) {
  let string = "";
  for (let i = 1; i <= num; i++) {
    for (let space = 0; space < num - i; space++) {
      string += " ";
    }
    for (let print = 0; print < 2 * i - 1; print++) {
      if (i == 1 || i == Math.floor(num / 2)+1) {
        string += "*";
      } else {
        if (print == 0 || print == 2 * i - 2) {
          string += "*";
        } else {
          string += " ";
        }
      }
    }
    string += "\n";
  }
  console.log(string);
}

Patter(6);
