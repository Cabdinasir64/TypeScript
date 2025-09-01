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
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
        if (name == "" || name == null) {
            alert("Invalid animal name");
        }
    }
    Animal.prototype.describe = function () {
        console.log("I am an animal.");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.sound = function () {
        console.log("".concat(this.name, " says: Woof!"));
    };
    Dog.prototype.move = function () {
        console.log("".concat(this.name, " runs around happily."));
    };
    return Dog;
}(Animal));
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bird.prototype.sound = function () {
        console.log("".concat(this.name, " says: Tweet!"));
    };
    Bird.prototype.move = function () {
        console.log("".concat(this.name, " flies in the sky."));
    };
    return Bird;
}(Animal));
var dog = new Dog("");
dog.describe();
dog.sound();
dog.move();
var bird = new Bird("Tweety");
bird.describe();
bird.sound();
bird.move();
