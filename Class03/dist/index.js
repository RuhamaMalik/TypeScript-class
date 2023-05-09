"use strict";
// source-map : true --> ye browser mAi hi TS k code debbug karne ki ijazat de deta hai.
/*
Tuples  ---- > fixed length array with multiple types
let tuple: [number,string] = [1,"value"];
We can't add new values ​​to tuples --> tuple[2] = "this gives error"
But if we use the .push method, the value will be added to the tuple, this problem was identified when ts was being widely used.
,so this is an important change because programs running in ts may stop if this issue is fixed.
So currently the solution to this problem is not acceptable, but may change in the future.
*/
let gender = ["male", "female"];
gender.push("It will join successfully");
let admin = [1, "admin"];
let error = [404, "Not Found"];
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
    constructor(n, r) {
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
    constructor(n, a) {
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
    constructor(name, model, price) {
        this.name = name;
        this.model = model;
        this.price = price;
    }
}
const car1 = new Car("BMW", "ix", 1735000);
console.log(car1);
// koi aisi value jo class ko initialize karte waqt oosko nahi milegi but object mai hogi 
// jise ham baad mai object mai add karwa sakengy... e.g skills
class Employe {
    constructor(name, post, id) {
        this.name = name;
        this.post = post;
        this.id = id;
        this.skills = [];
    }
}
const employ1 = new Employe("Ruhama", "worker", 1);
const employ2 = new Employe("Gull", "worker", 2);
//console.log(employ1);//Here we have not added the skill but it is still present in the employ2 object.
employ1.skills.push("team management");
console.log(employ1); //skills add successfuly
employ1.skills.length = 0; // Or 
employ1.skills = [];
/*If we write any of the above 2 lines then the skill array values ​​will be reassigned
 and it will be empty which is not true .So we can use the private access modifier
 with the skill array so that no one can access it from outside the class.*/
//  class Teacher {
//     private skills: string[] = [];
//     constructor(public name: string, public subject: string, private id: number){
//     }
// }
// const teacher1 = new Teacher("Fahad", "IT", 1);
//teacher1.skills.push("JavaScript"); 
/* It gives error because the skill is private the problem now is how we can
update the skill .So for that we can use getter and setter or create methods for it.
For now we are going to create the method.  */
/*In TypeScript, you can use the readonly modifier to define read-only properties
 on an object. Once a property is marked as readonly, its value cannot be changed.*/
class Teacher {
    constructor(name, subject, id) {
        this.name = name;
        this.subject = subject;
        this.id = id;
        this.skills = [];
    }
    addSkill(skill) {
        this.skills.push(skill); //This method will help to add/update skills. 
    }
}
const teacher1 = new Teacher("Fahad", "IT", 1);
teacher1.addSkill("JavaScript");
console.log(teacher1);
//# sourceMappingURL=index.js.map