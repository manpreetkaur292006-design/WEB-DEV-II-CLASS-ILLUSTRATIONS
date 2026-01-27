// OBJECT METHODS IN JS

// DOM - DOCUMENT OBJECT MODEL

// WHAT ARE API'S ?

// JSON NOTATION - JAVA SCRIPT OBJECT NOTATION IN THE FORM OF KEY AND VALUE PAIRS

// TYPE OF ARRAY IS OBJECT.

// OBJECT - 
let user={
    name:"Manpreet Kaur",
    address: "Delhi",
    mobile:8665595956,
    color:["Black",'blue',"green"],
    demo: function(){     // we can also add function in the object also

        return "Demo"
    }
}  // output on the console will be "Object"
console.log(user) // accessing the whole object
console.log(user.name) // excessing the name
console.log(user.mobile) // excessing the mobile number
console.log(user.color)

console.log("my name is " + user.name +". My favorate color is " + user.color[1]) // method -1
// method -2 : string literal method
console.log(`my name is ${user.name} . My favorate color is ${user.color[1]}`)

console.log(user.demo)  // this will print the function as it is
console.log(user.demo())  // this will print the value of the function "Demo"

// WHY DO WE USE OBJECTS ?
// 1. TO GROUP RELATED DATAS
// 2. TO REPRESENT REAL WORLD THINGS
// 3. KEEP CODE CLEAN
// 4. AVOID USING TOO MANY SEPARATE VARIABLES
// 5. TO MAKE WORKING WITH DATA EASIER ....


// OBJECT METHODS :