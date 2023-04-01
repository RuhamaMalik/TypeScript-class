
abstract class Vehicle {
    private rented: boolean;
    constructor(private _make: string, private _model: string, private _year: number) {
        this.rented = false;
    }

    get make() {
        return this._make;
    }

    get model() {
        return this._model;
    }

    get year() {
        return this._year;
    }

    get isRented() {
        return this.rented;
    }

    // setRented(rented: boolean): void {
    //     this.rented = rented;
    // }
    set isRented(rented: boolean) {
        this.rented = rented;
    }
    
    abstract rentalRate(): number;

    rent(): void {
        if (this.isRented) {
            console.log("Sorry, this vehicle is already rented.");
        } else {
            console.log("Vehicle rented successfully.");
            this.isRented=true;
        }
    }

    return(): void {
        if (this.isRented) {
            console.log("Vehicle returned successfully.");
            this.isRented=false;
        } else {
            console.log("This vehicle has not been rented.");
        }
    }
}

class Car extends Vehicle {
    private numSeats: number;

    constructor(make: string, model: string, year: number, numSeats: number) {
        super(make, model, year);
        this.numSeats = numSeats;
    }

    rentalRate(): number {
        return 50; // base rate for cars
    }

    get NumSeats() {
        return this.numSeats;
    }
}

class Truck extends Vehicle {
    private cargoCapacity: number;

    constructor(make: string, model: string, year: number, cargoCapacity: number) {
        super(make, model, year);
        this.cargoCapacity = cargoCapacity;
    }

    rentalRate(): number {
        return 80; // base rate for trucks
    }

    get CargoCapacity() {
        return this.cargoCapacity;
    }
}

class Motorcycle extends Vehicle {
    private engineSize: number;

    constructor(make: string, model: string, year: number, engineSize: number) {
        super(make, model, year);
        this.engineSize = engineSize;
    }

    rentalRate(): number {
        return 30; // base rate for motorcycles
    }

    get EngineSize() {
        return this.engineSize;
    }
}


// create instances of each type of vehicle
const car1 = new Car('Honda', 'Civic', 2022, 5);
const car2 = new Car('MBW', 'The XM', 2022, 7);
const truck1 = new Truck('Ford', 'F-150', 2021, 1500);
const motorcycle1 = new Motorcycle('Harley Davidson', 'Sportster', 2020, 883);

// test the rent() and return() methods
car1.rent(); // Vehicle rented successfully.
car1.rent(); // Sorry, this vehicle is already rented.

truck1.rent(); // Vehicle rented successfully.

car1.return(); // Vehicle returned successfully.

motorcycle1.rent(); // Vehicle rented successfully.

document.write( `car1 rent is ${car1.rentalRate() } <br>` ); // 50
document.write( `truck rent is ${truck1.rentalRate() } <br>` ); // 80
document.write( `motorcycle rent is ${motorcycle1.rentalRate() }` ); // 30
document.write( `car2 rent is ${car2.rentalRate() } <br>` ); // 50


console.log(car1.NumSeats); // 5
console.log(car2.NumSeats); // 7
console.log(truck1.CargoCapacity); // 1500
console.log(motorcycle1.EngineSize); // 883
