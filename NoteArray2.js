const note=[50,10,5,1];

function getNotes( note, amount){
  let result = {};
  let reminder = amount;
  for (let i = 0; i < note.length; i++) {
   if(reminder !== 0){
    let quotient = reminder/note[i]
    result[note[i]] = parseInt(quotient)
    reminder = amount % note[i];
   }
  }
  console.log(result);
}

getNotes(note, 121)