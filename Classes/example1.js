var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    };
    Person.prototype.SayHello = function () {
        console.log("Hello!", this.name);
    };
    return Person;
}());
var person1 = new Person("Ali", 22);
var person2 = new Person("Mike", 29);
var person3 = new Person("Hassan", 30);
person1.greet();
person2.greet();
person3.greet();
person1.SayHello();
person2.SayHello();
person3.SayHello();
