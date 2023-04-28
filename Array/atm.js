function validatePIN(pin) {
  let len = pin.length;
  if (len != 4 && len != 6) {
    return false;
  }
  for (let check in pin) {
    if (pin[check] > "9" || pin[check] < "0") return false;
  }
  return true;
}
// console.log(validatePIN("1234"));
//'123
const obj = { a: 1, b: 2, c: 3 };

for (const prop in obj) {
  if(obj[prop]>2)
  console.log(`${prop}`);
}