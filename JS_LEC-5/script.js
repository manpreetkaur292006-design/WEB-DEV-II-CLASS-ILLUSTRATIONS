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

