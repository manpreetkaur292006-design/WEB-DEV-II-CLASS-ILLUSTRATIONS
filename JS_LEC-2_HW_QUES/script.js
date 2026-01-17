console.log(window);   
// OUTPUT : Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}
// EXPLAINATION : `console.log(window);` outputs the global `window` object to the browser's developer console, displaying 
// the browser's top-level JavaScript environment with properties like `document`, `location`, and `history`. 
// Key Details :
// The `window` object represents the browser window and serves as the global scope in client-side JavaScript. 
// Running this in a browser console (F12 > Console) reveals its massive structure, expandable for inspection during debugging. 
// Practical Use :
// Developers use this to inspect the entire global namespace, check available APIs, or debug scope issues.

console.log(1+"1");
// OUTPUT : 11
// EXPLAINATION : `console.log(1 + "1");` outputs `"11"` to the browser console because JavaScript's `+` operator performs 
// string concatenation when one operand is a string, converting the number `1` to `"1"` first.
// Key Details :
// The number `1` gets coerced to the string `"1"` since the second operand is already a string, resulting in 
// concatenation rather than numeric addition. This type coercion follows JavaScript's abstract equality rules
//  where strings trigger concatenation with `+`.
// Practical Use :
// This demonstrates JavaScript's loose typing and operator overloading, useful for understanding why `1 + 1` equals
//  `2` (addition) but `1 + "1"` equals `"11"` (concatenation). Developers often use explicit conversion like `Number()` 
// or template literals to avoid surprises.

console.log(1-"1");
// OUTPUT : 0
// EXPLAINATION : `console.log(1 - "1");` outputs `0` to the browser console because JavaScript coerces the string `"1"` to 
// the number `1` for the subtraction operator, performing `1 - 1`.
// Key Details :
// The `-` operator triggers numeric coercion on both operands, unlike `+` which prioritizes string concatenation. Non-numeric 
// strings yield `NaN` instead.
// Practical Use :
// This highlights JavaScript's type coercion rules: arithmetic operators convert to numbers, helping debug unexpected math 
// results but requiring explicit conversions like `Number()` for reliability.

console.log("1"-1);
// OUTPUT : 0
// EXPLAINATION : `console.log("1" - 1);` outputs `0` to the browser console because the subtraction operator `-` coerces
//  the string `"1"` to the number `1`, performing `1 - 1`.
// Key Details :
// Order of operands doesn't affect the result here—both `1 - "1"` and `"1" - 1` trigger numeric coercion on the string
//  operand. Non-numeric strings like `"abc" - 1` return `NaN`.
// Practical Use :
// This shows the `-` operator's consistent numeric behavior unlike `+`, helping predict outcomes in mixed-type expressions
//  during debugging or coursework.

console.log("5"*"2");
// OUTPUT : 10
// EXPLAINATION : `console.log("5" * "2");` outputs `10` to the browser console because the multiplication `*` operator 
// coerces both strings to numbers (`5` and `2`), then multiplies them.
// Key Details :
// Arithmetic operators like `*`, `/`, and `-` always convert strings to numbers via `Number()` coercion before computing.
// Invalid strings like `"abc" * 2` yield `NaN`.
// Practical Use :
// This reinforces JavaScript's numeric coercion for non-addition math, contrasting `+` behavior—key for debugging mixed-type
//  calculations in web dev assignments.

console.log(true+true);
// OUTPUT : 2
// EXPLAINATION : `console.log(true + true);` outputs `2` to the browser console because JavaScript coerces both `true`
//  values to the number `1` (via `ToNumber(true)`), then adds them: `1 + 1`.
// Key Details :
// Booleans convert to numbers during arithmetic operations: `true` becomes `1`, `false` becomes `0`. Other examples 
// include `true + false` yielding `1`.
// Practical Use :
// This type coercion pattern applies to all arithmetic operators (`-`, `*`, `/`), helping understand implicit
//  conversions in mixed-type expressions during debugging.

console.log(true-false);
// OUTPUT : 1
// EXPLAINATION : `console.log(true - false);` outputs `1` to the browser console because JavaScript coerces
//  `true` to `1` and `false` to `0`, then subtracts: `1 - 0`.
// Key Details :
// All arithmetic operators (`+`, `-`, `*`, `/`) convert booleans to numbers this way: `true` → `1`, `false` → `0`.
// Practical Use :
// This consistent coercion pattern helps predict results in mixed boolean-numeric expressions, common in conditional
//  math or debugging logic.

console.log(!!false);
// OUTPUT : false
// EXPLAINATION : `console.log(!!false);` outputs `false` to the browser console because the double negation (`!!`) 
// converts any value to its boolean primitive, and `false` remains `false`.
// Key Details :
// First `!false` becomes `true`, then `!true` becomes `false`. This is a common idiom for boolean coercion, equivalent
//  to `Boolean(false)`.
// Practical Use :
// Use `!!` to ensure boolean types explicitly, especially when normalizing truthy/falsy values like objects or strings
//  in conditionals or React props.

console.log(!!"false");
// OUTPUT : true
// EXPLAINATION : `console.log(!!"false");` outputs `true` to the browser console because the double negation (`!!`) 
// converts the non-empty string `"false"` to its boolean primitive `true`—strings are truthy unless empty.
// Key Details :
// First `!"false"` becomes `false` (negating a truthy value), then `!false` becomes `true`. This differs from `!!false` 
// (which is `false`) due to JavaScript's truthy/falsy rules.
// Practical Use :
// `!!` normalizes values to explicit booleans based on truthiness, useful for ensuring type safety in conditions, unlike 
// parsing the string content itself.

console.log(!![]);
// OUTPUT : true
// EXPLAINATION : `console.log(!![]);` outputs `true` to the browser console because the double negation (`!!`) converts the 
// empty array `[]` to its boolean primitive `true`—arrays are always truthy objects in JavaScript. 
// Key Details :
// First `![]` becomes `false` (negating a truthy array), then `!false` becomes `true`. Empty arrays remain truthy, unlike 
// empty strings `!!""` which yield `false`.
// Practical Use :
// `!![]` demonstrates how objects/arrays convert to `true` regardless of contents, key for normalizing values in conditionals
//  or ensuring explicit booleans in web dev code.

console.log(![]);
// OUTPUT : false
// EXPLAINATION : `console.log(![]);` outputs `false` to the browser console because the logical NOT operator `!` converts the 
// empty array `[]` (truthy) to its boolean inverse `false`.
// Key Details :
// Arrays, even empty ones, are truthy objects in JavaScript, so `![]` negates to `false`. Compare to `!![]` which yields `true` 
// by double negation. 
// Practical Use :
// Single `!` inverts truthiness for conditionals (`if(!array)` checks truthy arrays), while `!!` ensures boolean type—both useful 
// in web dev for explicit logic control.

console.log([]+[]);
// OUTPUT : nothing will print empty space will be displayed
// EXPLAINATION : `console.log([] + []);` outputs `""` to the browser console because the `+` operator converts both empty 
// arrays `[]` to empty strings `""` via `toString()`, then concatenates them.
// Key Details :
// JavaScript's `+` triggers `ToPrimitive` coercion where arrays call `toString()`, yielding `""` for empty arrays—unlike 
// arithmetic operators which would coerce to `0`.
// Practical Use :
// This quirky behavior reveals JS coercion order (`+` prefers string concat), common in interview questions to test 
// understanding of type conversion pitfalls in web development.

console.log([1,2]+[3,4]);
// OUTPUT : 1,23,4
// EXPLAINATION : `console.log([1,2] + [3,4]);` outputs `"1,2,3,4"` to the browser console because the `+` operator 
// converts both arrays to strings via `toString()` (yielding `"1,2"` and `"3,4"`), then concatenates them.
// Key Details :
// Arrays automatically call `join(',')` internally during string coercion for `+`, unlike array methods like `concat()`
//  which merge elements into a new array `[1,2,3,4]`.
// Practical Use :
// This string result surprises beginners expecting array concatenation—use `[1,2].concat([3,4])` or spread syntax 
// `[...[1,2], ...[3,4]]` for actual array merging in web dev.

console.log([]+{});
// OUTPUT : [object Object]
// EXPLAINATION : `console.log([] + {});` outputs `"[object Object]"` to the browser console because the `+` operator converts 
// the empty array `[]` to `""` and the empty object `{}` to `"[object Object]"`, then concatenates them.
// Key Details :
// Arrays call `toString()` yielding `""` for empty ones; plain objects default to `"[object Object]"` via their `toString()`
//  method during string coercion.
// Practical Use :
// This reveals JavaScript's `ToPrimitive` order for `+` (string conversion preferred), contrasting `{} + []` which outputs
//  `"0"` due to parser treating leading `{}` as a block.

console.log(0.1+0.2==0.3);
// OUTPUT : false
// EXPLAINATION : `console.log(0.1 + 0.2 == 0.3);` outputs `false` to the browser console due to floating-point precision
//  errors in JavaScript's IEEE 754 representation—`0.1 + 0.2` equals `0.30000000000000004`, not exactly `0.3`. 
// Key Details :
// Binary floating-point can't precisely store most decimals,
//  causing tiny rounding discrepancies in arithmetic.
// Practical Use :
// Avoid `==` for float comparisons; use epsilon checks (`Math.abs(a - b) < Number.EPSILON`) or round 
// (`+(0.1 + 0.2).toFixed(10) == 0.3`) in web dev calculations. 

console.log(0.1+0.2===0.3);
// OUTPUT : false
// EXPLAINATION : `console.log(0.1 + 0.2 === 0.3);` outputs `false` to the browser console due to the same 
// floating-point precision error—`0.1 + 0.2` equals approximately `0.30000000000000004`, not exactly `0.3`.
// ## Key Details :
// The strict `===` operator performs exact equality without type coercion, so the tiny precision discrepancy still 
// fails the comparison, just like loose `==`.
// ## Practical Use :
// Same floating-point pitfalls apply to both `==` and `===` for decimals; always use epsilon tolerance (`Math.abs(a - b) < 1e-10`)
//  or integer math for reliable numeric comparisons in web development.

console.log([2]==[2]);
// OUTPUT : false
// EXPLAINATION : [2] == [2] outputs false because arrays compare by reference (memory address), not content.
// [2] creates NEW array → different memory location
// [2] creates NEW array → different memory location  
// == checks "same object?" → false


// console.log([2]===[2]);
// OUTPUT : false
// EXPLAINATION : [2] === [2] outputs false because strict equality compares reference + type.
// === checks: SAME TYPE + SAME REFERENCE
// [2] → Array object #1 (memory addr: 0x1234)
// [2] → Array object #2 (memory addr: 0x5678) 
// Result: false (different objects)
