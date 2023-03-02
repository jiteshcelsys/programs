function Npattern(num) {
  let result = '';
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
      if (i == j || j == 1 || j == num) {
        result += '*';
      } else {
        result += ' ';
      }
    }
    result += '\n';
  }
  console.log(result);
}
Npattern(6);
