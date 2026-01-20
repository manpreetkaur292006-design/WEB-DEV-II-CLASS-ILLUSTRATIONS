// spread opertaor is the other way to concatenate the two arrays
// spread operator expands the array and strings and gives the access of individual element

fruit1=["apple","Mango"]
fruit2=["Orange","papaya"]
console.log(fruit1.concat(fruit2))  // using concat 
console.log([...fruit1,...fruit2]) // using the spread operator

// QUESTION - 3 :
// check that array is pallindrome or not
function pallindrome(){
    let arr=[1,2,3,2,1]
    let original=[...arr] // cloning the arr to the original matlab poora array original me transfer ho jayega
    let reverse=[]

    // // push the given array elements into original array
    // for (let i=0; i<arr.length; i++){
    //     original.push(arr[i])
    // }

    // reverse the given array
    while (arr.length>0){
        reverse.push(arr.pop())
    }

    // checking elements of the array
    for (let i=0; i<original.length; i++){
        if (original[i]!==reverse[i]){
            return "Not Pallindrome"
        }
    }
    return "Pallindrome"
}
console.log(pallindrome())
// Output : Pallindrome

// ternary operator (conditional operator)
// syntax :- condition ? true : false
let age = 18;
let canvote=age>=18?"you can vote":"you can't vote"
console.log(canvote)

// question : find that the number is even or odd
let num=234;
let evo=num%2===0?"Even":"odd"
console.log(evo)

// question : check a year is leap year or not
let year=2026;
let leap=(year%4===0 && year%100!==0) || (year%400===0) ?"leap":"not leap"
console.log(leap)

// array method - reverse()
// and includes() - used in api and credential checking 

// string methods
// homework - practise the string methods and push in the repo

// types of functions {continue}

// first class function

// first point sample
const demo=function(){

}

const demo1=()=>{

}

// second point sample 
// see callback function example

// third point sample
function sample(){
    console.log("sample")  // we can console here
    return function demo2(){
        console.log("demo")
    }
    // console.log("sanple") - we can console here as return ke baad function terminates
}
// sample()() - we can call the inner function like this also

var value=sample();
value() // aisa same arrow function me bhi hota hai jahan value variable ko call kara ha raha hai

function sample1(){
    console.log("sample")  // we can console here
    return function demo3(){
        console.log("demo")
        return function test(){
            console.log("Test")
        }
    }
}

// sample()()() - or we can also do this

var value1=sample()
let value2=value()
value2();


// anonymous function
// example - settimeout and setinterval and date method
 
// syntax - setTimeout(callback,delay)
setTimeout(()=>{
    console.log("Manpreet");
},5000)

setInterval(()=>{
    console.log("Manpreet");
},5000)


// self invoking functions
(function (){
    console.log("This is an IIFE")
})();
