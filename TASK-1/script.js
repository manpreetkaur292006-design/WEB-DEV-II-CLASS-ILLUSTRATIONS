// interview prep questions 

// 1.difference btw var,let, and const
// 2.explain different types of js operators
// 3.difference btw == and ===
// 4.what is hoisting and TDZ.
// 5.explain different array methods in Js
//     -map vs filter vs reduce
//     -find and filter
//     -map and foreach
//     -some and every
// 6.string, object methods.
// 7.types of function
//     -regular function
//     -arrow function
//     -fast class function
//     -higher order function
//     -callback function
//     -anonymous function
//     -self invoking function (IIFE)
// 8. difference between spread operator and rest parameter    
// 9. what is nullish coalescing operator
// 10. difference between setInterval and setTimeout.
// 11. what is DOM
// 12. diff between getelementbyid and getelementbyclassname
// 13. 


// TASK-1 : PROFILE SECTION STYLING

const section=document.getElementById("profile");
section.style.backgroundColor="yellow"
section.style.padding= "15px"
section.style.textAlign="center"

// TASK-2 :

const t2=document.getElementsByClassName("demo")

for (let i=0;i<t2.length;i++){
    t2[i].style.color="red";
    t2[i].style.fontSize="40px";
}
console.log(t2)
console.log(t2.length)
// change the color of even and odd indexed paragraph differently

// TASK-3:

const t3=document.querySelector("#content P")  // decendent selctor by usinfg
t3.style.backgroundColor="orange"

// can also use the querselctor all and then run the loop to make changes

// see sir github code

const content=document.getElementById("content");
const t33=content.querySelectorAll("p");
for (let i=0; i<t33.length;i++){
    t33[i].style.backgroundColor="cyan"
}
