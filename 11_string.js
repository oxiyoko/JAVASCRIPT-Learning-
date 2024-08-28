// we can use "hello" or 'hello'  no difference in javascript string

const name = "oxiyoko";
const repoCount =   50;
console.log(name + repoCount + " value")
// in modern days mostly we dont use these kind of string concatination


console.log(`hello my name is ${name} and my age is ${repoCount}` );
// this is more readable and comparitably better and modern way
// And its called """"""String interpolation""""""""

const gameName = new String('oxiyoko')
// we can also declare in this way 
// but its actually object 
console.log(typeof name);     // --> string
console.log(typeof gameName) // --> object

console.log(gameName[1]);
console.log(name[1])

console.log(gameName.__proto__)
console.log(gameName.toUpperCase());
console.log(gameName.length)
console.log(gameName.charAt('2'));
console.log(gameName.indexOf('x'))

const newString = gameName.substring(0, 4);
console.log(newString);
// 4th index is not included in  this

const anotherName = gameName.slice(0, 4);
console.log(anotherName)

const newStringOne = "   oxiyoko   ";
// this kind of string we can see commonly like in input form user deliberatly or unknowingly put extra space or character
console.log(newStringOne);
console.log(newStringOne.trim())
 
// *** read trim mdn doc


const url = "https://oxiyoko.com/index,html";
url.replace('index', 'aneeja');
console.log(url);


console.log(url.includes('oxiyoko'))

console.log(url.includes('hooi'))

console.log(gameName.split);

// practice strings as much as
