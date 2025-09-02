function getUserPreview(user) {
    var preview = { id: user.id, name: user.name };
    return preview;
}
var ProductPreview = /** @class */ (function () {
    function ProductPreview(product) {
        this.product = product;
    }
    ProductPreview.prototype.getPreview = function () {
        var preview = {
            id: this.product.id,
            name: this.product.name,
            price: this.product.price,
        };
        return preview;
    };
    return ProductPreview;
}());
var user = { id: 1, name: "Abdinasir", email: "abdinasir@mail.com", role: "admin" };
var product = { id: 101, name: "Laptop", price: 1200, description: "Gaming Laptop", stock: 5 };
var userPreview = getUserPreview(user);
console.log("User preview:", userPreview);
var productPreviewObj = new ProductPreview(product);
console.log("Product preview:", productPreviewObj.getPreview());
