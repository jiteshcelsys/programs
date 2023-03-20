//find the length of the last word

//---with predefined function

// function getWordLength(data){
//   const newData = data.trim().split(' ');
//   console.log(newData)

//   return newData[newData.length - 1].length
// }
// const data = ' helloff world ';
// const output =getWordLength(data)
// console.log(output)

//without predefined function



function getWordLength (data){
  let arr =[]
  let str ='';
  for(let i=0; i<data.length; i++){
    if(data[i]==' '){
      if(str!==''){
        arr.push(str);
      };
      str ='';
    }
    else{
      str +=data[i];
    }
    if(i==data.length-1){
      if(str!==''){
    arr.push(str)
      }
    }
  }
 return arr[arr.length-1].length;
}
console.log(getWordLength('hello how are you       '))