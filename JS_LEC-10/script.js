// DOM MODIFICATIONS

// 1. CREATE ELEMENT

// CRUD OPERATION WILL BE USED IN THE FIRST IN CLASS ASSIGNMENT

const newParagraph=document.createElement("p");  
// CREATING AN ELEMENT "P" I.E. "P TAG" IN THE HTML DOCUMENT

newParagraph.textContent="This is a dynamically created paragraph"
// WRITING THE PARAGRAPH TAG CONTENT CREATED EARLIER

console.log(newParagraph);
// PRINTING THE NEW PARAGRAPH CONTENT IN THE JS CONSOLE

const container=document.getElementById("container");
// ACCESING THE DIV CONTAINER BY ID THAT IS PRESENT IN THE HTML DOCUMENT

container.appendChild(newParagraph)
// APPEND THE NEW ELEMENT TO THE CONTAINER
// APPENDING ALL THE CHANGES MADE IN THIS FILE TO THE INDEX.HTML FILE

const reb=document.querySelector("#container p");
reb.remove();
// REMOVING AN ELEMENT FROM THE HTML DOCUMENT

//  SHORT-NOTATION OF WRITING THIS : document.querySelector("#container p").remove()


// ADDING AN IMAGE USING JS 
const image=document.createElement("img");  // CREATING AN ELEMENT IMG

image.setAttribute("src","krmu.jpg");  // ADDING AN ATTRIBUTE SRC TO IT

// WE CAN ALSO COPY PASTE THE LINK OF THE IMAGE TAKEN FROM THE BROWSER IF WE HAVE TO DO SO

image.setAttribute("alt","KRMU LOGO");  // ADDING AN ATTRICUTE ALT TO IT

const gallery=document.getElementById("gallery");  // ACCESSING AN ELEMENT GALLERY IN WHICH WE WANT TO ADD THE IMAGE TAG

gallery.appendChild(image); // APPENDING ALL THE CHANGES



// *** DATE METHOD ***


// we use new if we want to access the predefined thing like date


let date = new Date()
console.log(date);

setInterval(()=>{
let date = new Date()
console.log(date);

let hour = date.getHours();
let min=date.getMinutes();
let second= date.getSeconds();

let clock = document.getElementById("digi-clock");

clock.textContent=`${hour} : ${min} : ${second}`

},1000)

// see more date methods from the notes

// convert this clock to the 12 hour clock


let date2 = new Date()
console.log(date2);

setInterval(()=>{
let date2 = new Date()
console.log(date2);

let hour = date2.getHours();
let min=date2.getMinutes();
let second= date2.getSeconds();

let clock = document.getElementById("digi-clock");

if (hour>12){
    hour=hour-12
}

clock.textContent=`${hour} : ${min} : ${second}`

},1000)