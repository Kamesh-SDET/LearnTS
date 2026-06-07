//Tuples in TypeScript
// A tuple is a special type of array that can hold a fixed number of values of different types. It allows you to define an array with a specific structure, where each element can have a different type.

///Tuple characteristics
// 1. Fixed Length: A tuple has a fixed number of elements, and each element can have a different type.
// 2. Heterogeneous Types: Unlike regular arrays, tuples can contain elements of different types.
// 3. Ordered: The order of elements in a tuple is important, and it is preserved when the tuple is created.
// 4. Readonly: By default, tuples are readonly, meaning that you cannot change the values of the elements after they have been assigned.   

//syntax for creating a tuple
// let tupleName: [type1, type2, ...] = [value1, value2, ...];
const personTuple: [string, number] = ["Alice", 30];
let coordinates: [number, number] = [10, 20];


// why const is used for tuple
// Using const for a tuple ensures that the reference to the tuple cannot be changed, meaning you cannot reassign the entire tuple to a new value. However, you can still modify the individual elements of the tuple if they are not marked as readonly. This is useful when you want to maintain the integrity of the tuple structure while allowing changes to its contents.

// Example of modifying a tuple element
personTuple[0] = "Bob"; // This is allowed, as we are modifying an element of the tuple
// personTuple = ["Charlie", 25]; // This would cause an error, as we cannot reassign the entire tuple  

// Example of a tuple with more than two elements
const employeeTuple: [number, string, boolean] = [101, "John Doe", true];

//array of tuples
// we can also create an array of tuples, which allows us to store multiple tuples in a single variable. This is useful when we want to represent a collection of related data.

const people: [string, number][] = [
    ["Alice", 30],
    ["Bob", 25],
    ["Charlie", 35]
];

// Example of accessing elements in an array of tuples
for (const person of people) {
    const [name, age] = person; // Destructuring the tuple
    console.log(`Name: ${name}, Age: ${age}`);
}

//usecase of tuples
// Tuples are particularly useful when you want to represent a fixed structure of data that may contain different types. Some common use cases for tuples include:
// 1. Returning Multiple Values from a Function: Tuples can be used to return multiple values of different types from a function.
// 2. Representing a Record or a Row of Data: Tuples can represent a record or a row of data in a structured way, especially when the data has a fixed format.
// 3. Storing Heterogeneous Data: When you need to store related data of different types together, tuples provide a convenient way to do so while maintaining type safety.  

// Conclusion
// Tuples in TypeScript provide a way to represent a fixed structure of data that can contain different types. They are useful for scenarios where you want to group related data together while maintaining type safety. Understanding how to use tuples effectively can help you write cleaner and more efficient code in TypeScript.

