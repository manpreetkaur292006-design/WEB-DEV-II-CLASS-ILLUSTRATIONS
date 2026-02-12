
// NULLISH COALESCING OPERATOR IN JS

// The nullish coalescing operator returns the right-hand 
// operand when the left-hand operand is null or undefined; 
// otherwise, it returns the left-hand operand.

// EXAMPLE-1 
let value = null;
let defaultValue = "Default Value";
let result = value ?? defaultValue;
console.log(result);

// EXAMPLE-2
let val="Value";
let defVal="Default";
let output=val ?? defVal;
console.log(output)

