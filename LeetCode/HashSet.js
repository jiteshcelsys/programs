var MyHashSet = function (){
  this.set = {}
}
MyHashSet.prototype.add = function(value){
  this.set[value] = true;
}
MyHashSet.prototype.remove = function(key){
   delete this.set[key] 
}
MyHashSet.prototype.contains = function(key){
  return this.set[key]?true : false;
}

let hashSet = new MyHashSet;
hashSet.add(1)
hashSet.add(1)
hashSet.add(2)
hashSet.add(3);
// hashSet.remove(1);
let {set} = hashSet; 
console.log(set)
// console.log(hashSet.contains(3));
hashSet.remove(3);
console.log(hashSet.contains(3));

