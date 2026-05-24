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


