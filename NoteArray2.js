const note = [50, 10, 5, 1];

function getNotes(note, amount) {
  const result = {};
  let reminder = amount;
  for (let i = 0, l = note.length; i < l; i++) {
    if (reminder !== 0) {
      let quotient = reminder / note[i];
      result[note[i]] = parseInt(quotient);
      reminder = amount % note[i];
    }
  }
  console.log(result);
}
// getNotes(note, 256);



const noteArr = [50 , 10, 5, 1];
function NOtes(num){
  const result = {};
  let remainder = num;
  for(let i = 0;i< noteArr.length; i++){
    if(remainder!==0){
      let quotient = remainder / noteArr[i];
      result[noteArr[i]] = parseInt(quotient);
      remainder = remainder % noteArr[i]
    }
  }
  console.log(result);

}
NOtes(191);





// console.log(100 % 5)//modulus return the remainder;
// console.log(100 / 5)/// return the quotient

