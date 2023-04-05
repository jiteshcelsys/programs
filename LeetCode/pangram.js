function pangramCheck(str){

  let mark =  new Array(26).fill(false);
  let string = str.split(' ').join('');
  console.log(string)
  let index;
  for(let i=0 ;i<string.length ; i++){
    if('A'<=string[i]    && string[i] <= 'Z' ){
      index = string.charCodeAt(i)- 'A'.charCodeAt(0);
    }
    else if('a' <= string[i]  && string[i] <= 'z'){
      index = string.charCodeAt(i) - 'a'.charCodeAt(0) ;
    }
    else continue;
    mark[index]= true;
  }
  console.log(mark);
  for (let i = 0; i <= 25; i++)
  {if (mark[i] == false)
      return false;}
      return true;
}
console.log(pangramCheck('The uick brown fox jumps over the lazy dog'))
