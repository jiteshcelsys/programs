// function accum(s) {
//   let string = "";
//   let output = "";
//   for (let i = 0; i < s.length; i++) {
//     let count = 0
//     for (let j = 0; j <= i; j++) {
//       if (j == 0) {
//         if (j == i) {
//           output += s[i].toUpperCase() + "-";
//         } else {
//           output += s[i].toUpperCase();
//         }
//       } else {
//         output += s[i];
//       }
//     }
//     string += output;
//     output = "";
//   }
//   return string;
// }
// console.log(accum("abcd"));
function accum(s) {
  let string = "";
  let output = "";
  let str = s.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    let count = 0;
    for (let j = 0; j <= i; j++) {
      if (count == 0) {
        output += str[i].toUpperCase();
        count++;
      } else {
        output += str[i];
      }
    }
    if (count > 0 && i !== str.length - 1) string += output + "-";
    else {
      string += output;
    }
    output = "";
  }
  return string;
}
// console.log(accum("abcd"));

// function getMiddle(s)
// {
//   for(let i = 0 ;i< s.length ; i++){
//     // s[Math.floor(s.length/2)-1]+s[Math.floor(s.length/2)]

//   }
//   return s.length%2==0?s[Math.floor(s.length/2)-1]+s[Math.floor(s.length/2)] :s[Math.floor(s.length/2)]
// }
// console.log(getMiddle('test'));
function bmi(weight, height) {
  let bmi = weight / height ** 2;
  if (bmi <= 18) {
    return "Underweight";
  } else if (bmi <= 25) {
    return "Normal";
  } else if (bmi <= 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
}
// console.log(bmi(85,1.85))
function solution(str, ending) {
  return str.includes(ending[ending.length - 1]) ? true : false;
}
//  console.log(solution('abcde','abc'));
const reverseSeq = (n) => {
  return Array(n)
    .fill(0)
    .map((e, i) => {
      console.log(i);
      return n - i;
    });
};

// console.log(reverseSeq(7))
// console.log(14%5)
function countBy(x, n) {
  return Array(n - x)
    .fill(0)
    .map((e, i) => x + i * 2);
}
//  console.log( countBy(2,5) )
function evenNumber(data = [1, 2, 3, 4, 5, 6, 7, 8]) {
  return data.reduce((acc, curr) => {
    if (curr > acc) {
      // console.log(curr)
      acc = curr;
    }
    return acc;
  }, 0);
}
// console.log(evenNumber())
function Isograms(string) {
  let result = string.toLowerCase();
  console.log(result);
  let obj = {};
  for (let data of result) {
    if (!obj[data]) {
      obj[data] = 1;
    } else {
      obj[data] += 1;
    }
  }
  for (let data in obj) {
    if (obj[data] > 1) {
      return false;
    }
  }
  return true;
}
// console.log(Isograms("Helo"));

function makeNegative(num) {
  let data = num + "";
  if (data[0] == "-") {
    return num;
  } else return num ? -num : 0;
}
// console.log(makeNegative(0))
function reverseSentences(sentence) {
  let result = "";
  let output = "";
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      output = sentence[i] + output;
    } else {
      result += output + " ";
      output = "";
    }
    if (i == sentence.length - 1) {
      result += output;
    }
  }
  return result;
}
// console.log(reverseSentences('this is a boy'))
function sumArray(array) {
  if (array == null) {
    return 0;
  }
  if (array.length == 0) {
    return 0;
  }
  let max = array[0];
  let min = array[0];
  for (let data of array) {
    if (data > max) {
      max = data;
    }
    if (data < min) {
      min = data;
    }
  }
  let result = 0;
  for (let data of array) {
    if (data !== max || data !== min) {
      result += data;
    }
  }
  return result;
}
// console.log(sumArray([]))
//seeTree -[4,7,3,6,5,8,9]
function seeTree(arr) {
  let see = arr[0];
  let result = [];
  for (let i = 1; i < arr.length; i++) {
    if (see < arr[i]) {
      result.push(arr[i]);
      see = arr[i];
    }
  }
  return result;
}

// console.log(seeTree([4,7,3,6,10,5,8,9]));
function getSum(a, b) {
  let big;
  let small;
  console.log(a, b);
  big = a > b ? a : b;
  small = a > b ? b : a;
  console.log(big, small);
  let result = 0;
  if (big == small) {
    return a;
  }
  for (let i = small; i <= big; i++) {
    result += i;
  }
  return result;
}
// console.log(getSum(4,1));
function sumInteger(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}
// console.log(sumInteger([1,2,3,4,5]));
function removeDuplicates(arr) {
  // const data = [...new Set(arr)];
  // console.log(data);
  let obj = {};
  for (let data of arr) {
    obj[[data]] = (obj[data] || 0) + 1;
  }

  console.log(obj);
}

// removeDuplicates([1,1,2,1,2,3,4])
function feast(beast, dish) {
  console.log(beast[0], dish[0]);
  if (
    beast[0] === dish[0] &&
    beast[beast.length - 1] === dish[dish.length - 1]
  ) {
    return true;
  } else {
    return false;
  }
}
// console.log(feast("great blue heron", "garlic naan"));
function DNAtoRNA(dna) {
  return dna
    .split("")
    .map((data) => {
      if (data == "U") {
        return "T";
      } else {
        return data;
      }
    })
    .join("");
}
// console.log(DNAtoRNA('GCm'))
function fakeBin(x) {
  return x.split("").map((data) => {
    if (data >= "5") {
      return "1";
    } else {
      return "0";
    }
  });
}
//  console.log(fakeBin('45385593107843568'))
// const rps = (p1, p2) => {
//   let result = ['scissors','paper','rock'];
//   if(p1==p2) return 'Draw!'
//   if(p1==result[0]&&p2 ==result[1]||p1 == result[2]&& p2==result[0]||p1 ==result[1]&&p2==result[2]){
//     return 'Player 1 won!'
//   }else{
//     return 'Player 2 won!'
//   }
// };
const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  var rules = { rock: "scissors", paper: "rock", scissors: "paper" };
  console.log(rules[p1]);
  if (p2 === rules[p1]) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
};
// console.log(rps('scissors','paper'))
var isSquare = function (n) {
  if (n < 0) return false;
  let result = Math.sqrt(n);
  let output = Math.floor(Math.sqrt(n));
  if (result - output) {
    return false;
  } else {
    return true;
  }
};
// console.log(isSquare(5))\
var number = function (array) {
  //your awesome code here
  let result = [];
  let count = 1;
  for (let data of array) {
    result.push(`${count}: ${data}`);
    count++;
  }
  console.log(result);
};
// console.log(number(["a", "b", "c"]))
function high(x) {
  let result = [];
  let max = x.split(" ");
  for (let i of max) {
    let sum = 0;
    for (let j of i) {
      sum += j.charCodeAt() - "a".charCodeAt() + 1;
    }
    console.log(sum);
    result.push(sum);
  }

  console.log(result);
  let sortedResult = result.sort((a, b) => a - b);
  console.log(sortedResult);
  let highest = result.indexOf(sortedResult[sortedResult.length - 1]);
  console.log(max[highest]);
}
// high("aan i need a taxi up to");
// function high(x){
//   var arr = x.toLowerCase().split(" ");
//   var sum = 0;
//   var holder = 0;
//   var holder2 = 0;
//   for(var i = 0; i < arr.length; i++) {

//     for(var j = 0; j < arr[i].length; j++) {

//       sum += arr[i].charCodeAt(j) - 96;

//     }

//     if (sum > holder) {
//       holder = sum;
//       holder2 = i;

//      }
//     sum = 0;
//   }
//    console.log(arr[holder2]);
//    return arr[holder2];

// }
function stray(arr) {
  let obj = {};
  for (let data of arr) {
    if (!obj[data]) {
      obj[data] = 1;
    } else {
      obj[data] = obj[data] + 1;
    }
  }
  console.log(obj);
  for (let result in obj) {
    //  console.log(result)
    if (obj[result] == 1) {
      return Number(result);
    }
  }
  // console.log(obj)
}
// console.log(stray([1,1,1,2]))
function highAndLow(string) {
  let result = string.split(" ").map((data) => Number(data));
  console.log(result);
  let min = string[0];
  let max = string[0];
  for (let i = 1; i <= result.length - 1; i++) {
    if (max < result[i]) {
      max = result[i];
    } else {
      min = result[i];
    }
    // console.log(result[i])
  }
  console.log(max, min);
  return (max, min).toString();
  // console.log(max , min)
}
// console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
function seeTree(arr) {
  let result = [];
  let counter = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (counter < arr[i]) {
      result.push(arr[i]);
      counter = arr[i];
    }
  }
  return result;
}
// console.log(seeTree([14,18,15,16,19,20]))
function atm(amount) {
  let note = [100, 50, 10, 5, 1];
  let obj = {};
  let temp = amount;
  for (let i = 0; i < note.length; i++) {
    //remainder
    if (temp !== 0) {
      let quotient = Math.floor(temp / note[i]); //quotient
      obj[note[i]] = quotient;
      temp = temp % note[i];
    }
  }
  console.log(obj);
}
// atm(102)
function sumDigPow(a, b) {
  // Your code here;
  let result = [];
  for (let check = a; check <= b; check++) {
    let temp = check;
    let len = (check + "").length;
    let whileResult = 0;
    // console.log(check)
    while (temp > 0) {
      let lastDigit = temp % 10;
      whileResult += lastDigit ** len;
      len--;
      temp = Math.floor(temp / 10);
    }
    if (whileResult === check) {
      result.push(whileResult);
    }
  }
  return result;
}
// console.log(sumDigPow(1,100))

function armstrongNumber(number) {
  let temp = number;
  let len = (number + "").length;
  console.log(len);
  let result = 0;
  while (temp > 0) {
    let remainder = temp % 10;
    result += remainder ** len;
    len--;
    temp = Math.floor(temp / 10);
  }
  console.log(result);
}
// armstrongNumber(135)
function recursionMethod(num) {
  console.log("times");
  if (num == 0) {
    return 0;
  } else {
    return num + recursionMethod(num - 1);
  }
}
// console.log(recursionMethod(5))
function factorialNumber(num) {
  if (num == 0) {
    return 1;
  }
  return num * factorialNumber(num - 1);
}
// console.log(factorialNumber(5))

// function duplicateCount(text){
//   //...
//   let count = 0;
//   for(let  i=0 ; i< text.length; i++){
//     let checkCount = 0
//     for(let j = i+1; j< text.length; j++){
//       if(text[i]==text[j]){
//         checkCount++
//       }
//     }
//     if(count<checkCount){
//       count = checkCount
//     }
//   }
//   if(count==0)
//   return count
//   else{
//     return count +1
//   }
// }
function duplicateCount(text) {
  //...
  let string = text.toLowerCase();
  let obj = {};
  for (let data of string) {
    if (!obj[data]) {
      obj[data] = 1;
    } else {
      obj[data] = obj[data] + 1;
    }
  }
  let result = Object.values(obj).sort((a, b) => b - a);
  let count = 0;
  for (let output in obj) {
    if (obj[output] >= 2) {
      count++;
    }
  }
  return count;
  // console.log(obj)
}

// console.log(duplicateCount('Indivisibilities'))
function productFib(num) {
  let arr = [];
  let a = 0;
  let b = 1;
  arr.push(a);
  arr.push(b);
  let c;
  let string = (num + "").length;
  console.log(string);
  for (let i = 0; i < 100; i++) {
    c = a + b;
    a = b;
    b = c;
    // console.log(c)
    arr.push(c);
  }
  console.log(arr.length);
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <= i + 1; j++) {
      if (arr[i] * arr[j] <= num) {
        if (arr[i] * arr[j] == num) {
          var result = [arr[i], arr[j], true];
          return result;
        } else {
          result = [arr[i], arr[j], false];
        }
      } else {
        result = [arr[j], arr[j + 1], false];
        return result;
      }
    }
  }
  return result;
  // console.log(arr)
}
// console.log(productFib(489582314321))
function isPalindrome(x) {
  // your code here
  let check = x.toLowerCase();
  console.log(check);
  let result = "";
  //   let len =
  for (let i = check.length - 1; i >= 0; i--) {
    result += check[i];
  }
  console.log(result);
  if (result == check) {
    return true;
  } else {
    return false;
  }
}
// console.log(isPalindrome('abBa'))
function enough(cap, on, wait) {
  // your code here
  let space = cap - on;
  console.log(space, wait);
  return space >= wait ? 0 : wait - space;
}
// console.log(enough(100 ,60,50))
function openOrSenior(data) {
  let handicapped =0;
  let oldAge = 0;
  let result = []
 for(let i = 0 ; i < data.length; i++){
  for(let  j = 0; j <= 1; j++){
    if(j==0) oldAge = data[i][j];
    if(j==1) handicapped = data [i][j]
  }
  if(oldAge>55 && handicapped>7){
    result.push('Senior')
  }
  else{
    result.push('Open')

  }
 }
 return result
}
console.log(
  openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
  ])
);
