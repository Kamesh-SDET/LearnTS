// Functions in TypeScript


// What is a Function?

// A function is a reusable block of code that performs a specific task. It can take parameters, return values, and be called multiple times throughout a program. Functions help in organizing code, improving readability, and promoting code reusability.

//types of functions in TypeScript:

//Named Functions
// Anonymous Functions
// Arrow Functions


// 1. Named Functions

// A named function is defined with a specific name and can be called by that name. It is the most common way to define a function in TypeScript.

// A function can be declared using the function keyword followed by the function name and parentheses. The function body is enclosed in curly braces.

// Syntax:
// function functionName(parameters) {
//   // code to be executed
// }    

// 1.1 Named Function without Parameters

// A Function can be defined without parameters. In this case, the function simply performs a task without needing any input values.

// Example:

function sayHello(): void {
  console.log("Hello, World!");
}

//1.2 Named Function with Parameters

// A function can also be defined with parameters, which are placeholders for values that will be passed to the function when it is called. Parameters allow functions to be more flexible and reusable.


// Example:

function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("Alice"));

// 1.3 Named Function with Return Type

// A function can also specify a return type, which indicates the type of value that the function will return. This helps in ensuring that the function returns the expected type of value and can improve code readability and maintainability.

// Example:

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(10, 20));

// 1.4 Named Function with Rest Parameters

// Rest parameters allow a function to accept an indefinite number of arguments as an array. This is useful when you want to create functions that can handle a variable number of arguments.

// Syntax:
// function functionName(...parameters: type[]) {
//   // code to be executed
// }

// Example:

function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // Output: 15


// 1.5 NamedFunction with Rest parameters and multiple parameter types

// A function can also have rest parameters with parameters of different types. This allows for even more flexibility in how the function can be called and used.

// Example:

function findElements(...elements: (string | number)[]): number {
  return elements.length;
}

console.log(findElements("apple", 42, "banana", 3.14)); // Output: 4

// 1.6 Named Function with Optional Parameters

// In TypeScript, you can define optional parameters in a function by using the ? symbol after the parameter name. Optional parameters can be omitted when calling the function.

// Syntax:
// function functionName(param1: type, param2?: type) {
//   // code to be executed
// }

// Example:

function displayMessage(message: string, prefix?: string): void {
  if (prefix) {
    console.log(`${prefix}: ${message}`);
  } else {
    console.log(message);
  }
}

displayMessage("This is a message."); // Output: This is a message.
displayMessage("This is a message.", "Info"); // Output: Info: This is a message.


// 1.7 Named Function with Default Parameters

// Default parameters allow you to specify default values for parameters in case they are not provided when the function is called. This can help simplify function calls and provide default behavior when certain arguments are missing.

// Syntax:
// function functionName(param1: type, param2: type = defaultValue) {
//   // code to be executed
// }

// Example:
function CalculateArea(radius: number, pi: number = 3.14): number {
  return pi * radius * radius;
}   

console.log(CalculateArea(5)); // Uses default value of pi
console.log(CalculateArea(5, 3.14159)); // Uses provided value of pi

//in the above example, the CalculateArea function has a default parameter pi with a default value of 3.14. If the caller does not provide a value for pi, the function will use the default value. If the caller provides a value for pi, that value will be used instead of the default. This allows for more flexible function calls and can help simplify code when certain parameters have common default values.



//2. Anonymous Functions

// An anonymous function is a function that does not have a name. It is often used as an argument to other functions or assigned to variables. Anonymous functions can be defined using the function keyword or as arrow functions.

// Is function Expression an Anonymous Function?

// A function expression can be an anonymous function if it does not have a name. However, it can also be a named function if it is assigned to a variable with a name. The key difference is that an anonymous function does not have its own name and is typically used in situations where the function is not intended to be reused or called by name.


// Syntax:
// const functionName = function(parameters) {
//   // code to be executed
// };   

// Example:

const addition = function(a: number, b: number): number {
  return a + b;
};

console.log(addition(5, 3));


// 3. Arrow Functions or Lambda Functions

// Arrow functions, also known as lambda functions, are a more concise syntax for writing function expressions. They use the => syntax and can have implicit returns for single-expression functions. Arrow functions also do not have their own this context, which can be useful in certain situations.

// Arrow functions can be defined with or without parameters, and they can also have optional parameters and default parameters, just like named functions.

//arrow function is also an anonymous function because it does not have a name and is typically assigned to a variable or used as an argument to another function. However, it can also be considered a named function if it is assigned to a variable with a name. The key characteristic of an arrow function is its concise syntax and the fact that it does not have its own this context, rather than whether it is named or anonymous.



// Syntax:
// const functionName = (parameters) => {
//   // code to be executed
// };

// Example:

const multiply = (x: number, y: number): number => x * y;
console.log(multiply(4, 6));

//4. Callback Functions

// A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed. Callback functions are commonly used in asynchronous programming to handle events or perform actions after a certain task has been completed.

// Syntax:
// function functionName(callback: (parameters) => returnType) {
//   // code to be executed
//   callback(parameters);
// }

// Example:

function fetchData(callback: (data: string) => void): void {
  setTimeout(() => {
    const data = "Data fetched from server";
    callback(data);
  }, 2000);

}

fetchData((data) => {
  console.log(data);
});

//line by line explanation of the above code:
// 1. We define a function named fetchData that takes a callback function as an argument. The callback function is expected to take a string parameter and return void (i.e., it does not return any value).
// 2. Inside the fetchData function, we use setTimeout to simulate an asynchronous operation (like fetching data from a server). The setTimeout function takes a callback function and a delay in milliseconds. In this case, we set the delay to 2000 milliseconds (2 seconds).
// 3. After the delay, the callback function inside setTimeout is executed, which creates a variable named data and assigns it the value "Data fetched from server".
// 4. The callback function passed to fetchData is then called with the data variable as its argument, allowing us to handle the result of the asynchronous operation in a clean and organized way.
// 5. Finally, we call the fetchData function and pass an anonymous callback function that logs the fetched data to the console when it is executed.

//Example of a callback function with a named function as the callback:


function sumWithCallback(a: number, b: number, callback: (result: number) => void): void {
    let result = a + b;
    callback(result);
}

//callback function

function displayResult(result: number): void {
    console.log(result);
}

sumWithCallback(10, 20, displayResult); // Output: 30


//5. Overloaded Functions

// Function overloading is a feature in TypeScript that allows you to define multiple function signatures for a single function implementation. This means that you can create functions that can be called with different sets of parameters, and TypeScript will determine which implementation to use based on the arguments provided.

// Syntax:
// function functionName(param1: type): returnType;
// function functionName(param1: type, param2: type): returnType;
// function functionName(param1: type, param2: type, param3: type): returnType;
// function functionName(...parameters: type[]): returnType;

// Example:

function getInfo(name: string): string;
function getInfo(name: string, age: number): string;
function getInfo(name: string, age: number, city: string): string;

function getInfo(name: string, age?: number, city?: string): string {
  if (age && city) {
    return `Name: ${name}, Age: ${age}, City: ${city}`;
  } else if (age) {
    return `Name: ${name}, Age: ${age}`;
  } else {
    return `Name: ${name}`;
  }
}

console.log(getInfo("Alice")); // Output: Name: Alice
console.log(getInfo("Bob", 25)); // Output: Name: Bob, Age: 25
console.log(getInfo("Charlie", 30, "New York")); // Output: Name: Charlie, Age: 30, City: New York

//Function overloading with different return types:

function processInput(str: string): string;
function processInput(num: number): number;

function processInput(input: string | number): string | number {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else {
    return input * 2;
  }
}

console.log(processInput("hello")); // Output: HELLO
console.log(processInput(5)); // Output: 10

// Best practices for Functions usage in TypeScript: 
// 1. Use descriptive names for functions and parameters to improve readability.
// 2. Keep functions small and focused on a single task to enhance maintainability.
// 3. Use optional parameters and default parameters to provide flexibility in function calls.
// 4. Use function overloading to create functions that can handle different sets of parameters and return types.
// 5. Avoid using global variables within functions to prevent unintended side effects and improve code modularity.
// 6. Use arrow functions for concise syntax, especially when working with callbacks or when you want to preserve the this context.
// 7. Document your functions with comments to explain their purpose, parameters, and return values for better code understanding and collaboration.
