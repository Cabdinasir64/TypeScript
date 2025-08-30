let anything: any = 42;
anything = "Hello";
anything = true;
console.log(anything);

let unknownValue: unknown = 10.999934;
unknownValue = "";
unknownValue = false;
if (typeof unknownValue === "string") {
    console.log(unknownValue.toUpperCase());
}
if (typeof unknownValue === "number") {
    console.log(unknownValue.toFixed(2));
}
function greet(name: string): void {
    console.log("Hello " + name);
}
greet("Abdinasir");

let emptyValue: null = null;
let notDefined: undefined = undefined;

let mixed: number | null | undefined = 100;
mixed = null;
mixed = undefined;

let flexible: any = "Start";
flexible = 123;
flexible = true;
console.log(flexible);

let safeUnknown: unknown;
safeUnknown = "Safeeerr";
safeUnknown = 123.844;
safeUnknown = 98;
if (typeof safeUnknown === "string") {
    console.log(safeUnknown.length);
}else if (typeof safeUnknown === "number") {
    console.log(safeUnknown.toFixed(2));
}else if (typeof safeUnknown === "boolean") {
    console.log(safeUnknown ? "True" : "False");
}
