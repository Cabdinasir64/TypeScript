function add(a: number, b: number) {
    return a + b;
}
const Subtract = (a: number, b: number) => {
    return a - b;
}

console.log("Add:", add(5, 10));
console.log("Subtract:", Subtract(10, 5));

const greet = (name?: string) => {
    if (name) {
        console.log("Hello " + name);
    } else {
        console.log("Hello guest");
    }
}
greet();
greet("Nasir");

function multiply(a: number, b: number = 2): number {
    return a * b;
}
console.log("Multiply:", multiply(5));
console.log("Multiply:", multiply(5, 3));


function combine(a: number, b: number): number;
function combine(a: string, b: string): string;

function combine(a: any, b: any): any {
    return a + b;
}

console.log("Combine numbers:", combine(4, 6));
console.log("Combine numbers:", combine(41223, 609));
console.log("Combine numbers:", combine(23948, -1293298));
console.log("Combine strings:", combine("Hi ", "Nasir"));

const square = (x: number) => {
    return x * x;
};
console.log("Square:", square(6)); 
