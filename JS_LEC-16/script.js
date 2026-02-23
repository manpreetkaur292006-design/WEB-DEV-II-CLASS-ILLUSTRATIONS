
// EVENT LOOPS
// how js works behind the scene

console.log("first line")


setTimeout(()=>{
    console.log("inside timeout")
},0)


const p=new Promise((resolve,reject)=>{
    resolve()
})
p.then(()=>{
    console.log("inside promise")
})


const p2=new Promise((resolve,reject)=>{
    resolve()
})
p2.then(()=>{
    console.log("inside promise")
})


console.log("last line")


