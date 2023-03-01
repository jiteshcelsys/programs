const note = [50, 10, 5, 1];
let count = 0;

function NoteArray3(note, amount) {
  const result = {};
  for (let i = 0, l = note.length; i < l; i++) {
    while (amount >= note[i]) {
      amount = amount - note[i];
      count++;
    }
    result[note[i]] = parseInt(count);
    count = 0;
  }
  return result;
}

console.log(NoteArray3(note, 111));
