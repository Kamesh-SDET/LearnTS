// Looping Statements in TypeScript

// What is a Looping Statement?
// A looping statement is a control flow statement that allows code to be executed repeatedly based on a given condition. In TypeScript, there are several types of looping statements, including for loops, while loops, and do-while loops.

// 1. While Loop
// The while loop executes a block of code as long as a specified condition is true.

//syntax:
// while (condition) {
//   // code to be executed
// }

// Example:

console.log("While Loop Example:");
let count = 0;  
while (count < 5) {
  console.log(count);
  count++;
}


// 2. Do-While Loop
// The do-while loop is similar to the while loop, but it guarantees that the block of code will be executed at least once, even if the condition is false.
//syntax:
// do {
//   // code to be executed
// } while (condition);

// Example:

console.log("Do-While Loop Example:");
let num = 0;
do {
  console.log(num);
  num++;
} while (num < 5);

// 3. For Loop
// The for loop is a control flow statement that allows code to be executed repeatedly based on a given condition. It consists of three parts: initialization, condition, and increment/decrement.  
//syntax:
// for (initialization; condition; increment/decrement) {
//   // code to be executed
// }    
// Example:

console.log("For Loop Example:");
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// 4. For...of Loop
// The for...of loop is used to iterate over iterable objects (like arrays, strings, etc.) and executes a block of code for each element in the iterable.
//syntax:
// for (const element of iterable) {
//   // code to be executed
// }    

// Example:

console.log("For...of Loop Example:");
const array = [10, 20, 30, 40, 50]; 
for (const element of array) {
  console.log(element);
}   

// 5. For...in Loop
// The for...in loop is used to iterate over the enumerable properties of an object. It executes a block of code for each property in the object.
//syntax:
// for (const key in object) {
//   // code to be executed
// }    

// Example:

console.log("For...in Loop Example:");
const person = {
  name: "Alice",    
    age: 30,
    city: "New York"
};
for (const key in person) {
  const value = person[key as keyof typeof person];
  console.log(key + ": " + value);
}

// Conclusion
// Looping statements are essential for performing repetitive tasks in programming. They allow developers to write cleaner and more efficient code by avoiding the need for manual repetition. Understanding how to use different types of loops effectively is crucial for any TypeScript developer.

