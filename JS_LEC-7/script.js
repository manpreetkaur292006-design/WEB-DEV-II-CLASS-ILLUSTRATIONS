// OBJECT METHODS IN JS

// DOM - DOCUMENT OBJECT MODEL

// WHAT ARE API'S ?

// JSON NOTATION - JAVA SCRIPT OBJECT NOTATION IN THE FORM OF KEY AND VALUE PAIRS

// OBJECT - 
let user={
    name:"Manpreet Kaur",
    address: "Delhi",
    mobile:8665595956,
    color:["Black",'blue',"green"]
}  // output on the console will be "Object"
console.log(user) // accessing the whole object
console.log(user.name) // excessing the name
console.log(user.mobile) // excessing the mobile number
console.log(user.color)

console.log("my name is " + user.name +". My favorate color is " + user.color[1]) // method -1
// method -2 : string literal method
console.log(`my name is  ${user.name} . My favorate color is ${user.color[1]}`)
