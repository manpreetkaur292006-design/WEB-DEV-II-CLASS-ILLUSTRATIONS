// MATH FUNCTIONS IN JS

// 1. Math.abs(x) : gives positive value of the number
let num=-10;
let abs_val=Math.abs(num);
console.log("Original number:")
console.log(num)
console.log("Absolute number:")
console.log(abs_val)
// Output : Original number:
// -10
// Absolute number:
// 10

// 2. Math.round(x) : rounds the number to the nearest interger
let num2=6.776;
let round_num2=Math.round(num2);
console.log("Original number:")
console.log(num2)
console.log("Rounded number:")
console.log(round_num2)
// Output :

// 3. Math.ceil(x) : rounds the number up to the nearest integer
let num3=6.776;
let ceil_num3=Math.round(num3);
console.log("Original number:")
console.log(num3)
console.log("ceil number:")
console.log(ceil_num3)
// Output :

// 4. Math.floor(x) : rounds the number down to the nearest integer
let num4=6.776;
let floor_num4=Math.round(num4);
console.log("Original number:")
console.log(num4)
console.log("floor number:")
console.log(floor_num4)
// Output :

// 5. Math.random(x) : generates a random decimal number between 0(inclusive) and 1(exclusive)
let random_num=Math.random();
console.log("Random number:")
console.log(random_num)
// Output :

// 6. Math.max(x,y,z,...) : returns the largest of Zero or more numbers
let maxNumber = Math.max(10, 5, 20, 8);
console.log("Maximum number:")
console.log(maxNumber)
// Output :

// 7. Math.min(x,y,z,...) : returns the smallest of Zero or more numbers
 let minNumber = Math.min(10, 5, 20, 8);
 console.log("Minimum number:")
 console.log(minNumber)
 // Output :

// 8. Math.pow(x,y) : returns the value of x to the power of y
 let result = Math.pow(2, 3);
 console.log("2 to the power 3 is :")
 console.log(result)
 // Output :

// 9. Math.sqrt(x) : returns the square root of the number
let squareRoot = Math.sqrt(25);
console.log("Sqaure root of 25 is :")
console.log(squareRoot)
// Output :

// 10. Math.PI : A predefined constant representing the mathematical constant pi
 console.log("The value of PI :")
 console.log(Math.PI)
 // Output :

// 11. Math.trunc(x) : returns the integer part of the number by removing the fractional part 
// effectively truncating the decimal portion
 let number  = 5.78;
 let truncated = Math.trunc(number);
 console.log("Original number :")
 console.log(truncated)
 // Output :
