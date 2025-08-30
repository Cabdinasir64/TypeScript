let nestedTuple: [string, number, [boolean, string]] = ["Abdinasir", 25, [true, "TS"]];
console.log(nestedTuple);
console.log(nestedTuple[2][0]);
console.log(nestedTuple[2][1]); 

let tupleWithArray: [string, number, number[]] = ["Scores", 3, [90, 85, 78]];
console.log(tupleWithArray);
console.log(tupleWithArray[2][1]);


let arrayWithTuples: [string, number][] = [
    ["Ali", 20],
    ["Fatima", 22],
    ["Hassan", 25]
];
console.log(arrayWithTuples);
console.log(arrayWithTuples[1]?.[0]);


let nestedArray: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(nestedArray);
console.log(nestedArray[2]?.[1]);

let mixedNested: ([string, number] | [boolean, string])[] = [
    ["Abdinasir", 25],
    [true, "Passed"],
    ["Ali", 30]
];
console.log(mixedNested);
console.log(mixedNested[1]?.[1]);
