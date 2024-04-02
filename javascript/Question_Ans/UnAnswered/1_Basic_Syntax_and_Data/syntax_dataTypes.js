// variable and data types available in JS

//Varaible declarations

//console.log("noDeclarationKey Before Declaration", noDeclarationKey); // ReferenceError: noDeclarationKey is not defined (Not hoisted)
console.log("var Before Declaration",a); // undefined (we can only access variable declared with var before declaration because of Hoisting in JS) (Hoisted)
//console.log("let Before Declaration",b); // ReferenceError: Cannot access 'b' before initialization/assignment (Partially Hoisted but in Temporal Dead Zone untill declaration)
//console.log("const Before Declaration",c); // ReferenceError: Cannot access 'c' before initialization/assignment (Partially Hoisted but in Temporal Dead Zone untill declaration)

// In our coding practice, it's feasible to declare a variable without utilizing any declaration keyword, such as var, let, or const. However, it's essential to note that unlike const, an assignment should also be executed simultaneously
noDeclarationKey = 10;
var a;
let b;
const c = 10; // at the time of declaration we should do assignment too or SyntaxError: Missing initializer in const declaration

console.log("noDeclarationKey After Declaration",noDeclarationKey); // 10
console.log("var After Declaration",a); // undefined
console.log("let After Declaration",b); // undefined
console.log("const After Declaration",c); // 10

