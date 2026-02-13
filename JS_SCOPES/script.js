

// DIFFERENT SCOPES IN JS


// GLOBAL SCOPE


var globalVariable = "I am global";

function exampleFunction() {
    console.log(globalVariable); // Accessible inside functions
}
console.log(globalVariable); // Accessing globally



// LOCAL SCOPE (FUNCTION SCOPE)


function exampleFunction() {
    var localVariable = "I am local";
    console.log(localVariable); // Accessible inside the function
}
// console.log(localVariable);  // Error: localVariable is not defined
exampleFunction()