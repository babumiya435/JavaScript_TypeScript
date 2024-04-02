console.log("'Javascript File Basics'");

let num1 = 100;   
let str1 = "Test";  
const PI1 = 3.14;  
// let num:number = 10; // providing implicit types to the variables is not possible in JS
// let str:string = "Test"; // providing implicit types to the variables is not possible in JS
// const PI = 3.14;

console.log(num1, typeof(num1));
console.log(str1, typeof(str1));
console.log(PI1, typeof(PI1));

global.greet = function(name) {
    console.log(`Hello, ${name}!`);
}

greet("JS Module outside"); // using global(nodejs)/window(browser/client/htmlDOM) object will always execute if its outside (fired or exported).
// module.exports = {str1};

if (require.main === module) {
    console.log("Execute JS exporting Module");
    greet("JS Module inside"); // using global(nodejs)/window(browser/client/htmlDOM) object will only execute if this module is fired.
}
