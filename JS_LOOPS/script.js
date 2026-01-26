// LOOPS IN JS

// IN JS LOOPS ARE OF TWO TYPES :
// 1. FOR LOOP : The for loop repeats a block of code a specific number of times. It contains
//  initialization, condition, and increment/decrement in one line.

//    A. FOR LOOP :

// SYNTAX :-
// for (initialization; condition; increment/decrement)  {// Code to execute}

// EXAMPLE : 
for (let i = 1; i <= 3; i++) {
    console.log("Count:", i);
}

//    B. FOR IN LOOP :

// SYNTAX :-
//   for (let key in object) {
//       // code to be executed
//   }

// EXAMPLE :
const person = { name: "Alice", age: 22, city: "Delhi" };
for (let key in person) {
  console.log(key, ":", person[key]);
}

//    C. FOR EACH LOOP :

// SYNTAX :
//   array.forEach(function(element, index, array) {
//     // code to execute
//   });

// EXAMPLE :
const numbers = [10, 20, 30];
numbers.forEach(function(num) {
  console.log(num);
});

// 2. WHILE LOOP

// 3. DO WHILE LOOP
