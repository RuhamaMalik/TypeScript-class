/* When we assign some value to a variable, TypeScript will assign a default type to that variable
according to its value type.

let person = {
    name: "Ruhama",
    rollNo: 10,
    hobbies: ["horse Riding", "Reading"]
}


*/
var persons = [];
var person = {
    name: "Ruhama",
    rollNo: 10,
    hobbies: ["horse Riding", "Reading"]
};
persons.push(person);
console.log(persons);
var person2 = {
    name: "Ruhama",
    rollNo: "10",
    hobbies: ["horse Riding", "Reading", 10]
};
var studentData = [];
studentData.push({
    name: "Ruhama",
    rollNo: 10,
    subjects: ["Maths", "English"],
    email: "abc@gmail.com"
});
studentData.push({
    name: "Gull",
    rollNo: 20,
    subjects: ["Maths", "English", "Science"],
    /* Here the email field is missing but ts doesn't complain because we have defined the type with
    the name Student in which the email field is optional.*/
});
console.log(studentData);
// let func: Function;
//Here function type is function which means any type of function can be passed in it we have to define function type which type of function we want to pass.
/*In TypeScript, you can define the type of a function using a combination of parameter types and
 return type. This is known as a function type.

 Here's the basic syntax for defining a function type:

(parameter1: type1, parameter2: type2, ...) => returnType

This syntax describes the function's parameters and return type. For example, the following function
type defines a function that takes two numbers as parameters and returns a number:

(type1: number, type2: number) => number

*/
var sum = function (val1, val2) {
    return val1 + val2;
};
var func;
func = sum;
/*A callback function is a function that is passed as an argument to another function and is called b
y that function at a later time. The main purpose of a callback function is to allow you to execute
 some code after a particular task has been completed, typically an asynchronous task like making an
  API request or reading a file.

In JavaScript and TypeScript, callback functions are commonly used in event-driven programming and in
functions that operate asynchronously, such as setTimeout, setInterval, and fetch. */
var add = function (val1, val2, cb) {
    cb("Hello");
    return val1 + val2;
};
var calc;
calc = add;
var addNum = function (val1, val2, calc) {
    if (calc === "add") {
        return val1 + val2;
    }
    else if (calc === "sub") {
        return val1 - val2;
    }
};
console.log(addNum(10, 5, "sub"));
