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
        private _size: "S" | "M" |"L" | "XL",
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
    ){super(id, name, price)}

}

const blander = new ElectricProduct(1, "juicer blander", 1500, "sony", "2023L");
console.log(blander);
