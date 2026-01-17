console.log(window);   
// OUTPUT : Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}

console.log(1+"1");
// OUTPUT : 11

console.log(1-"1");
// OUTPUT : 0

console.log("1"-1);
// OUTPUT : 0

console.log("5"*"2");
// OUTPUT : 10

console.log(true+true);
// OUTPUT : 2

console.log(true-false);
// OUTPUT : 1

console.log(!!false);
// OUTPUT : false

console.log(!!"false");
// OUTPUT : true

console.log(!![]);
// OUTPUT : true

console.log(![]);
// OUTPUT : false

console.log([]+[]);
// OUTPUT : nothing will print empty space will be displayed

console.log([1,2]+[3,4]);
// OUTPUT : 1,23,4

console.log([]+{});
// OUTPUT : [object Object]

console.log(0.1+0.2==0.3);
// OUTPUT : false

console.log(0.1+0.2===0.3);
// OUTPUT : false

console.log([2]==[2]);
// OUTPUT : false

// console.log([2]===[2]);
// OUTPUT : false