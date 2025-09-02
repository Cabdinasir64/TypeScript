function displayUser(user) {
    console.log("ID: ".concat(user.id, ", Name: ").concat(user.name, ", Email: ").concat(user.email, ", Role: ").concat(user.role));
}
var ImmutableProduct = /** @class */ (function () {
    function ImmutableProduct(product) {
        this.product = product;
    }
    ImmutableProduct.prototype.getInfo = function () {
        console.log("Product: ".concat(this.product.name, ", Price: ").concat(this.product.price));
    };
    return ImmutableProduct;
}());
var user = { id: 1, name: "Abdinasir", email: "abdinasir@mail.com", role: "admin" };
var product = { id: 101, name: "Laptop", price: 1200, description: "Gaming Laptop", stock: 5 };
displayUser(user);
var immutableProduct = new ImmutableProduct(product);
immutableProduct.getInfo();
