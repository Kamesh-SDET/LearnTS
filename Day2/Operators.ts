//1. Operators in TypeScript
/* Operators are special symbols or keywords that perform specific operations on one or more operands. 
In TypeScript, operators can be categorized into several types, including: */

//1. Arithmetic Operators
/* Arithmetic operators are used to perform mathematical operations on numeric values. They include:
- Addition (+): Adds two operands together. For example, 5 + 3 results in 8.
- Subtraction (-): Subtracts the second operand from the first. For example, 5 - 3 results in 2.
- Multiplication (*): Multiplies two operands together. For example, 5 * 3 results in 15.
- Division (/): Divides the first operand by the second. For example, 5 / 3 results in 1.666....
- Modulus (%): Returns the remainder of the division of the first operand by the second. For example, 5 % 3 results in 2.
- Exponentiation (**): Raises the first operand to the power of the second operand. For example, 5 ** 3 results in 125. */  
//example of arithmetic operators in TypeScript

console.log("Arithmetic Operators:");
let a = 5;
let b = 3;
console.log("Addition:", a + b); // Output: 8
console.log("Subtraction:", a - b); // Output: 2
console.log("Multiplication:", a * b); // Output: 15
console.log("Division:", a / b); // Output: 1.6666666666666667
console.log("Modulus:", a % b); // Output: 2
console.log("Exponentiation:", a ** b); // Output: 125  


//2. Assignment Operators
/* Assignment operators are used to assign values to variables. They include:
- Simple Assignment (=): Assigns the value of the right operand to the left operand. For example, let x = 5 assigns the value 5 to the variable x. */
//- Addition Assignment (+=): Adds the right operand to the left operand and assigns the result to the left operand. For example, x += 3 is equivalent to x = x + 3.
//- Subtraction Assignment (-=): Subtracts the right operand from the left operand and assigns the result to the left operand. For example, x -= 3 is equivalent to x = x - 3.
//- Multiplication Assignment (*=): Multiplies the left operand by the right operand and assigns the result to the left operand. For example, x *= 3 is equivalent to x = x * 3.
//- Division Assignment (/=): Divides the left operand by the right operand and assigns the result to the left operand. For example, x /= 3 is equivalent to x = x / 3.
//- Modulus Assignment (%=): Takes the modulus of the left operand by the right operand and assigns the result to the left operand. For example, x %= 3 is equivalent to x = x % 3.
//- Exponentiation Assignment (**=): Raises the left operand to the power of the right operand and assigns the result to the left operand. For example, x **= 3 is equivalent to x = x ** 3. */

//example of assignment operators in TypeScript

console.log("Assignment Operators:");
let x = 5;
x += 3; // x is now 8
console.log("Addition Assignment:", x); // Output: 8
x -= 2; // x is now 6
console.log("Subtraction Assignment:", x); // Output: 6
x *= 4; // x is now 24
console.log("Multiplication Assignment:", x); // Output: 24
x /= 6; // x is now 4
console.log("Division Assignment:", x); // Output: 4
x %= 3; // x is now 1
console.log("Modulus Assignment:", x);  // Output: 1
x **= 3; // x is now 1
console.log("Exponentiation Assignment:", x); // Output: 1      



//3. Comparison Operators   
/* Comparison operators are used to compare two values and return a boolean result. They include:
- Equality (==): Checks if two values are equal. For example, 5 == 3 results in false.
- Strict Equality (===): Checks if two values are equal and of the same type. For example, 5 === 3 results in false.
- Inequality (!=): Checks if two values are not equal. For example, 5 != 3 results in true.
- Strict Inequality (!==): Checks if two values are not equal or not of the same type. For example, 5 !== 3 results in true.
- Greater Than (>): Checks if the first value is greater than the second. For example, 5 > 3 results in true.
- Less Than (<): Checks if the first value is less than the second. For example, 5 < 3 results in false.
- Greater Than or Equal To (>=): Checks if the first value is greater than or equal to the second. For example, 5 >= 3 results in true.
- Less Than or Equal To (<=): Checks if the first value is less than or equal to the second. For example, 5 <= 3 results in false. */

//example of comparison operators in TypeScript

console.log("Comparison Operators:");
let num1 = 5;
let num2 = 3;
console.log("Equality (==):", num1 == num2); // Output: false
console.log("Strict Equality (===):", num1 === num2); // Output: false
console.log("Inequality (!=):", num1 != num2); // Output: true      
console.log("Strict Inequality (!==):", num1 !== num2); // Output: true
console.log("Greater Than (>):", num1 > num2); // Output: true
console.log("Less Than (<):", num1 < num2); // Output: false
console.log("Greater Than or Equal To (>=):", num1 >= num2); // Output: true
console.log("Less Than or Equal To (<=):", num1 <= num2); // Output: false      



//4. Logical Operators
/* Logical operators are used to combine or invert boolean values. They include:
- Logical AND (&&): Returns true if both operands are true. For example, true && false results in false.
- Logical OR (||): Returns true if at least one of the operands is true. For example, true || false results in true.
- Logical NOT (!): Inverts the boolean value of the operand. For example, !true results in false. */    

//example of logical operators in TypeScript

console.log("Logical Operators:");
let isSunny = true;
let isWarm = false;
console.log("Logical AND (&&):", isSunny && isWarm); // Output: false
console.log("Logical OR (||):", isSunny || isWarm); // Output: true
console.log("Logical NOT (!):", !isSunny); // Output: false         


//5. Bitwise Operators
/* Bitwise operators are used to perform operations on the binary representations of numbers. They include:
- Bitwise AND (&): Performs a bitwise AND operation on two operands. For example, 5 & 3 results in 1.
- Bitwise OR (|): Performs a bitwise OR operation on two operands. For example, 5 | 3 results in 7.
- Bitwise XOR (^): Performs a bitwise exclusive OR operation on two operands. For example, 5 ^ 3 results in 6.
- Bitwise NOT (~): Inverts the bits of the operand. For example, ~5 results in -6.
- Left Shift (<<): Shifts the bits of the first operand to the left by the number of positions specified by the second operand. For example, 5 << 1 results in 10.
- Right Shift (>>): Shifts the bits of the first operand to the right by the number of positions specified by the second operand. For example, 5 >> 1 results in 2.
- Unsigned Right Shift (>>>): Shifts the bits of the first operand to the right by the number of positions specified by the second operand, filling in zeros from the left. For example, 5 >>> 1 results in 2. */

//example of bitwise operators in TypeScript

console.log("Bitwise Operators:");
let bitwiseNum1 = 5; // In binary: 0101             
let bitwiseNum2 = 3; // In binary: 0011
console.log("Bitwise AND (&):", bitwiseNum1 & bitwiseNum2); // Output: 1 (In binary: 0001)
console.log("Bitwise OR (|):", bitwiseNum1 | bitwiseNum2); // Output: 7 (In binary: 0111)
console.log("Bitwise XOR (^):", bitwiseNum1 ^ bitwiseNum2); // Output: 6 (In binary: 0110)
console.log("Bitwise NOT (~):", ~bitwiseNum1); // Output: -6 (In binary: 1010)
console.log("Left Shift (<<):", bitwiseNum1 << 1); // Output: 10 (In binary: 1010)  
console.log("Right Shift (>>):", bitwiseNum1 >> 1); // Output: 2 (In binary: 0010)
console.log("Unsigned Right Shift (>>>):", bitwiseNum1 >>> 1); // Output: 2 (In binary: 0010)   

/* These are some of the most commonly used operators in TypeScript. Understanding how to use these operators effectively can help you write more efficient and readable code. It's important to note that the behavior of some operators may differ when used with different data types, so it's always a good idea to refer to the TypeScript documentation for specific details on operator behavior. */

//6. Ternary Operator
/* The ternary operator is a shorthand for an if-else statement. It takes three operands: a condition, an expression to execute if the condition is true, and an expression to execute if the condition is false. The syntax is as follows:
condition ? expressionIfTrue : expressionIfFalse; */    

//example of ternary operator in TypeScript

console.log("Ternary Operator:");
let isRaining = true;
let weatherMessage = isRaining ? "It's raining outside." : "It's sunny outside.";
console.log(weatherMessage); // Output: It's raining outside.

//7.increment and Decrement Operators
/* Increment and decrement operators are used to increase or decrease the value of a variable by 1, respectively. They include:
- Increment Operator (++): Increases the value of a variable by 1. For example, if x is 5, then x++ results in 6.
- Decrement Operator (--): Decreases the value of a variable by 1. For example, if x is 5, then x-- results in 4. */    

//example of increment and decrement operators in TypeScript
console.log("Increment and Decrement Operators:");
let count = 5;
console.log("Initial Count:", count);   
console.log("After Increment (++):", ++count); // Output: 6
console.log("After Decrement (--):", --count); // Output: 5

//7.1 Prefix vs Postfix Increment/Decrement
/* The increment and decrement operators can be used in two forms: prefix and postfix. 
- Prefix Increment/Decrement: When the operator is placed before the variable (e.g., ++x or --x), the variable is incremented or decremented first, and then its new value is returned.
- Postfix Increment/Decrement: When the operator is placed after the variable (e.g., x++ or x--), the current value of the variable is returned first, and then the variable is incremented or decremented. */  

//example of prefix vs postfix increment/decrement in TypeScript
console.log("Prefix vs Postfix Increment/Decrement:");
let num = 5;
console.log("Initial Number:", num); 
console.log("Postfix Increment (num++):", num++); // Output: 5 (num is incremented after the value is returned)
console.log("Current Number after Postfix Increment:", num); // Output: 6
num = 5; // Reset num to 5
console.log("Prefix Increment (++num):", ++num); // Output: 6 (num is incremented before the value is returned)
console.log("Current Number after Prefix Increment:", num); // Output: 6    

//8. Typeof Operator
/* The typeof operator is used to determine the type of a variable or expression. It returns a string indicating the type of the operand. For example, typeof 5 results in "number", and typeof "Hello" results in "string". The typeof operator can be useful for debugging and for performing type checks in your code. */

//example of typeof operator in TypeScript

console.log("Typeof Operator:");
let number = 5;
let str = "Hello";
let isTrue = true;
console.log("Type of number:", typeof number); // Output: "number"
console.log("Type of str:", typeof str); // Output: "string"
console.log("Type of isTrue:", typeof isTrue); // Output: "boolean" 


//9. Instanceof Operator
/* The instanceof operator is used to check if an object is an instance of a specific class or constructor function. It returns true if the object is an instance of the specified type, and false otherwise. For example, if you have a class called Person, you can use the instanceof operator to check if an object is an instance of the Person class. */  

//example of instanceof operator in TypeScript

console.log("Instanceof Operator:");    
class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}
let person1 = new Person("Alice");
console.log("Is person1 an instance of Person?", person1 instanceof Person); // Output: true
console.log("Is person1 an instance of Object?", person1 instanceof Object); // Output: true (since all objects in JavaScript are instances of Object)  


//10. In Operator
/* The in operator is used to check if a specified property exists in an object. It returns true if the property exists, and false otherwise. For example, if you have an object called person with a property called name, you can use the in operator to check if the name property exists in the person object. */   

//example of in operator in TypeScript

console.log("In Operator:");    
let person = { name: "Alice", age: 30 };
console.log("Does person have a 'name' property?", "name" in person); // Output: true
console.log("Does person have a 'height' property?", "height" in person); // Output: false  

/* These are some of the most commonly used operators in TypeScript. Understanding how to use these operators effectively can help you write more efficient and readable code. It's important to note that the behavior of some operators may differ when used with different data types, so it's always a good idea to refer to the TypeScript documentation for specific details on operator behavior. */

//11. Equality vs Strict Equality
/* The equality operator (==) and the strict equality operator (===) are used to compare values in TypeScript, but they behave differently when it comes to type coercion. 
- Equality Operator (==): This operator compares two values for equality after performing type coercion if necessary. This means that if the operands are of different types, TypeScript will attempt to convert them to a common type before making the comparison. For example, 5 == "5" results in true because the string "5" is coerced to the number 5 before the comparison is made.
- Strict Equality Operator (===): This operator compares two values for equality without performing type coercion. This means that if the operands are of different types, the comparison will return false. For example, 5 === "5" results in false because the number 5 and the string "5" are of different types and no coercion is performed. */

//example of equality vs strict equality in TypeScript

console.log("Equality vs Strict Equality:");
let xAny: any = 5;
let yAny: any = "5";

console.log("Using == (equality):", xAny == yAny); // Output: true
console.log("Using === (strict equality):", xAny === yAny); // Output: false
