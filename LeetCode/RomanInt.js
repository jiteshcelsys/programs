var romanToInt = (s) => {
  const obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  for (let i = 0, l = s.length; i < l; i++) {
    const first = obj[s[i]];
    const last = obj[s[i + 1]];
    if (last > first) {
      result += last - first;
      i++;
    } else {

      result += first;
    console.log(result)

    }
  }
  return result;
};
console.log(romanToInt("IV"));
