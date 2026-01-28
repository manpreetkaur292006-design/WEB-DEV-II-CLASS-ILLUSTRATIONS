// every browser has a JS Engine in them

// and every js engine comatins the execution context i.e. how js code is being executed in the environment

// EXECUTION CONTEXT
// two types :
//  1. GLOBAL EXECUTION CONTEXT
//  2. FUNCTIONAL EXECUTION CONTEXT
// each of these are further divided into two phases :-
//   1. creative phase - isme memory allocation hoga
//   2. execution phase - this is for code execution

// REALTED CODE TO UNDERSTAND THE FLOW OF THE JS CODE :
var a=10;              // 1
console.log(a);        // 2
function demo(){
    let b=20;          // 4
    console.log(b);    // 5
}                      // 6
demo()                 // 3
                      //  ^ order of the flow of the above code


// CALLSTACK :- it is a stack i.e. LIFO structure (last in first out) , part of the js engine
//              It keeps the track of every process which is run in the environment
//              It stores the Global execution context and the Functional execution context.