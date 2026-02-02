
// DOM TRAVERSAL METHOD

// 1. GET ELEMENT BY ID :
const heading=document.getElementById("heading");  // we have written the document in front of the method because it means the whole html document
console.log(heading);
heading.style.color="tomato";
heading.style.backgroundColor="yellow"
console.log(heading.textContent)   // we can get and change the existing text
heading.textContent="Hello india !"   // changing the text
// baar baar refresh katne se pehle hello world render hoga and then hello india print hoga as we have made changes by using dom
// due to this bhaut zyada changes karne se code slow ho jayega 

// 2. GET ELEMENT BY CLASS:
const para=document.getElementsByClassName("para")
// para.style.backgroundColor="cyan";   // isse background color change nahi hoga
// yahan per array ka concept ayega
// array ke andar ka access karne ke liye we use for loop
console.log(para)
for (let i=0; i<para.length; i++){
    para[i].style.backgroundColor="cyan"; 
}

// to access a particular para change the index
// like para[1].style.backgroundColor="cyan" inside the for loop instead of the above line

// 3. quesry selector

const qs = document.querySelector("#content p")  // ek particular taget element return karega
// iske liye querslector all 
console.log(qs)
qs.textContent="this si mmy sndfkjhs"
