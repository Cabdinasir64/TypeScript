let anything = 42;
anything = "Hello";
anything = true;
console.log(anything);
let unknownValue = 10.999934;
unknownValue = "";
unknownValue = false;
if (typeof unknownValue === "string") {
    console.log(unknownValue.toUpperCase());
}
if (typeof unknownValue === "number") {
    console.log(unknownValue.toFixed(2));
}
function greet(name) {
    console.log("Hello " + name);
}
greet("Abdinasir");
let emptyValue = null;
let notDefined = undefined;
let mixed = 100;
mixed = null;
mixed = undefined;
let flexible = "Start";
flexible = 123;
flexible = true;
console.log(flexible);
let safeUnknown;
safeUnknown = "Safeeerr";
safeUnknown = 123.844;
safeUnknown = 98;
if (typeof safeUnknown === "string") {
    console.log(safeUnknown.length);
}
else if (typeof safeUnknown === "number") {
    console.log(safeUnknown.toFixed(2));
}
else if (typeof safeUnknown === "boolean") {
    console.log(safeUnknown ? "True" : "False");
}
export {};
//# sourceMappingURL=example5.js.map