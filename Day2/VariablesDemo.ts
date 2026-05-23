//1. Comments - comments are used to explain the code and make it more readable
// This is a single line comment
/* This is a multi-line comment
   It can span multiple lines */

/* 2. Variables - variables are used to store data that can be used later in the program

In TypeScript, we can declare variables using var, let, or const */


// var is function-scoped and can be re-declared and updated
let userName = "John";
//userName = "Doe"; // This is allowed
/* important note: var is function-scoped, which can lead to unexpected behavior in certain cases, 
so it's generally recommended to use let or const instead of var in modern TypeScript code. */


// let is block-scoped and can be updated but not re-declared
let age = 25;
age = 30; // This is allowed

/* let age = 35; // This would cause an error because age has already been declared in the same scope  */

/* important note: let is block-scoped, which means it is only accessible within the block it is defined in,*/

// const is block-scoped and cannot be updated or re-declared
const PI = 3.14;
// PI = 3.14159; // This would cause an error   


/* Var vs let vs const:
- var is function-scoped and can be re-declared and updated, which can lead to unexpected behavior in certain cases. It's generally recommended to use let or const instead of var in modern TypeScript code.
- let is block-scoped and can be updated but not re-declared. It is only accessible within the block it is defined in.
- const is block-scoped and cannot be updated or re-declared. It is also only accessible within the block it is defined in. Use const when you want to declare a variable that should not be reassigned after its initial value is set.
 */

//1.Scope of Variables - The scope of a variable determines where it can be accessed in the code. Variables declared with var are function-scoped, while variables declared with let and const are block-scoped. This means that variables declared with let and const are only accessible within the block they are defined in, while variables declared with var are accessible throughout the entire function they are defined in.

function varScope() {
    if(true) {
        var msg = "Hello, I'm a var variable!";
        console.log("printing inside block"); 
        console.log(msg); // This will work because msg is function-scoped
    }
    console.log("printing outside block"); 
    console.log(msg); // This will also work because msg is function-scoped
}

//varScope();

function letConstScope() {
    if(true) {
        let blockScopedLet = "Hello, I'm a let variable!";
        const blockScopedConst = "Hello, I'm a const variable!";
        console.log("printing inside block"); 
        console.log(blockScopedLet); // This will work because blockScopedLet is block-scoped and we are inside the block
        console.log(blockScopedConst); // This will work because blockScopedConst is block-scoped and we are inside the block
    }           

    console.log("printing outside block");
    //console.log(blockScopedLet); // This will cause an error because blockScopedLet is block-scoped and we are outside the block
    // console.log(blockScopedConst); // This will cause an error because blockScopedConst is block-scoped and we are outside the block
}

//letConstScope();

//2.Declaration and Initialization - In TypeScript, we can declare a variable without initializing it, but it's generally recommended to initialize variables when declaring them to avoid potential issues with undefined values. For example:

var uninitializedVar; // This is allowed, but uninitializedVar will be undefined until it is assigned a value
console.log(uninitializedVar); // This will print undefined

uninitializedVar = 30; // Now uninitializedVar is assigned a value
console.log(uninitializedVar); // This will print 30    


let uninitializedLet; // This is allowed, but uninitializedLet will be undefined until it is assigned a value
console.log(uninitializedLet); // This will print undefined 
uninitializedLet = "Hello"; // Now uninitializedLet is assigned a value
console.log(uninitializedLet); // This will print "Hello"


//const uninitializedConst; // This will cause an error because const variables must be initialized at the time of declaration    

const initializedConst = 100; // This is allowed because initializedConst is initialized at the time of declaration
console.log(initializedConst); // This will print 100

//note:const variables must be initialized at the time of declaration, and they cannot be reassigned after that. This means that if you declare a const variable without initializing it, you will get an error. It's important to remember that const does not mean the value is immutable; if the value is an object or an array, its properties or elements can still be modified, but the variable itself cannot be reassigned to a different value.

//3. Redeclaration and Reassignment - Variables declared with var can be re-declared and updated, while variables declared with let can be updated but not re-declared, and variables declared with const cannot be re-declared or updated. For example:

var redeclareVar = "First declaration";
var redeclareVar = "Second declaration"; // This is allowed because redeclareVar is declared with var, which allows re-declaration
console.log(redeclareVar); // This will print "Second declaration"  

let updateLet = "Initial value";
updateLet = "Updated value"; // This is allowed because updateLet is declared with let, which allows updating the value
// let updateLet = "Another declaration"; // This will cause an error because updateLet cannot be re-declared in the same scope
console.log(updateLet); // This will print "Updated value"  


const updateConst = "Initial value";
// updateConst = "Updated value"; // This will cause an error because updateConst cannot be updated after it has been initialized
// const updateConst = "Another declaration"; // This will also cause an error because updateConst cannot be re-declared in the same scope
console.log(updateConst); // This will print "Initial value"


//4. Re-intialization/Reassignment - Variables declared with var and let can be reassigned to new values, while variables declared with const cannot be reassigned after they have been initialized. For example:

var reassignVar = "Initial value";
reassignVar = "Reassigned value"; // This is allowed because reassignVar is declared with var, which allows reassignment
console.log(reassignVar); // This will print "Reassigned value" 

let reassignLet = "Initial value";
reassignLet = "Reassigned value"; // This is allowed because reassignLet is declared with let, which allows reassignment
console.log(reassignLet); // This will print "Reassigned value" 

const reassignConst = "Initial value";
// reassignConst = "Reassigned value"; // This will cause an error because reassignConst cannot be reassigned after it has been initialized
console.log(reassignConst); // This will print "Initial value"

//5. Hoisting - Variables declared with var are hoisted to the top of their scope and can be accessed before they are declared, while variables declared with let and const are not hoisted and cannot be accessed before they are declared. For example:
//hoisting means that variable declarations (but not initializations) are moved to the top of their containing scope during the compilation phase. This allows you to access variables declared with var before their actual declaration in the code, but it can lead to unexpected behavior if you're not careful. On the other hand, variables declared with let and const are not hoisted, which means you cannot access them before they are declared, and doing so will result in a ReferenceError.

//var
//console.log(hoistedVar); // This will print undefined because hoistedVar is hoisted to the top of its scope but is not initialized yet
var hoistedVar = "I'm a hoisted variable!"; 


//let
//console.log(hoistedLet); // This will cause an error because hoistedLet is not hoisted and cannot be accessed before it is declared   
let hoistedLet = "I'm a let variable!";


//const
//console.log(hoistedConst); // This will cause an error because hoistedConst is not hoisted and cannot be accessed before it is declared
const hoistedConst = "I'm a const variable!";   

