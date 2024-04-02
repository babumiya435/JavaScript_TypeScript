// variable and data types available in JS

//Varaible declarations

//console.log("noDeclarationKey Before Declaration", noDeclarationKey); // ReferenceError: noDeclarationKey is not defined (Not hoisted)
//console.log("var Before Declaration",a); // undefined (we can only access variable declared with var before declaration because of Hoisting in JS) (Hoisted)
//console.log("let Before Declaration",b); // ReferenceError: Cannot access 'b' before initialization/assignment (Partially Hoisted but in Temporal Dead Zone untill declaration)
//console.log("const Before Declaration",c); // ReferenceError: Cannot access 'c' before initialization/assignment (Partially Hoisted but in Temporal Dead Zone untill declaration)

// In our coding practice, it's feasible to declare a variable without utilizing any declaration keyword, such as var, let, or const. However, it's essential to note that unlike const, an assignment should also be executed simultaneously
noDeclarationKey = 10;
var a;
let b;
const c = 10; // at the time of declaration we should do assignment too or SyntaxError: Missing initializer in const declaration

//console.log("noDeclarationKey After Declaration",noDeclarationKey); // 10
//console.log("let After Declaration",b); // undefined
//console.log("const After Declaration",c); // 10
//console.log("var After Declaration",a); // undefined

// ----------------- variable with no declaration keyword (global scope) ----------------------
// console.log("before function declaration ",greet("Babu Miya Mohammad"));
// console.log("before function declaration - myGreetingMessage",myGreetingMessage);
// function greet(name){
//     myGreetingMessage = "Hello "
//     return `${myGreetingMessage}  ${name} :)`;
// }
// console.log("after function declaration ",greet("Babu Miya Mohammad"));
// console.log("after function declaration - myGreetingMessage",myGreetingMessage);

// ----------------- variable with var declaration keyword (functioanal Scope) ----------------------
// console.log("before function declaration ",greet1("Babu Miya Mohammad"));
//console.log("before function declaration - myGreetingMessage",message); //ReferenceError: message is not defined as var is functional scoped hence we dont have its existance
// function greet1(name){
//     if (name) {
//         var message = "Hello "
//     }
//     return name ? `${message}  ${name} :)` : "default";
// }
// console.log("after function declaration ",greet1("Babu Miya Mohammad"));
//console.log("after function declaration - myGreetingMessage",message);  //ReferenceError: message is not defined as var is functional scoped hence we dont have its existance

// ----------------- variable with let declaration keyword (block Scope) ----------------------

console.log("before let declaration :",statusValue); // ReferenceError: Cannot access 'statusValue' before initialization
//console.log("before const declaration :",PI); // ReferenceError: Cannot access 'PI' before initialization
let statusValue;
const PI = 3.14;
console.log("after let declaration :",statusValue); // after let declaration : undefined - able to access the variable decared with let and its value would be hoisted to undefined
statusValue = "'Pending'";
console.log("after let initialization/assignment :",statusValue); // after let initialization/assignment : 'Pending'
console.log("after const declaration :",PI); // after const declaration : 3.14
