

// ARRAY METHODS IN JS 


// 1. map(callback) :

 let numbers = [1, 2, 3];
 let doubled = numbers.map(x => x * 2);

// 2. filter(callback) :

 let scores = [85, 92, 78, 90, 88];
 let highScores = scores.filter(score => score >= 90);

// 3. reduce(callback) :

 let number = [1, 2, 3, 4, 5];
 let sum = number.reduce((acc, current) => acc + current, 0);

// 4. indexOf(element) :

 let fruits = ["apple", "banana", "cherry"];
 let index = fruits.indexOf("banana");

// 5. push(element) :

 let fruit = ["apple", "banana"];
 let newLength = fruit.push("cherry");

// 6. pop() :

 let fru = ["apple", "banana", "cherry"];
 let removed = fru.pop();

// 7. shift() :

 let fru1 = ["apple", "banana", "cherry"];
 let remove = fru1.shift();

// 8. unshift(element) :

 let fru2 = ["banana", "cherry"];
 let newLen = fru2.unshift("apple");

// 9. slice(start,end) :

 let num = [1, 2, 3, 4, 5];
 let sliced = num.slice(1, 4);

// 10. some(callback) :

 let numb = [1, 3, 5, 7, 9];
 let hasEven = numb.some(x => x % 2 === 0); 

// 11. every(callback) :

 let num1 = [2, 4, 6, 8, 10];
 let allEven = num1.every(x => x % 2 === 0);

// 12. concat(array) :

 let fruits1 = ["apple", "banana"];
 let fruits2 = ["cherry", "orange"];
 let combined = fruits1.concat(fruits2);

// 13. splice(start,deleteCount,item1,item2, ...) :

 let fruit1 = ["apple", "banana", "cherry"];
 fruit1.splice(1, 1, "orange", "grape");

// 14. reverse() :

 let numbers1 = [1, 2, 3, 4, 5];
 numbers1.reverse();

 // 15. includes() :

const array1 = [1, 2, 3];
console.log(array1.includes(2));
  
const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat'));
console.log(pets.includes('at'));