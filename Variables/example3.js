// Variables
let numbers = [10, 20, 30, 40, 50];
let fruits = ["Mango", "Banana", "Apple", "Orange"];
let mixed = [25, "Abdinasir", true, "Somalia", 180];
let flags = [true, false, true, false];
for (let num of numbers) {
    console.log("Number:", num);
}
fruits.forEach(fruit => console.log("Fruit:", fruit));
mixed.forEach(item => console.log("Mixed Item:", item));
let hasApple = fruits.includes("Apple");
let indexOfBanana = fruits.indexOf("Banana");
console.log("Does fruits include Apple?", hasApple);
console.log("Index of Banana:", indexOfBanana);
console.log("Numbers length:", numbers.length);
console.log("Fruits length:", fruits.length);
console.log("Mixed length:", mixed.length);
console.log("Flags length:", flags.length);
export {};
//# sourceMappingURL=example3.js.map