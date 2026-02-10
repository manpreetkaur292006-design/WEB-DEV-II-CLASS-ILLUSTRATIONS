

// const textInput=document.getElementById("myInput");
// textInput.addEventListener("change",(event)=>{
//     event.preventDefault()
//     console.log(event.target.id)
//     console.log(event.target)
//     console.log(event.target.value)
// // HERE EVENT IS TARGETTING THE ENTIRE ELEMENT OBJECT NODE AND 
// // event.target IS TARGETTING IN PARTICULAR ELEMENT.
// })

const form=document.getElementById("formInput")
const textInp=document.getElementById("myInput")
const courseInput=document.getElementById("course")
const output=document.getElementById("output")

form.addEventListener("submit",(event)=>{
    event.preventDefault()
    // to get the user input value
    const name=textInp.value
    const course=courseInput.value
    console.log(name);
    // put the name and course value inside the output box
    output.innerText=name+" "+course
})