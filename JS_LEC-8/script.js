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
var a=10;  
console.log(a);
function demo(){
    let b=20;
    console.log(b);
}
demo()