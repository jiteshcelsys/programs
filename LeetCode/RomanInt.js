var romanToInt = (s) => {
  const obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  for (let i = 0, l = s.length; i < l; i++) {
    const first = obj[s[i]];
    const last = obj[s[i + 1]];
    if (last > first) {
      result += last - first;
      i++;
    } else {

      result += first;
    console.log(result)

    }
  }
  return result;
};
// console.log(romanToInt("IV"));

function findOutlier(integers){
  let count = 0;
   for(let i =0;i< integers.length ;i++){
     if(integers[i]%2==0){
       count++
     }
   }
   let find =(count>=Math.floor(integers.length/2)&&count!==1)?true:false
  //  console.log(find)
  //  console.log(count);
  //  console.log(Math.floor(integers.length/2))
  for(let i = 0; i< integers.length ;i++){
    if(find){
      if(integers[i]%2 !==0||-0)
      console.log(integers[i])
      // return integers[i]
    }
    else if(!find){
      if(integers[i]%2==0)
      console.log(integers[i])
        return integers[i]
    }
  }
 }
console.log( findOutlier([1,2,3,5,7,9,11]))
// console.log( findOutlier([2,4,6,8,10,11,12,14,16,18,20]))