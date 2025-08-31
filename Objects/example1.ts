const shop1: { name: string; type: string; revenue: number }[] = [
    {
        name: "Fresh Fruits Co.1",
        type: "Grocery",
        revenue: 5000
    },
    {
        name: "Fresh Fruits Co.2",
        type: "Grocery",
        revenue: 5000
    },
    {
        name: "Fresh Fruits Co.3",
        type: "Grocery",
        revenue: 5000
    },

];

const shop2: { name: string; type: string; revenue: number } = {
    name: "Tech Hub",
    type: "Electronics",
    revenue: 20000
};

const shop3: { name: string; type: string; revenue: number } = {
    name: "Book World",
    type: "Books",
    revenue: 7000
};

const shop4: { name: string; type: string; revenue: number } = {
    name: "Fashion Avenue",
    type: "Clothing",
    revenue: 12000
};

const shop5: { name: string; type: string; revenue: number } = {
    name: "Cineplex",
    type: "Entertainment",
    revenue: 15000
};

const shops: { name: string; type: string; revenue: number }[] = [
    shop2, shop3, shop4, shop5
];

const nestedShops: { name: string; type: string; revenue: number }[][] = [
    [...shop1, shop5],
    [shop3, shop4,]
];



console.log(nestedShops)