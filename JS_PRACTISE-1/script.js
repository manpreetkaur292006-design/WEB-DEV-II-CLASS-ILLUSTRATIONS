
// JS ARRAYS REALTED QUESTIONS :-


// 1. DISPLAY THE ARRAY ELEMENTS
let arr1=[1,2,3,4,5,6];
for (let i=0; i<arr1.length ;i++){
    console.log(arr1[i]);
}


// 2. FIND OUT ALL THE EVEN NUMBERS FROM AN ARRAY
for (let j=0; j<arr1.length; j++){
    if (arr1[j]%2==0){
        console.log(arr1[j]);
    }
}

// 3. ADD 3 TO EACH ELEMENT IN AN ARRAY
let arr2=[2,3,41,53,56,11,12,9];
for (let k=0; k<arr2.length; k++){
    arr2[k]=arr2[k]+3;
    console.log(arr2[k]);
}

// 4. FIND OUT THE MAXIMUM ELEMENT IN AN ARRAY
let arr3=[1,23,43,12,190,12,9];
let max=arr3[0];
for (let p=0; p<arr3.length; p++){
    if (arr3[p]>max){
        max=arr3[p];
    }
}
console.log(max);

// 5. SORT THE NUMBERS IN AN ARRAY
let arr4 = [2, 3, 4, 5, 1, 6];
for (let m = 0; m < arr4.length - 1; m++) {
    for (let n = 0; n < arr4.length - m - 1; n++) {
        if (arr4[n] > arr4[n + 1]) {
            let temp = arr4[n];
            arr4[n] = arr4[n + 1];
            arr4[n + 1] = temp;
        }
    }
}
console.log(arr4);  // BY BUBBLE SORT

// 6. REVERSE THE NUMBERS IN AN ARRAY
let arr5=[2,3,1,4,64,23,0];
let s=0;
let e=arr5.length-1;
while(s<e){
    let temp = arr5[s];
    arr5[s]=arr5[e];
    arr5[e]=temp;
    s++;
    e--;
}
console.log(arr5);



