function Lpattern(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (j == 1 || i == n) {
        result += "*" + " ";
      } else result += " ";
    }
    result += "\n";
  }
  console.log(result);
}
// Lpattern(5)
// function Lpattern1(n){
//   let result = '';
//   for(let row = 1; row <= n; row++){
//     for(let col = 1; col <= n; col++){
//       if(col==1||row==n){
//         result += '*';
//       }
//       else{
//         result += ' ';
//       }
//     }
//     result += '\n';
//   }
//   console.log(result)
// }
// Lpattern1(5)
function SeriesSum(n) {
  let temp = n;
  let result = 1;
  let deno = 0;
  if (n === 1) return result.toFixed(2).toString();
  for (let i = 1; i < temp; i++) {
    if (i == 1) {
      deno += 3 + 1;
    } else {
      deno += 3;
    }
    result += 1 / deno;
  }
  return result.toFixed(2).toString();
}
// console.log(SeriesSum(3));
// console.log(1 + 1 / 4 + 1 / 7);
function youAreACube(value) {
  //props if you complete in one line :)fds
  // console.log( Math.floor(Math.cbrt(value))?true:false+value)
  console.log(value);
  return Math.cbrt(value) - Math.floor(Math.cbrt(value)) ? false : true;
}

// console.log(youAreACube(64))
var humanYearsCatYearsDogYears = function (humanYears) {
  // Your code here!
  let hYears = 0;
  let cYears = 0;
  let dYears = 0;
  for (let i = 1; i <= humanYears; i++) {
    hYears = i;
    if (i == 1) {
      cYears = 15;
      dYears = 15;
    } else if (i == 2) {
      cYears += 9;
      dYears += 9;
    } else {
      cYears += 4;
      dYears += 5;
    }
  }
  return [hYears, cYears, dYears];
};
// console.log(humanYearsCatYearsDogYears(1))
function comp(array1, array2) {
  // console.log(array2.length)
  if (!array1 || !array2) return false;
  if (array1.length !== array2.length) return false;
  let count = 0;
  for (let i = 0; i < array1.length; i++) {
    let count = 0;
    for (let j = 0; j < array2.length; j++) {
      if (array2[j] == array1[i] * array1[i]) {
        count++;
        array2.splice(j, 1);
      }
    }
    if (count !== 0) return false;
  }
  // console.log(array2)
  // let output = []
  // for(let data of array1){
  // output.push(data*data)
  // }
  // console.log(output.sort((a,b)=>a-b))
  console.log(array1.length);
}
// console.log(comp([1, 2, 6, 6, 4, 3, 6, 3, 2, 7, 5, 0, 5, 1], [25, 1, 36, 4, 4, 1, 1, 25, 16, 9, 49, 9, 36, 36]));
// console.log(output.sort((a,b)=>a-b))
function powersOfTwo(n) {
  let result = [];
  if (n == 0) return [1];
  let output = 0;
  for (let i = 0; i <= n; i++) {
    output = Math.pow(2, i);
    result.push(output);
  }
  return result;
}
// console.log(powersOfTwo(1))
function twoSort(s) {
  return s.sort()[0].split("").join("***");
}
// console.log(twoSort(["dog", "apple", "axe"]));
function LPattern(num) {
  let string = "";
  for (let row = 1; row <= num; row++) {
    for (let column = 1; column <= num; column++) {
      if (column == 1 || row === num) {
        string += "*";
      } else {
        string += " ";
      }
    }
    string += "\n";
  }
  console.log(string);
}
// LPattern(3)
function IPattern(num) {
  let string = "";
  for (let row = 1; row <= num; row++) {
    for (let col = 1; col <= num; col++) {
      if (row == 1 || col == Math.floor(num / 2) + 1 || row == num) {
        string += "*";
      } else {
        string += " ";
      }
    }
    string += "\n";
  }
  console.log(string);
}
// console.log(IPattern(5))
function stringHighest(string, position) {
  let obj = {};
  for (let data of string) {
    if (!obj[data]) {
      obj[data] = 1;
    } else {
      obj[data] += 1;
    }
  }
  let value = Object.values(obj).sort((a, b) => b - a);
  let final = value[position - 1];
  console.log(final);
  let result = [];
  for (let value in obj) {
    if (obj[value] == final && final) result.push(value);
  }
  console.log(obj);
  return result;
}
// console.log(stringHighest('abbcccddddvvvmmmmmmmmmmmmmmmmmm',2))
// const NoteArr  =[1000 ,500 ,100,50,10,5,1];
// function countNote(amount){
//   let temp = amount;
//   for(let i = )
// }
// countNote(12)

// function removeDuplicate(number){
//   let result = []
//   for(let i = 0; i< number.length ;i++){
//     // console.log(number[i])
//   if(!result.includes(number[i])){
//     result.push(number[i])
//   }

//   }
//   result.length = number.length
//   console.log(result)

// }
function removeDuplicate(number) {
  console.log(number.length);
  let temp = number.length

  for (let i = 0; i < number.length; i++) {
    for (let j = i + 1; j < number.length; j++) {
      
        if (number[i] == number[j]) {
          number.splice(j, 1);
          j--;
        
      }
    }
  }
  console.log(temp)
  // for(let i = 0 ; i< temp; i++){
  //   if(number[i]){
  //   }
  //   else{
  //     console.log('correct')
  //     number[i] = `_`
  //   }
  // }
  console.log(number);
}
removeDuplicate([1, 1, 2, 1, 1, 4, 1, 4, 7, 8, 1, 9, 2, 8, 2, 1, 7]);
