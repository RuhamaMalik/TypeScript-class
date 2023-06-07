//  getter and setters

/*Getter and setter are types of methods in object-oriented programming (OOP) that
  are used to retrieve or set the values of private class fields. In TypeScript,
  you can define getter and setter methods using the get and set keywords.
  
  Getters and setters are useful when you want to perform some additional logic 
  before getting or setting a value. For example, you could add validation to 
  ensure that the value being set is valid, or perform some computation before
  returning a value in the get method.*/

// class Product {
//     constructor(
//         private id: number,
//         private name: string,
//         private price: number,
//     ) { }

//     public getId(): number {
//         return this.id;
//     }

//     public getName(): string {
//         return this.name;
//     }

//     public getPrice(): number {
//         return this.price;
//     }

// }
// let product1 = new Product(1,"Watch",500);
// console.log(product1.getId()); //1


// Replace the above class and create a getter in it
// private mAi add  class ke andar se access kar sakty hen bahar se nahi.
// 
class Product {
    constructor(
        private _id: number,
        private _name: string,
        private _price: number,
    ) { }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    set name(newName: string) {
        if (!newName) {
            throw Error("Name can not be empty !");
        }
        this._name = newName;
    }

    get price() {
        return this._price;
    }

}
let product1 = new Product(1, "Watch", 500);
console.log(product1.id); //1  // Now we can access by name only.
// product1.name = `This will throw an error because the field is private and 
//                  the value will not be updated.`;


// product1.name = `The value will be updated because we created its setter.`;

// product1.name = ""; // throw error
product1.name = "Book"; // updated successful
console.log(product1.name); //Book

// Inheritance
/*
Inheritance is a fundamental concept in object-oriented programming (OOP) that 
allows classes to inherit properties and behaviors from other classes. It enables
 the creation of a hierarchical relationship between classes, where a derived 
 class (also known as a subclass or child class) inherits the characteristics 
 of a base class (also known as a superclass or parent class).

The derived class inherits all the public and protected members (properties and 
    methods) of the base class, which it can use directly. This allows for code
     reuse and the extension of existing classes to create new classes with 
     additional or modified functionality.

     Inheritance is a powerful mechanism that promotes code reuse, extensibility,
      and the organization of code into logical hierarchies, making it easier to 
      manage and maintain complex software systems.
*/

class ClothProduct extends Product {
    constructor(
        id: number,
        name: string,
        price: number,
        // private _size: string,
        private _size: "S" | "M" | "L" | "XL",
        private _color: string,
    ) {
        super(id, name, price) // super() used to call the base class constructor 
    }
}


const tShirt = new ClothProduct(1, "Shirt", 700, "XL", "black");

// console.log(tShirt);


class ElectricProduct extends Product {

    constructor(
        id: number,
        name: string,
        price: number,
        private _brand: string,
        private _module: string,
    ) { super(id, name, price) }

}

const blander = new ElectricProduct(1, "juicer blander", 1500, "sony", "2023L");
console.log(blander);


// abstract methods
/*
In TypeScript, an abstract method is a method declaration in a class that doesn't
 have an implementation. Abstract methods are meant to be overridden
  (implemented) in derived classes.

To define an abstract method in TypeScript, you need to mark it with the abstract
 keyword and omit the method body.

 Abstract methods are useful when you want to define a common method signature
  in a base class but leave the implementation details to the derived classes. 
  This allows you to enforce that derived classes provide their own implementation
   for the abstract methods, ensuring that each derived class adheres to the
    required behavior defined by the base class.

    abstract methods wo methods hen jinhy jo baSE class ko extend karega ooske
     pass hona chahiye. iske liye base class ko bhi abstract hona la5mi he
*/

abstract class Animal {
    constructor(
        private _name: string,
    ) { }
    get name() {
        return this._name;
    }
    set name(newName: string) {
        if (!newName) {
            throw Error("Name can not be empty !");
        }
        this._name = newName;
    }
    abstract makeSound(): void;
}


class Dog extends Animal {
    makeSound(): void {
        console.log("Woof!");
    }
}

class Cat extends Animal {
    makeSound(): void {
        console.log("Meow!");
    }
}

const dog = new Dog("Woofy");
dog.makeSound(); // Output: Woof!

const cat = new Cat("kitten");
cat.makeSound(); // Output: Meow!

// Singleton
/*
The Singleton pattern is a design pattern used in software development to 
ensure that a class has only one instance and provides a global point of access
 to it.

In TypeScript, you can implement the Singleton pattern by using a combination of
a private constructor, a static instance variable, and a static method for
accessing the instance.

-- koi class jiska aik hi instance bany multiple instance na bany -
*/


// class Util {
//     constructor(){

//     }
// }

// let utl1 = new Util();
// let utl2 = new Util(); // ab yahan par iske 2 instance ban gae hen ham aisa nahi chahty tw iske liye ham constructor ko private kardengy ab ham iske saath new nahi laga sakty. 

class Util {
    private static instance: Util;

    private constructor() { }

    static getInstance() {
        if (!this.instance) {
            this.instance = new Util();
        }
        return this.instance;
    }
}

let utl1 = Util.getInstance();
let utl2 = Util.getInstance();