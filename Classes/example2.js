var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age, secret) {
        this.name = name;
        this.age = age;
        this.secret = secret;
    }
    Person.prototype.greet = function () {
        console.log("Hi, my name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee.prototype.showSecret = function () {
        console.log("Employee secret: ".concat(this.secret));
    };
    return Employee;
}(Person));
var Car = /** @class */ (function () {
    function Car(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    Car.prototype.showDetails = function () {
        console.log("Car: ".concat(this.brand, " ").concat(this.model));
    };
    return Car;
}());
var person1 = new Person("Ali", 22, "I love coding");
var person2 = new Person("Mike", 29, "I like TypeScript");
var emp1 = new Employee("Hassan", 30, "Top Secret");
var car1 = new Car("Toyota", "Corolla");
var car2 = new Car("Honda", "Civic");
console.log("Person1 Name is ".concat(person1.name, " and age is ").concat(person1.age));
console.log("Person2 Name is ".concat(person2.name, " and age is ").concat(person2.age));
person1.greet();
person2.greet();
emp1.greet();
emp1.showSecret();
car1.showDetails();
car2.showDetails();
