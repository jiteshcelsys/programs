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
function noteCount (amount){
  let remainder = amount;
  let obj = {};
  for(let i = 0, l = noteArr.length; i < l; i++){
    let quotient  = Math.floor(remainder / note[i]);
    obj[note[i]] = quotient;
    remainder = remainder % note[i];
  }
  console.log(obj)
}
noteCount(102)






// console.log(100 % 5)//modulus return the remainder;
// console.log(100 / 5)/// return the quotient

