export class Student{
  constructor(name, age){
    this.studentName  = name;
    this.studentAge = age;
    console.log('constructor function is running')
  }
  hello(){
    console.log(`your name is ${this.studentName} and your age is ${this.studentAge}`);
  }
  static itsStaticMethod(a,b){
    let c = a + b;
    return c; 
  }
}
const data = new Student('Ji', 42);
data.hello()
console.log(Student.itsStaticMethod(1,2));
// console.log(data)