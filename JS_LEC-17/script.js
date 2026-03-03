
// JS-LEC-17

// JS REVISION LECTURE OF UNIT-2

// callback function is async and multiple callbacks form callback hell
// to tackle with that we use promises that will work as an constructor
// deep knowledge of constructor in c++ and js
// to initialize this we use new keyword - to initialize the object constructor


// three states of promises : pending ,fulfilled , rejected **Important**

// promise consumers : 1. .then method - when the promise is resolved it will go to the .then method
// 2. .catch method - when the promise is rejected it will go into .catch method
let pro=new Promise((resolve,reject)=>{  // simple structure of promise
    let a=10;
    if (a>5){  // if a>50
        resolve()
    }else{
        reject()
    }
})
pro
.then(()=>console.log("promise resolved")) // resolved promise ko handle karega
.catch((err)=>console.error(err, "promise rejected")) // error handling


// function implementation
function pro1(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res()
        },1000);
    })
}
pro1()  // if we console this then we will get promise{'pending'} that is inside it
.then(()=>console.log("resolved"))

// .then(()=>console.log("1"))
// .then(()=>console.log("2"))
// .then(()=>console.log("3"))
// .then(()=>console.log("4"))

// ALL THESE WILL GET PRINTED HERE if we do like this
// after one second at one go

function pro2(num){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            console.log(num)
            res()
        },1000);
    })
}
pro2(1).then(()=>pro2(2))
.then(()=>pro2(3))
.then(()=>pro2(4))
.catch(()=>console.log("error"))

// this will print the numbers with the interval of one second
// this is an example of promise chaining.

// Promise chaining: when we uaw multiple .then methods to achieve
// the task or result.

// In callback hell we did the same task but the code is hard to debug 
// and structure is not good.

// Disadvantages : to perform certain task we need to call a callback function 
// multiple times. more functions for smaller task means more complexity and time for 
// execution and function call will be more.  that is why async aur await aya.

// function means to perform a certain part to run particular blocks

// using for loop for this

let prores=Promise.resolve();
for (let i=1; i<=5; i++){
    prores=prores.then(()=>pro2(i))
}
// go to inspect and sources and script to check the flow of all these codes


