// source-map : true --> ye browser mAi hi TS k code debbug karne ki ijazat de deta hai.
/* 
Tuples  ---- > fixed length array with multiple types
let tuple: [number,string] = [1,"value"];
We can't add new values ​​to tuples --> tuple[2] = "this gives error"
But if we use the .push method, the value will be added to the tuple, this problem was identified when ts was being widely used.
,so this is an important change because programs running in ts may stop if this issue is fixed.
So currently the solution to this problem is not acceptable, but may change in the future.
*/

let gender: [string, string] = ["male", "female"];
gender.push("It will join successfully");

let admin: [number, string] = [1, "admin"];
let error: [number, string] = [404, "Not Found"];

// Class 

/* In object-oriented programming, a class is a blueprint or a template for creating objects that 
share common properties and behaviors. A class defines a set of attributes (also known as properties
     or fields) and methods (functions) that can be used to create objects of that class.

When you create an instance of a class, you are creating an object that inherits the properties 
and methods defined in the class. Each instance of a class has its own set of values for
 its properties, but all instances share the same set of methods. 
 
 e.g class is like die and object is like plate
 
    //  The constructor method is used to initialize the values of the properties when a new 
    //  instance of the class is created.



 */

class Student {
    name: string;
    rollNo: number;
    constructor(n: string, r: number) {
        this.name = n;
        this.rollNo = r;
    }
}

const student1 = new Student("Ruhama", 10);
const student2 = new Student("Irma", 11);
const student3 = new Student("Fahad", 12);

console.log(student1, student2, student3);

/*
Access modifiers are keywords in object-oriented programming that define the level of access that a
 class member (i.e., a property or a method) has from outside the class. There are three access
  modifiers in TypeScript:

public: A public member can be accessed from anywhere, both inside and outside the class.
 This is the default access modifier for class members in TypeScript.

private: A private member can only be accessed from within the class. It cannot be accessed from
 outside the class or from derived classes.

protected: A protected member can be accessed from within the class and from derived classes. 
It cannot be accessed from outside the class.
*/

class Person {
    public name: string;
    private age: number;
    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }
}
const person1 = new Person("Ruhama", 10);

console.log(person1);
console.log(person1.name);
// console.log(person1.age); //return error because age is private

// Shorthand method to define the above class.
// class Person{
//     constructor( public name: string, private age: number) {
//     }
// }


class Car {

    constructor(public name: string, public model: string, public price: number) {

    }
}
const car1 = new Car("BMW", "ix", 1735000);
console.log(car1)
