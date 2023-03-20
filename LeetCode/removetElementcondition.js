//Remove the element based on the supplied input
var removeElement = function(nums, val) {
  for(let  i=0 ,l=nums.length;i<l;i++){
      if(val==nums[i]){
          nums.splice(i,1)
          removeElement(nums,val)
      }
  }
  return nums
};

console.log(removeElement([0,1,2,2,3,0,4,2],2))