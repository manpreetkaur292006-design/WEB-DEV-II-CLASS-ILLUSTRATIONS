
// JS-LEC-17

// callback function is async and multiple callbacks form callback hell
// to tackle with that we use promises that will work as an consuctor
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


