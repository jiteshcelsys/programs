function alphabetPosition(text) {
  let string = '';
  for(let i = 0; i< text.length; i++ ){
    let index = 0;
    if(text[i]>='A'&& text[i]<='Z'){
      index = text[i].charCodeAt() - 'A'.charCodeAt(0)+1;
      if(string.length === 0){
        string +=index
      }
      else{
        string += ' '+index;
      }
    }
     if(text[i]>='a'&& text[i]<='z'){
      index = text[i].charCodeAt() - 'a'.charCodeAt(0)+1;

      if(string.length === 0){
        string +=index;
      }
      else{
       string += ' ' + index;
      }
    }
  }
  return string
}console.log(alphabetPosition(`The sunset sets at twelve o' clock`));