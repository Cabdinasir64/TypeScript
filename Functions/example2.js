function divide(a, b) {
    return a / b;
}
const mod = (a, b) => {
    return a % b;
};
const welcome = (firstName, lastName = "Guest") => {
    if (firstName) {
        console.log("Welcome " + firstName + " " + lastName);
    }
    else {
        console.log("Welcome " + lastName);
    }
};
function power(base, exponent) {
    if (typeof exponent === "number") {
        return base ** exponent;
    }
    else {
        return base + " to the power of " + exponent;
    }
}
const cube = (x) => {
    return x * x * x;
};
console.log("Divide:", divide(20, 5));
console.log("Modulus:", mod(10, 3));
welcome();
welcome("Nasir");
welcome("Ali", "Mohamed");
console.log("Power numbers:", power(2, 3));
console.log("Power string:", power(2, "three"));
console.log("Cube:", cube(4));
export {};
//# sourceMappingURL=example2.js.map