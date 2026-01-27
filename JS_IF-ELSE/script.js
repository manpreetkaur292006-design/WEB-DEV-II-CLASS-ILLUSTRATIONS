// DECISION MAKING STATEMENTS IN JS

// 1. IF STATEMENT

// SYNTAX : if (condition) {
                // Code to execute if the condition is true
//          }

// EXAMPLE : 
let age = 20;
if (age >= 18) {
    console.log("You are an adult.");
}

// 2. IF-ELSE STATEMENT

// SYNTAX : if (condition) {
                // Code to execute if the condition is true
//          } else {
//              // Code to execute if the condition is false
//          }

// EXAMPLE :
let isRaining = true;
if (isRaining) {
    console.log("Bring an umbrella.");
} else {
    console.log("No need for an umbrella.");
}

// 3. NESTED IF-ELSE STATEMENT

// SYNTAX : if (condition1) {
                // Code to execute if condition1 is true
            // if (condition2) {
                // Code to execute if condition2 is true
            // } else {
                // Code to execute if condition2 is false
            // }
            // } else {
                // Code to execute if condition1 is false
            // }

// EXAMPLE :
let score = 75;
if (score >= 60) {
    console.log("You passed.");
    if (score >= 90) {
        console.log("You got an A grade!");
    } else {
        console.log("You got a B grade.");
    }
} else {
    console.log("You failed.");
}

// 4. CASCADED IF-ELSE STATEMENT

// SYNTAX : if (condition1) {
                // Code to execute if condition1 is true
            // } else if (condition2) {
                // Code to execute if condition2 is true
            // } else if (condition3) {
                // Code to execute if condition3 is true
            // } else {
                // Code to execute if none of the conditions are true
            // }

// EXAMPLE :
let grade = 'B';
if (grade === 'A') {
    console.log("Excellent!");
} else if (grade === 'B') {
    console.log("Good job!");
} else if (grade === 'C') {
    console.log("You can do better.");
} else {
    console.log("Needs improvement.");
}

// 5. SWITCH CASE STATEMENT

// SYNTAX : switch (expression) {
                // case value1:
                    // Code to execute if expression === value1
                    // break;
                // case value2:
                    // Code to execute if expression === value2
                    // break;
                // More cases...
                // default:
                    // Code to execute if none of the cases match
                // }

// EXAMPLE :
let dayOfWeek = 'Monday';
switch (dayOfWeek) {
    case 'Monday':
        console.log("It's the start of the week.");
        break;
    case 'Friday':
        console.log("Weekend is almost here!");
        break;
    default:
        console.log("It's a weekday.");
}

