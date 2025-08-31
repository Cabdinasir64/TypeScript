function add(a, b) {
    return a + b;
}
const Subtract = (a, b) => {
    return a - b;
};
console.log("Add:", add(5, 10));
console.log("Subtract:", Subtract(10, 5));
const greet = (name) => {
    if (name) {
        console.log("Hello " + name);
    }
    else {
        console.log("Hello guest");
    }
};
greet();
greet("Nasir");
function multiply(a, b = 2) {
    return a * b;
}
console.log("Multiply:", multiply(5));
console.log("Multiply:", multiply(5, 3));
function combine(a, b) {
    return a + b;
}
console.log("Combine numbers:", combine(4, 6));
console.log("Combine numbers:", combine(41223, 609));
console.log("Combine numbers:", combine(23948, -1293298));
console.log("Combine strings:", combine("Hi ", "Nasir"));
const square = (x) => {
    return x * x;
};
console.log("Square:", square(6));
export {};
//# sourceMappingURL=example1.js.map