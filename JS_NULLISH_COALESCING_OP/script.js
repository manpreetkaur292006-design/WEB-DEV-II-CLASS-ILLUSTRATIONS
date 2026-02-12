
// NULLISH COALESCING OPERATOR IN JS

// The nullish coalescing operator returns the right-hand 
// operand when the left-hand operand is null or undefined; 
// otherwise, it returns the left-hand operand.


let value = null;
let defaultValue = "Default Value";
let result = value ?? defaultValue;
console.log(result);

