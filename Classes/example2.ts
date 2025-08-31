class Person {
    constructor(public name: string, public age: number, protected secret: string) {}

    greet() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

class Employee extends Person {
    showSecret() {
        console.log(`Employee secret: ${this.secret}`);
    }
}

class Car {
    constructor(public brand: string, public model: string) { }

    showDetails() {
        console.log(`Car: ${this.brand} ${this.model}`);
    }
}

const person1 = new Person("Ali", 22, "I love coding");
const person2 = new Person("Mike", 29, "I like TypeScript");

const emp1 = new Employee("Hassan", 30, "Top Secret");

const car1 = new Car("Toyota", "Corolla");
const car2 = new Car("Honda", "Civic");

console.log(`Person1 Name is ${person1.name} and age is ${person1.age}`);
console.log(`Person2 Name is ${person2.name} and age is ${person2.age}`);

person1.greet();
person2.greet();

emp1.greet();
emp1.showSecret();

car1.showDetails();
car2.showDetails();


