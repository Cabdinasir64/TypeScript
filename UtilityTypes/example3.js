function getUserWithoutEmail(user) {
    var result = { id: user.id, name: user.name, role: user.role };
    return result;
}
var ProductWithoutDescription = /** @class */ (function () {
    function ProductWithoutDescription(product) {
        this.product = product;
    }
    ProductWithoutDescription.prototype.getPreview = function () {
        var preview = {
            id: this.product.id,
            name: this.product.name,
            price: this.product.price,
            stock: this.product.stock,
        };
        return preview;
    };
    return ProductWithoutDescription;
}());
var user = { id: 1, name: "Abdinasir", email: "abdinasir@mail.com", role: "admin" };
var product = { id: 101, name: "Laptop", price: 1200, description: "Gaming Laptop", stock: 5 };
var userWithoutEmail = getUserWithoutEmail(user);
console.log("User without email:", userWithoutEmail);
var productPreviewObj = new ProductWithoutDescription(product);
console.log("Product without description:", productPreviewObj.getPreview());
