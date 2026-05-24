
//Statuic and Dynamic programming languages

//1. Dynamic Programming Languages
/* In dynamic programming languages, the type of a variable is determined at runtime, which means that you can assign a value of any type to a variable without declaring its type explicitly. 
Examples of dynamic programming languages include JavaScript, Python, and Ruby. 
While dynamic typing can provide flexibility and ease of use, it can also lead to runtime errors if you try to perform operations on incompatible types. */ 

//example of dynamic typing in JavaScript
/* let dynamicVariable = "Hello, I'm a string!";
console.log(dynamicVariable); // Output: Hello, I'm a string!   
dynamicVariable = 42; // Now it's a number
console.log(dynamicVariable); // Output: 42  */


//2. Static Programming Languages
/* In static programming languages, the type of a variable is determined at compile time, which means that you must declare the type of a variable explicitly before using it. 
Examples of static programming languages include Java, C++, and TypeScript. 
Static typing can help catch errors at compile time and improve code readability and maintainability, but it can also require more boilerplate code and reduce flexibility compared to dynamic typing. */   

//example of static typing in TypeScript
let staticVariable: string = "Hello, I'm a string!";
console.log(staticVariable); // Output: Hello, I'm a string!   
//staticVariable = 42; // This will cause an error because staticVariable is declared as a string and cannot be assigned a number
//console.log(staticVariable); // This line will not be reached due to the error above 

//Datatypes in TypeScript

//1. What are Data Types?
/* Data types are a classification of data that tells the compiler or interpreter how the programmer intends to use the data. 
In TypeScript, data types are used to define the type of a variable, function parameter, or return value. 
This helps catch errors at compile time and provides better code readability and maintainability. */

//1.1 Primitive Data Types
/* Primitive data types are the most basic data types in TypeScript. They include:
- number: Represents numeric values, both integers and floating-point numbers.  
- string: Represents textual data, enclosed in single quotes (' '), double quotes (" "), or backticks (` `) for template literals.
- boolean: Represents a logical value that can be either true or false.
- null: Represents the intentional absence of any object value. It is a primitive value that can be assigned to a variable to indicate that it has no value.
- undefined: Represents an uninitialized variable or a variable that has been declared but not assigned a value. It is also a primitive value that can be assigned to a variable to indicate that it has not been initialized.
- symbol: Represents a unique identifier, often used for object property keys. Each symbol is guaranteed to be unique, even if they have the same description. 
- any: Represents any type of value. It is a special type that can be used to opt-out of type checking and allow any value to be assigned to a variable. However, using any can lead to potential runtime errors, so it's generally recommended to use more specific types whenever possible. 
- void: Represents the absence of a value, typically used as the return type of functions that do not return a value. It indicates that a function does not return anything.
- union types: Represents a value that can be one of several types. It is denoted using the pipe (|) symbol. For example, a variable declared as string | number can hold either a string or a number value. Union types allow for more flexible type definitions while still providing type safety.  */


//1.2 Non-Primitive Data Types
/* Non-primitive data types, also known as reference types, are more complex data structures that can hold multiple values or properties. They include:
- object: Represents a collection of key-value pairs, where the keys are strings (or symbols) and the values can be of any type. Objects can be used to represent real-world entities and their properties.
- array: Represents an ordered collection of values, which can be of any type. Arrays are a special type of object in JavaScript and TypeScript, and they provide methods for manipulating the collection of values.
- function: Represents a reusable block of code that performs a specific task. Functions can take parameters and return values, and they are also a special type of object in JavaScript and TypeScript. */

//2. Type Annotation and Type Inference
/* Type annotation and type inference are two important concepts in TypeScript that help developers work with types effectively. 
- Type Annotation: This is the process of explicitly specifying the type of a variable, function parameter, or return value in TypeScript. It allows developers to provide more information about the expected type of a value, which can help catch errors at compile time and improve code readability. For example:
let annotatedVariable: number = 42; // Here we are explicitly annotating that annotatedVariable is of type number.

- Type Inference: This is the process by which TypeScript automatically infers the type of a variable based on the value assigned to it. If you do not provide an explicit type annotation, TypeScript will try to determine the type of the variable based on the value you assign to it. For example:
let inferredVariable = "Hello, I'm a string!"; // TypeScript infers that inferredVariable is of type string based on the assigned value. 
console.log(inferredVariable); // Output: Hello, I'm a string!  */

