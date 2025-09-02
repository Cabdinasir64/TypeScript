function mapUsersById(users) {
    var record = {};
    users.forEach(function (user) {
        record[user.id] = user;
    });
    return record;
}
var ProductCatalog = /** @class */ (function () {
    function ProductCatalog() {
        this.products = {};
    }
    ProductCatalog.prototype.addProduct = function (product) {
        this.products[product.id] = product;
    };
    ProductCatalog.prototype.getProduct = function (id) {
        return this.products[id];
    };
    return ProductCatalog;
}());
var users = [
    { id: 1, name: "Abdinasir", email: "abdinasir@mail.com", role: "admin" },
    { id: 2, name: "Hassan", email: "hassan@mail.com", role: "editor" },
];
var userMap = mapUsersById(users);
console.log("\nEXAMPLE 4 – RECORD");
console.log("Users mapped by id:", userMap);
var catalog = new ProductCatalog();
catalog.addProduct({ id: 101, name: "Laptop", price: 1200, description: "Gaming Laptop", stock: 5 });
catalog.addProduct({ id: 102, name: "Mouse", price: 50, description: "Wireless Mouse", stock: 20 });
console.log("Product with id 101:", catalog.getProduct(101));
console.log("Product catalog:", catalog.products);
