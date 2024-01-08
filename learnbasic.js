// Variables and Data Types
let num = 42; // Number
const str = 'Hello, World!'; // String
const bool = true; // Boolean

// Example:
console.log(num); // Output: 42
console.log(str); // Output: Hello, World!
console.log(bool); // Output: true

// Functions
function addNumbers(a, b) {
  return a + b;
}

// Example:
const result = addNumbers(5, 7);
console.log(result); // Output: 12

// Arrays
const fruits = ['apple', 'banana', 'orange'];

// Example:
console.log(fruits[0]); // Output: apple
console.log(fruits.length); // Output: 3
fruits.forEach(fruit => console.log(fruit)); // Output: apple, banana, orange

// Objects
const person = {
  name: 'John Doe',
  age: 30,
  isStudent: false,
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

// Example:
console.log(person.name); // Output: John Doe
console.log(person.greet()); // Output: Hello, my name is John Doe

// Conditional Statements
if (num > 50) {
  console.log('Number is greater than 50');
} else if (num === 50) {
  console.log('Number is equal to 50');
} else {
  console.log('Number is less than 50');
}

// Example:
// Assuming num is 42
// Output: Number is less than 50

// Loops
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Example:
// Output:
// apple
// banana
// orange

// Array Methods
fruits.push('grape');
fruits.pop();

// Example:
console.log(fruits); // Output: ['apple', 'banana', 'orange', 'grape']

// Object Methods
const keys = Object.keys(person);
const values = Object.values(person);

// Example:
console.log(keys); // Output: ['name', 'age', 'isStudent', 'greet']
console.log(values); // Output: ['John Doe', 30, false, [Function: greet]]