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

function getUserWithoutEmail(user: User): Omit<User, "email"> {
    const result: Omit<User, "email"> = { id: user.id, name: user.name, role: user.role };
    return result;
}

class ProductWithoutDescription {
    constructor(public product: Product) { }

    getPreview(): Omit<Product, "description"> {
        const preview: Omit<Product, "description"> = {
            id: this.product.id,
            name: this.product.name,
            price: this.product.price,
            stock: this.product.stock,
        };
        return preview;
    }
}

const user: User = { id: 1, name: "Abdinasir", email: "abdinasir@mail.com", role: "admin" };
const product: Product = { id: 101, name: "Laptop", price: 1200, description: "Gaming Laptop", stock: 5 };

const userWithoutEmail = getUserWithoutEmail(user);
console.log("User without email:", userWithoutEmail);

const productPreviewObj = new ProductWithoutDescription(product);
console.log("Product without description:", productPreviewObj.getPreview());
