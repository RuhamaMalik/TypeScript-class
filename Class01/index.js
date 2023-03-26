/*
TypeScript is an open-source programming language developed and maintained by Microsoft.It is a
superset of JavaScript, which means that any valid JavaScript code is also valid TypeScript code.
TpeScript easier to catch type-related errors during development. This is done through the use of type annotations,
which allow developers to specify the types of variables,function parameters, and function return values.

In addition to static typing, TypeScript also includes many features that are not available in
JavaScript, such as interfaces, classes, and namespaces. These features can make it easier to write
and maintain complex applications.

TypeScript code is compiled into JavaScript code, which means that it can run on any browser or
platform that supports JavaScript. TypeScript is often used in large-scale web applications,
as well as in popular frameworks and libraries such as Angular, React, and Vue.js.

! ---- In TypeScript, the exclamation mark (!) is known as a non-null assertion operator. It is used to tell
the TypeScript compiler that a variable or property is not null or undefined,

HTMLInputElement ---- Here we are telling ts that this is an HTML input element.

tsc index.ts ---- This command compiles the TS code and converts it to JS code and creates a new js file.

*/
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var calculate = document.getElementById("calc");
var add = function (val1, val2) {
    return val1 + val2;
};
calculate.addEventListener("click", function () {
    var n1 = num1.value;
    var n2 = num2.value;
    alert(add(+n1, +n2));
});
// Bacic types of Ts
// 1. String: string => "apple" "banana"
// 2. Number: number => 0 10 5.1 -10
// 3. Boolean: boolean => true false
var language = "TypeScript";
language = "JavaScript";
console.log(language);
