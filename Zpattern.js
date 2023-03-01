function ZPattern(num) {
  let result = '';
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
      if ((i == 1||i == num) || (i + j == num + 1)) {
        result += '*';
      } else {
        result += ' ';
      }
    }
    result = result + '\n';
  }
  console.log(result);
}
ZPattern(4);