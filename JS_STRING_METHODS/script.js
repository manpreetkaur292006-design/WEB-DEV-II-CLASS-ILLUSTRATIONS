// HOMEWORK : LEARN ABOUT STRING METHODS

// 1. slice(start,end) : start (inclusive) and end (exclusive)
let str = "JavaScript is fun!";
let sliced = str.slice(0, 10);
console.log(sliced)

// 2. substring(start,end) : similar to silce but does not accept negative indexes
// start (inclusive) and end (exclusive)
let str1 = "JavaScript is amazing!";
let sub = str1.substring(11, 17);
console.log(str1)

// 3. indexOf() : retrun the first occurance of the specified substring
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
const indexOfFirst = paragraph.indexOf("dog");
console.log(indexOfFirst);

// 4. substr(start,length) : extracts a specified number of characters from a string
// start (inclusive) and length of the substring
let str2 = "OpenAI is innovative!";
let sub2 = str2.substr(8, 2); 
console.log(sub2)

// 5. replace(search,replacement) : replace the first occurance of the specified substring
let sentence = "I love JavaScript. JavaScript is powerful.";
let newSentence = sentence.replace("JavaScript", "Node.js");
console.log(newSentence)

// 6. replaceAll(search,replacement) : replace all the occurance of the specified substring
let sentence1 = "I love JavaScript. JavaScript is powerful.";
let newSentence1 = sentence1.replaceAll("JavaScript", "Node.js");
console.log(newSentence1)

// 7. toUpperCase() 
let name = "John Doe";
let upperCaseName = name.toUpperCase(); 
console.log(upperCaseName)

// 8. toLowerCase()
let lowerCaseName = name.toLowerCase();
console.log(lowerCaseName)

// 9. concat(string1,string2,...) : joining two or more strings
let firstName = "John";
let lastName = "Doe";
let fullName = firstName.concat(" ", lastName); 
console.log(fullName)

// 10. trim() : remove white space from both the ends
let sentence2 = "   This is a sentence with spaces.   ";
let trimmed = sentence2.trim();
console.log(trimmed)

// 11. charAt(index) : return the character at the specified index in a string
let word = "Hello";
let char = word.charAt(1); 
console.log(char)

// 12. charCodeAt(index) : return the unicode value of the character at the specified index
let charCode = word.charCodeAt(1);
console.log(charCode)

// 13. split(separator) : splits a string into an array of substrings based on a specified separator
let sentences = "I,am,a,comma,separated,sentence";
let words = sentences.split(","); 

// length attribute 
let message="Manpreet Kaur";
let len=message.length;
console.log(len)
// Escape character
let text="we are the so-called \"vikings\" from the north.";
console.log(text)
