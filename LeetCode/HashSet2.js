var HashSet = function(){
  this.data = new Map()
  
}
class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}
HashSet.prototype.add = function(key,value){
  this.data.set(key,value);

}
let hash = new HashSet;
hash.add(0,1);
// hash.add(0,3);
// hash.add(1,13);
console.log(hash)