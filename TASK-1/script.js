


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

// const t3=document.querySelector("#content P");  // decendent selctor by usinfg
// t3.style.backgroundColor="orange"

// can also use the querselctor all and then run the loop to make changes

// see sir github code

const content=document.getElementById("profile1");
const t33=content.querySelectorAll("p");
for (let i=0; i<t33.length;i++){
    t33[i].style.backgroundColor="cyan"
}
