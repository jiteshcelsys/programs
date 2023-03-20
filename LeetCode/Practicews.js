

var removeDuplicates = function(nums) {
let arr = [];
for(let i = 0; i < nums.length; i++){
  if(!arr.includes(nums[i])){
    arr.push(nums[i])
  }
}
return arr
};

console.log(removeDuplicates([1,2,2,3]))