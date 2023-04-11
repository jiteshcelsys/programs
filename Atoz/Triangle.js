let height = 5;
let width = 2 * height - 1;


const printA = () => {
  let result = "";
  let n = parseInt(width / 2),
    i,
    j;
  for (i = 0; i < height; i++) {
    for (j = 0; j <= width; j++) {
      if (
        j == n ||
        j == width - n ||
        (i == parseInt(height / 2) && j > n && j < width - n)
      )
        result += "*";
      else result += " ";
    }
    result += "\n";
    n--;
  }
  console.log(result);
};
printA();
