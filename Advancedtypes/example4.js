var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function identity(value) {
    return value;
}
console.log(identity("Hello World"));
console.log(identity(123));
var echo = function (x) { return x; };
console.log(echo(true));
console.log(echo(false));
console.log(echo("Hello"));
function merge(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
console.log(merge({ name: "Ali" }, { age: 30 }));
var combine = function (a, b) { return "".concat(JSON.stringify(a), " + ").concat(JSON.stringify(b)); };
console.log(combine({ name: "Sofia" }, [1, 2, 3]));
function firstItem(arr) {
    return arr[0];
}
console.log(firstItem([10, 20, 30]));
console.log(firstItem(["apple", "banana"]));
var lastItem = function (arr) { return arr[arr.length - 1]; };
console.log(lastItem([1, 2, 3, 4]));
function upperCaseProperty(obj) {
    return String(obj).toUpperCase();
}
console.log(upperCaseProperty("hello"));
console.log(upperCaseProperty(123));
var mapArray = function (arr, fn) { return arr.map(fn); };
console.log(mapArray([1, 2, 3], function (n) { return "Number-".concat(n); }));
function withCount(arr) {
    return { data: arr, count: arr.length };
}
console.log(withCount(["a", "b", "c"]));
var swap = function (tuple) { return [tuple[1], tuple[0]]; };
console.log(swap([10, "hello"]));
function assignId(obj, id) {
    return __assign(__assign({}, obj), { id: id });
}
console.log(assignId({ name: "Sofia", role: "Developer" }, 101));
var Description = function (Feedback, Name) {
    var Description = "Feedback: ".concat(Feedback, ", Name: ").concat(Name);
    return Description;
};
console.log(Description("Great job!", "Alice"));
console.log(Description(5, "Bob"));
