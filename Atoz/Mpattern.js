function Mpattern(num) {
  let result = '';
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
      if (
        (i == j && i <= num / 2 + 1) ||
        (i + j == num + 1 && j >= num / 2) ||
        j == 1 ||
        j == num
      ) {
        result += '*';
      } else {
        result += ' ';
      }
    }
    result += '\n';
  }
  console.log(result);
}
Mpattern(15);
