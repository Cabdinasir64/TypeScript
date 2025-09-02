function identity<T>(value: T): T {
    return value;
}
console.log(identity<string>("Hello World"));
console.log(identity<number>(123));

const echo = <T>(x: T) => x;
console.log(echo<boolean>(true));
console.log(echo<boolean>(false));
console.log(echo<string>("Hello"));

function merge<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}
console.log(merge({ name: "Ali" }, { age: 30 }));

const combine = <T, U>(a: T, b: U): string => `${JSON.stringify(a)} + ${JSON.stringify(b)}`;
console.log(combine({ name: "Sofia" }, [1, 2, 3]));

function firstItem<T>(arr: T[]): T | undefined {
    return arr[0];
}
console.log(firstItem<number>([10, 20, 30]));
console.log(firstItem<string>(["apple", "banana"]));

const lastItem = <T>(arr: T[]): T | undefined => arr[arr.length - 1];
console.log(lastItem<number>([1, 2, 3, 4]));


function upperCaseProperty<T extends string | number>(obj: T): string {
    return String(obj).toUpperCase();
}
console.log(upperCaseProperty("hello"));
console.log(upperCaseProperty(123));

const Description = <T>(Feedback: T, Name: string): T | string => {
    let Description = `Feedback: ${Feedback}, Name: ${Name}`;
    return Description;
};
console.log(Description("Great job!", "Alice"));
console.log(Description(5, "Bob"));