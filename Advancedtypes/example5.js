var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GenericStorage = /** @class */ (function () {
    function GenericStorage() {
        this.items = [];
    }
    GenericStorage.prototype.add = function (item) {
        this.items.push(item);
    };
    GenericStorage.prototype.removeByIndex = function (index) {
        this.items.splice(index, 1);
    };
    GenericStorage.prototype.getAll = function () {
        return this.items;
    };
    return GenericStorage;
}());
var numberStorage = new GenericStorage();
numberStorage.add(10);
numberStorage.add(20);
numberStorage.removeByIndex(0);
console.log("Number Storage:", numberStorage.getAll());
var stringStorage = new GenericStorage();
stringStorage.add("Apple");
stringStorage.add("Banana");
stringStorage.removeByIndex(0);
console.log("String Storage:", stringStorage.getAll());
var ObjectStorage = /** @class */ (function (_super) {
    __extends(ObjectStorage, _super);
    function ObjectStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ObjectStorage.prototype.removeById = function (id) {
        this.items = this.getAll().filter(function (i) { return i.id !== id; });
    };
    return ObjectStorage;
}(GenericStorage));
var productStorage = new ObjectStorage();
productStorage.add({ id: 1, name: "Laptop" });
productStorage.add({ id: 2, name: "Phone" });
productStorage.removeById(1);
console.log("Product Storage:", productStorage.getAll());
var userStorage = new ObjectStorage();
userStorage.add({ id: 1, username: "ali", role: "admin" });
userStorage.add({ id: 2, username: "sofia", role: "user" });
console.log("User Storage:", userStorage.getAll());
