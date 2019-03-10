// Array Spread
var arr1 = ["aaa", "bbb"];
var arr2 = ["ccc", "ddd"];
// Merging arrays
var arr3 = [...arr1, ...arr2];
// Insert new value to an exisiting array
var arr4 = [...arr1, "fff"];
console.log(arr4);

// Default Paramenter
function add(a, b = 0) {
  return a + b;
}
console.log(add(1));

// String Format
var name = "John";
var age = 22;
console.log(`Weclome ${name}. Your age is ${22}.`);

// Class or Object
class Animal {
  constructor(legs, wings) {
    this.legs = legs;
    this.wings = wings;
  }
  walk() {
    return "walking";
  }
}
var dog = new Animal(2, 0);
console.log(dog.walk());
