//reverse the given string
function reverseString(str) {
  let reverse = "";
  let l = str.length - 1;
  for (l; l >= 0; l--) {
    reverse += str[l];
  }
  return reverse;
}
// console.log(reverseString('data'))
//anagram
function anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let counter = {};
  for (let check of str1) {
    counter[check] = (counter[check] || 0) + 1;
  }
  for (let check of str2) {
    if (!counter[check]) {
      return false;
    }
    counter[check] = counter[check] - 1;
  }
  return true;
  console.log(counter);
}
// console.log(anagram('hello','olleh'))
//pangram check
function pangramCheck(str) {
  let check = new Array(26).fill(false);
  let index;
  for (let i = 0, l = str.length; i < l; i++) {
    if (str[i] >= "A" && str[i] <= "Z") {
      index = str.charCodeAt(i) - "A".charCodeAt(0);
    } else if (str[i] >= "a" && str[i] <= "z") {
      index = str.charCodeAt(i) - "a".charCodeAt(0);
    } else continue;
    check[index] = true;
  }
  console.log(check);
  for (let counter of check) {
    if (!counter) {
      return false;
    }
  }
  return true;
}
// console.log(pangramCheck('The uick brown fox jumps over the lazy dog'))
function sortTwoArray(arr1, arr2) {
  let k = arr1.length + arr2.length - 1;
  let x = 0;
  let y = 0;

  const result = [];
  for (let i = 0; i < k; i++) {
    if (arr1[x] < arr2[y]) {
      result.push(arr1[x]);
      x++;
    } else {
      result.push(arr2[y]);
      y++;
    }
  }
  return result;
}
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 4, 5, 6];

// console.log(sortTwoArray(arr1, arr2));
function binarySearch(arr, numb) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let midIndex = Math.floor((min + max) / 2);
    if (arr[midIndex] < numb) {
      min = midIndex + 1;
    } else if (arr[midIndex] > numb) {
      max = midIndex - 1;
    } else {
      return midIndex;
    }
  }
  return -1;
}
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 2));
function pangram(string) {
  let result = new Array(26).fill(false);
  let str = string.split(" ").join("");
  let index;
  console.log(str);
  for (let i = 0, l = str.length; i < l; i++) {
    if (str[i] >= "A" && str[i] <= "Z") {
      index = str.charCodeAt(i) - "A".charCodeAt(0);
    } else if (str[i] >= "a" && str[i] <= "z") {
      index = str.charCodeAt(i) - "a".charCodeAt(0);
    } else continue;
    result[index] = true;
  }
  for (let validate of result) {
    if (!validate) {
      return "NOt Pangram";
    }
  }
  return "Pangram";
  // console.log(result);
}
// console.log(pangram('The quick brown fox jumps over the lazy dog'));
function anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let counter = {};
  for (let check of str1) {
    counter[check] = (counter[check] || 0) + 1;
  }
  for (let data of str2) {
    if (!counter[data]) {
      return false;
    }
    counter[data] -= 1;
  }
  return true;
  console.log(counter);
}
// console.log(anagram('hellllllo','hellz'));
function K_pattern(n) {
  let result = "";
  k = -1;
  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= n; col++) {
      if (col === 1 || (row + col == n - 1 && row >= Math.floor(n / 2))) {
        result += "*";
      } else {
        result += " ";
      }
    }
    k += 2;
    result += "\n";
  }
  console.log(result);
}
// K_pattern(7)
//find the smallest Element from an array;
function smallestElement(arr) {
  let min = arr[0];
  for (let i = 1, l = arr.length; i < l; i++) {
    if (arr[i].length < min.length) {
      min = arr[i];
    }
  }
  return min;
}
// console.log(smallestElement(['hello','hi','sagar','i']));
function quicksort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let leftArr = [];
  let RightArr = [];
  for (let i = 0, l = arr.length; i < l - 1; i++) {
    if (arr[i] > pivot) {
      RightArr.push(arr[i]);
    } else {
      leftArr.push(arr[i]);
    }
  }
  if (leftArr.length > 0 && RightArr.length > 0) {
    return [...quicksort(leftArr), pivot, ...quicksort(RightArr)];
  } else if (leftArr.length > 0) {
    return [...quicksort(leftArr), pivot];
  } else {
    return [pivot, ...quicksort(RightArr)];
  }
}
// console.log(quicksort([2,5,4,1,6,7]));

//String concepts hello boys -> boys hello
function String1(string1) {
  let output = "";
  let result = "";
  for (let i = string1.length - 1; i >= 0; i--) {
    if (string1[i] === " ") {
      result += output + " ";
      output = "";
    } else {
      output = string1[i] + output;
    }
    if (i === 0) {
      result += output;
      output = "";
    }
  }

  console.log(result);
}
//hello boys - boys hello
// String1('hello 1boys')
function reverseString(string) {
  let len = string.length - 1;
  let output = "";
  let result = "";
  for (let i = len; i >= 0; i--) {
    if (string[i] === " ") {
      result += output + " ";
      output = "";
    } else {
      output += string[i];
    }
    if (i === 0) {
      result += output;
    }
  }
  console.log(result);
}
// hello boys1 - 1syob olleh
// reverseString('hello boys1')
function reverseStringCompare(string) {
  let len = string.length - 1;
  let result = "";
  let output = "";
  for (let i = 0; i <= len; i++) {
    if (string[i] === " ") {
  console.log(output);
  result += output+' '
      output = "";
    } else {
      output = string[i] + output;
    }
    if (i === len) {
      result +=  output;
    }
  }
  console.log(result);
}
// hello boys --- olleh syob
reverseStringCompare("hello boys");

