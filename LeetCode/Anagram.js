var isAnagram = function (s, t) {
  let check = t.split("");
  for (let i = 0, l = check.length; i < l; i++) {
    let desiredIndex = check.indexOf(t[i]);
    console.log(desiredIndex);
    if (desiredIndex || desiredIndex === 0) {
      check.splice(desiredIndex, 1);
      console.log(`${check.join()}`);
    }
  }
  console.log(check);
};

// console.log(isAnagram("aacc", "ccac"));
// console.log(isAnagram("anagram", "nagaram"));

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram1 = function (s, t) {
  if (s.length === t.length) {
    let string = s.split("");
    for (let i = 0; i < string.length; i++) {
      for (let j = 0; j < t.length; j++) {
        let v = s.indexOf(t[i]);
        if (v || v == 0) {
          string.splice(v, 1);
        }
        if (!v) {
          return false;
        }
      }
    }
  } else {
    return false;
  }
  return true;
};
console.log(isAnagram1("car", "rat"));
