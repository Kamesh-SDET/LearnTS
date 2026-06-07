// Methods in Arrays

// 1. push(): Adds one or more elements to the end of an array and returns the new length of the array.

// Example:
let arr: number[] = [1, 2, 3];
arr.push(4); // arr is now [1, 2, 3, 4]

// 2. pop(): Removes the last element from an array and returns that element. This method changes the length of the array.

// Example:
let lastElement = arr.pop(); // lastElement is 4, arr is now [1, 2, 3]

// 3. shift(): Removes the first element from an array and returns that element. This method changes the length of the array.

// Example:
let firstElement = arr.shift(); // firstElement is 1, arr is now [2, 3]

// 4. unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.

// Example:
arr.unshift(0); // arr is now [0, 2, 3]

// 5. splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

// Example:
arr.splice(1, 1, 5); // arr is now [0, 5, 3] (removes 1 element at index 1 and adds 5)

// 6. slice(): Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included). The original array will not be modified.

// Example:
let slicedArr = arr.slice(1, 3); // slicedArr is [5, 3], arr remains [0, 5, 3]

// 7. indexOf(): Returns the first index at which a given element can be found in the array, or -1 if it is not present.

// Example:
let index = arr.indexOf(5); // index is 1

// 8. includes(): Determines whether an array includes a certain value among its entries, returning true or false as appropriate.

// Example:
let hasThree = arr.includes(3); // hasThree is true

// 9. forEach(): Executes a provided function once for each array element.

// Example:
arr.forEach(element => console.log(element)); // Logs 0, 5, 3 to the console

// 10. map(): Creates a new array populated with the results of calling a provided function on every element in the calling array.

// Example:
let squaredArr = arr.map(x => x * x); // squaredArr is [0, 25, 9]

// 11. filter(): Creates a new array with all elements that pass the test implemented by the provided function.

// Example:
let filteredArr = arr.filter(x => x > 1); // filteredArr is [5, 3]  

// 12. reduce(): Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

// Example:
let total = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // total is 8 (0 + 0 + 5 + 3) 

// Conclusion
// Arrays in TypeScript come with a variety of built-in methods that allow you to manipulate and work with array data effectively. Understanding these methods can help you perform common operations such as adding, removing, and transforming array elements with ease. By leveraging these methods, you can write cleaner and more efficient code when working with arrays in TypeScript.

//Example of using multiple array methods together

const numbersArray: number[] = [1, 2, 3, 4, 5];

// Using map to create a new array of squared numbers, then filtering out the even squares, and finally reducing to get the sum of the odd squares
let sumOfOddSquares = numbersArray
  .map(x => x * x)
  .filter(x => x % 2 !== 0)
  .reduce((acc, curr) => acc + curr, 0);

console.log("Sum of odd squares: " + sumOfOddSquares); // Output: Sum of odd squares: 35 (1^2 + 3^2 + 5^2 = 1 + 9 + 25 = 35)

// Explaination of the example:
// 1. We start with an array of numbers from 1 to 5.
// 2. We use the map() method to create a new array where each number is squared.
// 3. We then use the filter() method to keep only the odd squares (1, 9, and 25).
// 4. Finally, we use the reduce() method to sum up the odd squares, starting with an initial value of 0.
// The result is the sum of the odd squares, which is printed to the console.



// Example to demonstrate the use of all the methods together

const fruitsArray: string[] = ["Apple", "Banana", "Cherry"];
// Using push to add a new fruit, then using forEach to log each fruit, and finally using indexOf to find the index of a specific fruit
fruitsArray.push("Date"); // fruitsArray is now ["Apple", "Banana", "Cherry", "Date"]   
fruitsArray.forEach(fruit => console.log(fruit)); // Logs each fruit to the console
let indexOfCherry = fruitsArray.indexOf("Cherry"); // indexOfCherry is 2
console.log("Index of Cherry: " + indexOfCherry); // Output: Index of Cherry: 2 
