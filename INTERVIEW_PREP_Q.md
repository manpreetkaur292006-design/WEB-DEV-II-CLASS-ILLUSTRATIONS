# INTERVIEW PREPARATION QUESTIONS

## PRACTICE CODE AND EXPLANATION BOTH

 1. what is the difference between var,let and const ?

 2. Explain the different types of operators in JavaScript.
Examples:
* Arithmetic Operators
* Assignment Operators
* Comparison Operators
* Logical Operators
* Bitwise Operators
* Ternary Operator
* Type Operators

 3. What is the difference between == and ===?

 4. What is Hoisting and TDZ (Temporal Dead Zone)?
 
 5. Explain different Array methods in JavaScript.
**Important comparisons:**
* map() vs filter() vs reduce()
* map() vs forEach()
* find() vs filter()
* some() vs every()

 6. Explain String methods and Object methods in JavaScript.

 7. Types of Functions in JavaScript
* Regular Function
* Arrow Function
* First-Class Function
* Higher-Order Function
* Callback Function
* Self-Invoking Function (IIFE – Immediately Invoked Function Expression)
* Anonymous Function


**2nd Sem Onwards:**


 8. What is the difference between setTimeout() and setInterval()?    

 9. What is the difference between DOM and HTML?What are the uses of the DOM?

 10. What is the difference between:
* textContent
* innerHTML
* innerText

 11. what is DOM ?
 
 12. What is the difference between:
* getElementById()
* getElementsByClassName()
* query selector and querySelectorAll

 13. Explain :
     -Callback
     -promise
     -callback hell
     -promises hell
     -promises chaining
     -async and await
     -event loop

 14. Form Validation using Dom:
    * onclick
    * onchange
    * onsubmit  

 15. DOM traversal methods 

 16. Explain Event Handling in JavaScript
* addEventListener() with implementation

 17. Explain Execution Context and Call Stack.How does JavaScript code execute? (these are for sync running of code)

 18. Explain the Event Loop and how asynchronous code executes in the execution context.

 19. What is Callback Hell? Explain its disadvantages.


 20.  Explain the Lifecycle of a Promise.

    Answer flow:
    1. Start with Callback Hell problem
    2. Define Promise
    3. Explain Promise states
        * Pending
        * Fulfilled
        * Rejected
    4. Promise consumers:
        * .then()
        * .catch()
        * .finally()
    5. Implementation example 
    ( + how it manages async functions better than callback hell ? )

 21. What is Promise Chaining and its disadvantages?

 22. what is nullish coalescing operator ?

 23. Create element, append element, remove element using DOM.
 
 24. Explain Async and Await.Why is it more efficient and readable than Promise chaining?

**Guess the Output and Explain the Reason in Details (Concepts to cover:callstack, event loop, micro task and macro task queue)**
  

25. console.log("A");

setTimeout(() => {
  console.log("B");
}, 1000);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");



22. console.log("1");

Promise.resolve().then(() => {
  console.log("2");
});

Promise.resolve().then(() => {
  console.log("3");
});

console.log("4");



23. setTimeout(() => {
  console.log("Timeout 1");

  Promise.resolve().then(() => {
    console.log("Promise inside Timeout");
  });

}, 0);

Promise.resolve().then(() => {
  console.log("Promise 1");
});



24. console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => {
  console.log("3");
  Promise.resolve().then(() => {
    console.log("4");
  });
});

console.log("5");



25. console.log("A");

new Promise((resolve) => {
  console.log("B");
  resolve();
  console.log("C");
}).then(() => {
  console.log("D");
});

console.log("E");