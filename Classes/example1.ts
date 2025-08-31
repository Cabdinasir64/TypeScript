class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }

    SayHello() {
        console.log("Hello!", this.name)
    }
}

const person1 = new Person("Ali", 22);
const person2 = new Person("Mike", 29);
const person3 = new Person("Hassan", 30);
person1.greet();
person2.greet();
person3.greet();
person1.SayHello();
person2.SayHello();
person3.SayHello();
