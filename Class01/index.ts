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

const num1 = document.getElementById("num1")! as HTMLInputElement;
const num2 = document.getElementById("num2")! as HTMLInputElement;
const calculate = document.getElementById("calc")!;

const add = function (val1: number, val2: number) {
    return val1 + val2;
}

calculate.addEventListener("click", function () {
    const n1 = num1.value;
    const n2 = num2.value;
    alert(add(+n1, +n2));
})

// Bacic types of Ts

// 1. String: string => "apple" "banana"
// 2. Number: number => 0 10 5.1 -10
// 3. Boolean: boolean => true false
// 4. null and undefined: represent absence of a value.
// 5. any: represents any value or type, and is often used when the type of a variable or parameter is not known or is expected to change frequently.
// 6. void: represents the absence of a value, often used as a return type for functions that do not return anything.

let language = "TypeScript";
// language = 99;  //error //Ts consider the default value string of language
language = "JavaScript";
console.log(language);


const arr: string[] = ["apple", "banana"];
arr.push("mango");
// arr.push(100);
// arr.push(true);  // Both give error because we specified that the array type is string, so we can only add strings to it.


const arr2: number[] = [10, 20];
arr2.push(30);
// arr2.push("one"); //error











