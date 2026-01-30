
// JS OBJECTS

// They are collections of key-value pairs where each key is a string
// (or a symbol) and each value can be any data type, including other objects.

// EXAMPLE :

const student = {
    Sname : "Manpreet Kaur",
    Sroll : 2501010070,
    age : 20,
    dept : "SOET"
}

console.log(student)  // displaying the whole object 
 
console.log(student.Sname)  // displaying the value with key Sname in first way
console.log(student["age"])  // displaying the value with the key age in second way

console.log(student.Sroll)  // displaying the value with the key Sroll
console.log(student["dept"])  // displaying the value with the key dept

student.Sname = "Manpreet"  // modifying the value with key Sname
console.log(student.Sname)  // displaying the changes entity

console.log(student)   // displaying the object again

// here while creating the object i have used the "const" but still we are able
// to modify the inner entity as we are not modifying the whole object but only one or
// more inner entities not the whole object

