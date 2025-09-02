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

function displayUser(user: Readonly<User>) {
    console.log(`ID: ${user.id}, Name: ${user.name}, Email: ${user.email}, Role: ${user.role}`);
}

class ImmutableProduct {
    constructor(public product: Readonly<Product>) { }

    getInfo() {
        console.log(`Product: ${this.product.name}, Price: ${this.product.price}`);
    }
}

const user: User = { id: 1, name: "Abdinasir", email: "abdinasir@mail.com", role: "admin" };
const product: Product = { id: 101, name: "Laptop", price: 1200, description: "Gaming Laptop", stock: 5 };

displayUser(user);

const immutableProduct = new ImmutableProduct(product);
immutableProduct.getInfo();
