let note = [50, 10, 5, 1];
let note50 = 0;
let note10 = 0;
let note5 = 0;
let note1 = 0;

function NoteAndNumber(amount) {
  while (amount >= 50) {
    note50++;
    amount = amount - 50;
  }
  while (amount >= 10) {
    note10++;
    amount = amount - 10;
  }
  while (amount >= 5) {
    note5++;
    amount = amount - 5;
  }
  while (amount >= 1) {
    note1++;
    amount = amount - 1;
  }
  display = `{50 :${note50}, 10 :${note10}, 5: ${note5}, 1:${note1}}`;
  return display;
}
console.log(NoteAndNumber(116));
