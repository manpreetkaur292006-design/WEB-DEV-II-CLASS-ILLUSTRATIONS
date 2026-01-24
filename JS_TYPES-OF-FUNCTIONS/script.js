// DIFFERENT TYPES OF FUNCTION IN JS :-

// 1. REGULAR FUNCTION : Defined using "function" keyword.
function greet(name){
    return `Hello, ${name}`;
}
console.log(greet("Manpreet"))
// Output : Hello, Manpreet

// 2. ARROW FUNCTION 
const greet2=(name)=>`Hello, ${name}!`;
console.log(greet2("Manpreet"))
// Output : Hello, Manpreet!

// 3. ANONYMOUS FUNCTION : functions without name.
setTimeout(function() {
    console.log("Hello, world!");
}, 1000);
// Output : Hello, world!

// 4. FUNCTION EXPRESSION : this involve defining a function and assigning it to a 
// variable. They can be named or anonymous.
const greet3 = function(name) {
    return `Hello, ${name}!`;
};
console.log(greet3("Manpreet"));
// Output : Hello, Manpreet!

// 5. CALLBACK FUNCTION : this function is passed as an argument to another function
// and is executed after some opertaion has been compleleted.
function logMessage() {
    console.log("This is a callback function.");
}
function executeCallback(callback) {
    callback();
}
executeCallback(logMessage);
// Output : This is a callback function.

// 6. FIRST-CLASS FUNCTION :  JavaScript treats functions as first-class citizens,
//  meaning they can be assigned to variables, passed as arguments, and returned from
//  other functions.
function greet4(name) {
    return `Hello, ${name}!`;
}
const sayHello = greet4;
console.log(sayHello("Manpreet"));
// Output : Hello, Manpreet!

// 7. HIGHER-ORDER FUNCTION : A higher-order function is a function that accepts
//  other functions as arguments or returns a function.
function higherOrderFunction(callback) {
    callback();
}
function logMessage() {
    console.log("This is a higher-order function.");
}
higherOrderFunction(logMessage);
// Output :

// 8. SELF-INVOKING FUNCTION (IIFE) : A self-invoking function, also known as an 
// Immediately Invoked Function Expression (IIFE), is a function that is executed 
// immediately after it is defined.
(function() {
    console.log("This is an IIFE.");
})();
// Output :

