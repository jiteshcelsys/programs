const data='hello world';
let result = "";
let output ='';
let k=data.length-1
for(let i=k; i>=0; i--){
  if(data[i ]===' '){
    output += ' '+result
    result = ''
  }
  else{
    result= data[i]+ result
  }
  if(i==0){
    output += ' '+result
  }
}
console.log(output);
