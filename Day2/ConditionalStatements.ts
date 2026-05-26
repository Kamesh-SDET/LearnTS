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

let day = "Monday"; 
switch (day) {
    case "Monday":
        console.log("Today is Monday.");    
        break;
    case "Tuesday":
        console.log("Today is Tuesday.");           
        break;
    case "Wednesday":
        console.log("Today is Wednesday."); 
        break;  
    case "Thursday":
        console.log("Today is Thursday."); 
        break;
    case "Friday":
        console.log("Today is Friday."); 
        break;
    case "Saturday":
        console.log("Today is Saturday."); 
        break;
    case "Sunday":
        console.log("Today is Sunday."); 
        break;
    default:
        console.log("Invalid day."); 
        break;
}

