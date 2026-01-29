
// JUMP STATEMENTS OR CONTROL FLOW STATEMENTS IN JS


// 1. BREAK :


//  The break statement is used to exit a loop prematurely
//  when a certain condition is met. It is commonly used to 
//  terminate a loop early, preventing further iterations.

// EXAMPLE :

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;     // Exit the loop when i equals 5
    }
    console.log(i);
}

// OUTPUT :
         // 1
         // 2
         // 3
         // 4



// 2. CONTINUE :


//  The continue statement is used to skip the current iteration of
//  a loop and proceed to the next iteration. It allows you to skip
//  over specific values or conditions without terminating the loop entirely.

// EXAMPLE :

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue; // Skip iteration when i equals 3
    }
    console.log(i);
}

// OUTPUT :
          // 1
          // 2
          // 4
          // 5