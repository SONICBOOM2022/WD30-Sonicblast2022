// Javascript Class Examples
// Object Oriented Programming (OOP) - style of writing a code wherein it uses objects. The objects contains properties.
// Objects - do not use arrow functions

// Abstraction
// Encapsulation
// Polymorphism
// Inheritance - from parent to child

// PascalCase convention for classes - standard
class Vehicle {
    // Automatically runs when a new instance is created
    constructor(color) {
        console.log(`The vehicle is ${color}`);
    }
    getEngine() {
        return 'Gas Powered';
    }
}

// const civic = new Vehicle("violet");
// console.log(civic.getEngine());

class Toyota extends Vehicle {

    displayType() {
        console.log('Car');
    }
}

// const fortuner = new Toyota("black");
// console.log(fortuner.getEngine());
// fortuner.displayType();

class Tesla extends Vehicle {
    getEngine() {
        return 'Electric Powered';
    }
}
// const cybertruck = new Tesla('yellow');
// console.log(cybertruck.getEngine());

class Car {
    constructor(brand, model, color, year) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.year = year;

        const yearNow = new Date().getFullYear();
        this.carAge = yearNow - parseInt(this.year);
    }
    getBrandModel() {
        return `${this.brand} ${this.model}`;
    }
    getCarAge() {
        return `This ${this.brand} is ${this.carAge} year(s) old`;
    }
    getColor = () => {
        return this.color;
    }
}

class ChildCar extends Car {
    // Super represents the parent class
    constructor(brand, model, color, year) {
        super(brand, model, color, year);
        console.log('The Child class');
    }
    getColor = () => {
        const color = super.getColor()
        return color;
    }
}

const vios = new ChildCar("Toyota", "Vios", "Red", "2020");
// console.log(vios.getBrandModel());
// console.log(vios.getCarAge());
console.log(vios.getColor());
console.log(vios);