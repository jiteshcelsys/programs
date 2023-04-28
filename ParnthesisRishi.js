let data = [];
let currentSize = 0;

function pushOperation(val) {
  data[currentSize++] = val;
}

function popOperation() {
  if (currentSize > 0) {
    currentSize -= 1;
    data.length = currentSize;
  } 
}

const validParenthesis = (expression) => {
  const obj = {
    "{": "}",
    "(": ")",
    "[": "]",
  };
  for (let i = 0, l = expression.length; i < l; i++) {
    if (obj[expression[i]]) {
      pushOperation(obj[expression[i]]);
    } else {
      const currentCharacter = expression[i];
      const stackLastElement = data[data.length-1];
      console.log(currentCharacter)
      console.log(stackLastElement)
      if(currentCharacter===stackLastElement){
        popOperation();
      }
    }
  }

};
validParenthesis("([{}])");
console.log(data.length?false:true)

