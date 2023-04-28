function afterEachWord(str) {
  let output = "";
  for (let i = 0; i < str.length; i++) {
    if (i == 0) {
      output += str[i].toUpperCase();
      continue;
    } 
     if (str[i] == " ") {
      output += str[i] + str[i + 1].toUpperCase();
    } else {
      if(str[i-1]!==' '){
        output += str[i];
      }
    }
  }
  console.log(output);
}
afterEachWord("How can mirrors be real if our eyes aren't real");
