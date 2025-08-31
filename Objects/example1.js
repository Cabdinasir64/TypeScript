var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var shop1 = [
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
var shop2 = {
    name: "Tech Hub",
    type: "Electronics",
    revenue: 20000
};
var shop3 = {
    name: "Book World",
    type: "Books",
    revenue: 7000
};
var shop4 = {
    name: "Fashion Avenue",
    type: "Clothing",
    revenue: 12000
};
var shop5 = {
    name: "Cineplex",
    type: "Entertainment",
    revenue: 15000
};
var shops = [
    shop2, shop3, shop4, shop5
];
var nestedShops = [
    __spreadArray(__spreadArray([], shop1, true), [shop5], false),
    [shop3, shop4,]
];
console.log(nestedShops);
