const str = 'DECISION!! HURRAH';
const vowel = 'AEIOU';
let newStr = '';

for (let i = 0, l = str.length; i < l; i++) {
  if (vowel.includes(str[i - 1])) {
    newStr =`${newStr}${str[i].toLowerCase()}`;
  } else {
    newStr = `${newStr}${str[i]}`;
  }
}

console.log(newStr);
console.log(newStr.length)
console.log(str.length)
