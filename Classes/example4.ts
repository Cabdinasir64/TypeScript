abstract class Animal {

    constructor(public name: string) {
        if (name == "" || name == null) {
            throw new Error("Invalid animal name");
        }
    }

    abstract sound(): void;
    abstract move(): void;

    describe() {
        console.log(`I am an animal.`);
    }
}

class Dog extends Animal {
    sound() {
        console.log(`${this.name} says: Woof!`);
    }

    move() {
        console.log(`${this.name} runs around happily.`);
    }
}

class Bird extends Animal {
    sound() {
        console.log(`${this.name} says: Tweet!`);
    }

    move() {
        console.log(`${this.name} flies in the sky.`);
    }
}

const dog = new Dog("");
dog.describe();
dog.sound();
dog.move();

const bird = new Bird("Tweety");
bird.describe();
bird.sound();
bird.move();
