// Arrays in typescript

//Waht is an array?
// An array is a data structure that can hold a fixed number of values of the same type. It is used to store multiple values in a single variable, instead of declaring separate variables for each value.

//drawback of using array
// 1. Fixed Size: Once an array is created, its size cannot be changed. This means that you need to know the number of elements in advance, which can lead to wasted memory if the array is not fully utilized or insufficient memory if the array is too small.
// 2. Homogeneous Data: Arrays can only store values of the same type. This can be limiting if you need to store different types of data together.
// 3. Performance Issues: Inserting or deleting elements in an array can be inefficient, especially if it involves shifting elements to maintain order. This can lead to performance issues in certain scenarios.
// 4. Lack of Built-in Methods: Compared to other data structures like lists or sets, arrays have fewer built-in methods for manipulation, which can make certain operations more cumbersome.

//can we store different types of data in an array?
// No, in TypeScript, arrays are designed to hold values of the same type. If you want to store different types of data together, you can use a tuple or an array of union types.


// Ways to Create an array in TypeScript

// 1. Using Array Literal Syntax

// You can create an array in TypeScript using the following syntax:
// let arrayName: type[] = [value1, value2, ...];

// Example:
let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ["Apple", "Banana", "Cherry"];

/* console.log(numbers); // Output: [1, 2, 3, 4, 5]
console.log(fruits);  // Output: ["Apple", "Banana", "Cherry"] */
console.log("Fruits Array:");

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log(" Size of Fruits Array: " + fruits.length);

console.log("Numbers Array using for...of loop:");
for(const number of numbers) {
    console.log(number);
}


console.log("Numbers Array using for...in loop:");
for(const number in numbers) {
    console.log(numbers[number] );
}

//difference between for...of and for...in loop
// The for...of loop iterates over the values of an iterable object (like an array), while the for...in loop iterates over the keys (or indices) of an object. In the context of arrays, for...of will give you the actual elements, while for...in will give you the indices of the elements.



// 2. Using the Array Constructor
let colors: string[] = new Array<string>("Red", "Green", "Blue");
let mixed: (string | number)[] = new Array<string | number>("Hello", 42, "World", 3.14);


// 3. Using the Array.of() Method
let moreNumbers: number[] = Array.of(6, 7, 8, 9, 10);
let moreFruits: string[] = Array.of("Orange", "Grapes", "Pineapple");

// 4. Using the Array.from() Method
let str = "Hello";
let charArray: string[] = Array.from(str); // ['H', 'e', 'l', 'l', 'o']





