interface User {
    id: number;
    name: string;
    email: string;
    role: string;
}

type Product = {
    id: number;
    name: string;
    price: number;
    description: string;
    stock: number;
}

function mapUsersById(users: User[]): Record<number, User> {
    const record: Record<number, User> = {};
    users.forEach(user => {
        record[user.id] = user;
    });
    return record;
}

class ProductCatalog {
    products: Record<number, Product> = {};

    addProduct(product: Product) {
        this.products[product.id] = product;
    }

    getProduct(id: number): Product | undefined {
        return this.products[id];
    }
}

const users: User[] = [
    { id: 1, name: "Abdinasir", email: "abdinasir@mail.com", role: "admin" },
    { id: 2, name: "Hassan", email: "hassan@mail.com", role: "editor" },
];

const userMap = mapUsersById(users);
console.log("\nEXAMPLE 4 – RECORD");
console.log("Users mapped by id:", userMap);

const catalog = new ProductCatalog();
catalog.addProduct({ id: 101, name: "Laptop", price: 1200, description: "Gaming Laptop", stock: 5 });
catalog.addProduct({ id: 102, name: "Mouse", price: 50, description: "Wireless Mouse", stock: 20 });

console.log("Product with id 101:", catalog.getProduct(101));
console.log("Product catalog:", catalog.products);
