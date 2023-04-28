var mergeTwoLists = function(list1, list2) {
  let x = 0;
  let y = 0;
  let result = [];
  let k = list1.length + list2.length ;
  for (let i = 0; i<k; i++){
      if(list1[x] < list2[y]){
          result.push(list1[x]);
          x++;
      }
      else{
          result.push(list2[y]);
          y++;
      }
  }
  return result
};
console.log(mergeTwoLists([1,2,4,33,88,100],[1,4,32,64,99,102])
)