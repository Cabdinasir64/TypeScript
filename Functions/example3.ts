type Product = [number, string, number];

const products: Product[] = [
    [1, "Laptop", 1200],
    [2, "Phone", 800],
    [3, "Tablet", 400],
    [4, "Monitor", 300],
    [5, "Keyboard", 50]
];

const getProductById = (id: number, callback: (product: Product | undefined) => void) => {
    const found = products.find(p => p[0] === id);
    callback(found);
};

const filterExpensive = (minPrice: number) => {
    return products.filter(p => p[2] >= minPrice);
};

const sortByPriceAsc = () => {
    return [...products].sort((a, b) => a[2] - b[2]);
};

const sortByPriceDesc = () => {
    return [...products].sort((a, b) => b[2] - a[2]);
};

const calculateTotal = (items: Product[]): number => {
    const total = items.reduce((sum, p) => sum + p[2], 0);
    return total;
};

const printProduct = (product: Product | undefined): void => {
    if (product) {
        console.log(`Product: ${product[1]}, Price: $${product[2]}`);
    } else {
        console.log("Product not found");
    }
};


getProductById(2, printProduct);
getProductById(10, printProduct);

const expensiveProducts = filterExpensive(500);
expensiveProducts.map((product) => {
    console.log(`Expensive Product: ${product[1]}, Price: $${product[2]}`);
});

console.log("Sorted by price ascending:", sortByPriceAsc());
console.log("Sorted by price descending:", sortByPriceDesc());
    
const total = calculateTotal(products);
const ExpensiveTotal = calculateTotal(expensiveProducts);
console.log("Total price of all products:", total);
console.log("Total price of expensive products:", ExpensiveTotal);
