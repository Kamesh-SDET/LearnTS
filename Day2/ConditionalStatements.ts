//Statements in TypeScript are instructions that perform specific actions. Conditional statements allow you to execute different blocks of code based on certain conditions. Here are some common conditional statements in TypeScript:

export {}; // The export statement is used to export functions, objects, or primitive values from a module so that they can be used in other modules. In this case, we are exporting an empty object to indicate that this file is a module and to prevent any potential naming conflicts with other variables or functions in the global scope.    

//1. if statement
/* The if statement is used to execute a block of code if a specified condition is true. If the condition is false, the block of code will be skipped. */   

//example of if statement

let num = 10;

if (num > 5) {
    console.log("num is greater than 5");
}


//2. if...else statement
/* The if...else statement is used to execute one block of code if a specified condition is true, and another block of code if the condition is false. */

//example of if...else statement

let age = 18;   
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

//3. if...else if...else (Nested if...else) statement
/* The if...else if...else statement is used to execute different blocks of code based on multiple conditions. It allows you to check for multiple conditions and execute the corresponding block of code for the first condition that evaluates to true. If none of the conditions are true, the else block will be executed. */   

//example of if...else if...else statement


let score = 85;

if (score >= 90) {  
    console.log("You got an A!");
} else if (score >= 80) {
    console.log("You got a B!");
} else {
    console.log("You need to improve.");
}

//4. switch statement
/* The switch statement is used to perform different actions based on different conditions. It is an alternative to using multiple if...else if...else statements when you have a single variable that can take on multiple values. The switch statement evaluates the expression and executes the block of code corresponding to the matching case. If no cases match, the default block will be executed (if provided). */    

//example of switch statement

let day:number = 3; 
switch (day) {
    case 1:
        console.log("Today is Monday.");    
        break;
    case 2:
        console.log("Today is Tuesday.");           
        break;
    case 3:
        console.log("Today is Wednesday."); 
        break;  
    case 4:
        console.log("Today is Thursday."); 
        break;
    case 5:
        console.log("Today is Friday."); 
        break;
    case 6:
        console.log("Today is Saturday."); 
        break;
    case 7:
        console.log("Today is Sunday."); 
        break;
    default:
        console.log("Invalid day."); 
        break;
}

// In this example, the switch statement checks the value of the variable day and executes the corresponding case block based on its value. If day is 3, it will print "Today is Wednesday." If day does not match any of the cases, it will execute the default block and print "Invalid day."

// Jump Statements in TypeScript are used to alter the flow of control in a program. They allow you to jump to a different part of the code based on certain conditions. Here are some common jump statements in TypeScript:    

//5. break statement
/* The break statement is used to exit a loop or a switch statement before it has completed all of its iterations or cases. When the break statement is encountered, the control flow of the program will immediately exit the loop or switch statement and continue with the next line of code after it. */

//example of break statement in a loop

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
} // This will print numbers from 0 to 4 and then exit the loop when i is equal to 5.


//6. continue statement
/* The continue statement is used to skip the current iteration of a loop and move on to the next iteration. When the continue statement is encountered, the control flow of the program will immediately skip the rest of the code inside the loop for the current iteration and continue with the next iteration of the loop. */

//example of continue statement in a loop

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }   
    console.log(i);
} // This will print numbers from 0 to 9, but skip the number 5.

