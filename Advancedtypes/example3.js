function identity(value) {
    return value;
}
console.log(identity("Hello World"));
console.log(identity(2025));
console.log(identity(true));
var Box = /** @class */ (function () {
    function Box(content) {
        this.content = content;
    }
    Box.prototype.getContent = function () {
        return this.content;
    };
    return Box;
}());
var numberBox = new Box(12345);
console.log(numberBox.getContent());
var stringBox = new Box("TypeScript");
console.log(stringBox.getContent());
var booleanBox = new Box(false);
console.log(booleanBox.getContent());
