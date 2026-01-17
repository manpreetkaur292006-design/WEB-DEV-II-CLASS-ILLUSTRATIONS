console.log(window);   
// OUTPUT : Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}
// EXPLAINATION :

console.log(1+"1");
// OUTPUT : 11
// EXPLAINATION :

console.log(1-"1");
// OUTPUT : 0
// EXPLAINATION :

console.log("1"-1);
// OUTPUT : 0
// EXPLAINATION :

console.log("5"*"2");
// OUTPUT : 10
// EXPLAINATION :

console.log(true+true);
// OUTPUT : 2
// EXPLAINATION :

console.log(true-false);
// OUTPUT : 1
// EXPLAINATION :

console.log(!!false);
// OUTPUT : false
// EXPLAINATION :

console.log(!!"false");
// OUTPUT : true
// EXPLAINATION :

console.log(!![]);
// OUTPUT : true
// EXPLAINATION :

console.log(![]);
// OUTPUT : false
// EXPLAINATION :

console.log([]+[]);
// OUTPUT : nothing will print empty space will be displayed
// EXPLAINATION :

console.log([1,2]+[3,4]);
// OUTPUT : 1,23,4
// EXPLAINATION :

console.log([]+{});
// OUTPUT : [object Object]
// EXPLAINATION :

console.log(0.1+0.2==0.3);
// OUTPUT : false
// EXPLAINATION :

console.log(0.1+0.2===0.3);
// OUTPUT : false
// EXPLAINATION :

console.log([2]==[2]);
// OUTPUT : false
// EXPLAINATION :

// console.log([2]===[2]);
// OUTPUT : false
// EXPLAINATION :