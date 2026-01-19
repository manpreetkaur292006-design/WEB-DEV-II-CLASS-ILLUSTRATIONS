// QUESTION - 1 :
// Reverse the array by using push and pop method
let arr=[1,2,3,4,5]
let rev=[]
while (arr.length>0){
    rev.push(arr.pop())
}
console.log(reverse)

// QUESTION - 2 :
// Remove all the negative numbers from an array
let array=[5,-7,12,-6,-13,15,2]
let posInt=[]
while (arr.length>0){
    let val=arr.shift();
    if (val>0){
        posInt.push(val);
    } 
}
console.log(posInt)

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

// QUESTION - 4 :
// remove duplicate elements from an array

// QUESTION - 5 :
// move all zeroes to the end of the array
