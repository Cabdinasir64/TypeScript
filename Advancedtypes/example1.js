var id;
id = 101;
console.log("Union type with number:", id);
id = "TS101";
console.log("Union type with string:", id);
var worker = {
    name: "Ali",
    age: 25,
    employeeId: "EMP001",
    department: "IT"
};
console.log("Intersection type Staff object:", worker);
var requestStatus;
requestStatus = "success";
console.log("Literal type Status:", requestStatus);
requestStatus = "error";
console.log("Literal type Status:", requestStatus);
requestStatus = "loading";
console.log("Literal type Status:", requestStatus);
function printId(id) {
    if (typeof id === "string") {
        console.log("typeof narrowing (string):", id.toUpperCase());
    }
    else {
        console.log("typeof narrowing (number):", id + 100);
    }
}
printId("abc");
printId(50);
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.bark = function () { console.log("instanceof narrowing: Woof!"); };
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.meow = function () { console.log("instanceof narrowing: Meow!"); };
    return Cat;
}());
function animalSound(animal) {
    if (animal instanceof Dog) {
        animal.bark();
    }
    else {
        animal.meow();
    }
}
var dog = new Dog();
var cat = new Cat();
animalSound(dog);
animalSound(cat);
function getInfo(account) {
    if ("permissions" in account) {
        console.log("in operator narrowing - Admin permissions:", account.permissions.join(", "));
    }
    else {
        console.log("in operator narrowing - User email:", account.email);
    }
}
var admin = { role: "admin", permissions: ["read", "write"] };
var user = { role: "user", email: "user@example.com" };
getInfo(admin);
getInfo(user);
