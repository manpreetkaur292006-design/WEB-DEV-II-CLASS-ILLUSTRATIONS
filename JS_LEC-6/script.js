// learn how the string method slice and substring give in case of negative indexing
// negative me agar (-4,22) hai toh -4 ke aage ke jitne bhi index hai unhe access kar sakte hai
// per agar -4 ke peeche ka index like -5,-6 le toh kuch bhi print nahi hoga 
// example for the string : javascript is amazing!

// class questions

// task-1 : find out the occurance of "r" in the given string

// method -1 : my approach of writing the code 

let str="tu mera me tera me tera tu meri"
let word=str.split("r")
let len=word.length-1 // it will give the number of elements of the in the list which will be one more than number of r
// means split se r ke jagah per comma aa jayega isleye lenght-1 kara hai
console.log(word)
console.log(len)

// method -2 : writing the same code logic in a single line 

let str1 = "tu meri me tera me tera tu meri"
let splitstr= str1.split("r").length-1;
console.log(splitstr)
