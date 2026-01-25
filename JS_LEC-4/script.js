// QUESTION - 1 :
// Reverse the array by using push and pop method
let arr=[1,2,3,4,5]
let rev=[]
while (arr.length>0){
    rev.push(arr.pop())
}
console.log(rev) 
// Output : [5,4,3,2,1]

// QUESTION - 2 :
// Remove all the negative numbers from an array
let array=[5,-7,12,-6,-13,15,2]
let posInt=[]
while (array.length>0){
    let val=array.shift();
    if (val>0){
        posInt.push(val);
    } 
}
console.log(posInt)
// Output : [ 5, 12, 15, 2 ]

// QUESTION - 3 :
// check that array is pallindrome or not
function pallindrome(){
    let arr=[1,2,3,2,1]
    let original=[]
    let reverse=[]

    // push the given array elements into original array
    for (let i=0; i<arr.length; i++){
        original.push(arr[i])
    }

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

// HOMEWORK QUESTIONS

// QUESTION - 4 :
// remove duplicate elements from an array
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
// For example
const arrayWithDuplicates = [1, 2, 3, 2, 4, 3, 5, 'a', 'a'];
const uniqueArray = removeDuplicates(arrayWithDuplicates);
console.log(uniqueArray); // [1, 2, 3, 4, 5, 'a']

// QUESTION - 5 :
// move all zeroes to the end of the array
let array1 = [0,1,0,2,3,4,0];
let count = 0;  // Tracks non-zero position

// Move non-zeros to front
for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== 0) {
        array1[count++] = array1[i];
    }
}
// Fill rest places with zeros
while (count < array1.length) {
    array1[count++] = 0;
}

console.log(array1);  
// Output : [1,2,3,4,0,0,0]


// CLASS ILUUSTRATION : ON setTimeout()
setTimeout(()=>{
    console.log("Manpreet");
},1000)
// Output : Manpreet (after 1000 milli seconds)

// This function will print the name Manpreet after 1000 milliseconds on the console

// more examples :

for (let a=0; a<=3; a++){
    setTimeout(()=>{
        console.log(a);
    },2000)
}
// Output : 0
//          1
//          2
//          3  (after 2000 milli seconds)
