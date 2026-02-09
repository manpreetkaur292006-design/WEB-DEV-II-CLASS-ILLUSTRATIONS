
// HANDLING THE EVENTS IN JS

// LIKE CLICKING THE MOUSE AND TYPING SOMETHING IN ALSO AN EVENT

// SEE EVENT HANDLERS FROM THE NOTES

// function handleClick(){
//     document.getElementById("btn").textContent="Clicked"
//     // we can change the color of the button
//     // by using 
//     document.getElementById("btn").style.color="Red"
//     // we can also declare a variable to document.getElementById("btn")
//     //  and then can easily access it by the variable name
//     document.getElementById("btn").style.backgroundColor="lime"
//     // changing its background color also
// }


// Question
// when user click on the button the color of the heading tag will
// change to tomato and text will change to new heading

// Answer:

// function handleClick(){
//     let b=document.getElementById("heading")
//     b.style.color="tomato"
//     b.textContent="New Heading"
// }

// see another method from sir's repo

// Question
// when the user click on the button one span tag and image tag will
// render below to the button

// function handleClick(){
//    const spanEle = document.createElement("span").textContent="This is a span element"
//    const image = document.createElement("img")
//    image.setAttribute("src","./krmu1.jpg")
//    image.setAttribute("alt","KRMU")
//    const cont=document.getElementById("content");
//    cont.append(spanEle)
//    cont.append(image)
// }

// another method add event listenener - in dom

// addEventListener("Event type",()=>) 
    // this will take the two parameters after tageting the element
// on click ke jagah yahan sirf click likenge
// see example from sir's repo

document.getElementById("btn").addEventListener("click",()=>{
    const spanEle = document.createElement("span").textContent="This is a span element"
   const image = document.createElement("img")
   image.setAttribute("src","./krmu1.jpg")
   image.setAttribute("alt","KRMU")
   const cont=document.getElementById("content");
   cont.append(spanEle)
   cont.append(image)
})
// do same work as the handleclick function that i have created above

// iske liye jo onclick attribute html me likha hai use hata dena hia'

