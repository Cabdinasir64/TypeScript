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

function getUserPreview(user: User): Pick<User, "id" | "name"> {
    const preview: Pick<User, "id" | "name"> = { id: user.id, name: user.name };
    return preview;
}

class ProductPreview {
    constructor(public product: Product) {}

    getPreview(): Pick<Product, "id" | "name" | "price"> {
        const preview: Pick<Product, "id" | "name" | "price"> = {
            id: this.product.id,
            name: this.product.name,
            price: this.product.price,
        };
        return preview;
    }
}

const user: User = { id: 1, name: "Abdinasir", email: "abdinasir@mail.com", role: "admin" };
const product: Product = { id: 101, name: "Laptop", price: 1200, description: "Gaming Laptop", stock: 5 };

const userPreview = getUserPreview(user);
console.log("User preview:", userPreview);

const productPreviewObj = new ProductPreview(product);
console.log("Product preview:", productPreviewObj.getPreview());
