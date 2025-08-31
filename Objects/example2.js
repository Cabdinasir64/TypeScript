var post1 = {
    id: 1,
    title: "Intro to TypeScript",
    category: "TypeScript",
    author: "Abdinasir",
    views: 100,
    like: 25,
    createdAt: new Date("2025-08-31"),
    printSummary: function () {
        var _a;
        console.log("Post: ".concat(this.title, ", Author: ").concat(this.author, ", Likes: ").concat(this.like, ", Views: ").concat((_a = this.views) !== null && _a !== void 0 ? _a : 0));
    },
    comments: 5
};
var post2 = {
    id: 2,
    title: "Advanced Python Tips",
    category: "Python",
    author: "Fatima",
    like: 15,
    createdAt: new Date("2025-08-30"),
    printSummary: function () {
        var _a;
        console.log("Post: ".concat(this.title, ", Author: ").concat(this.author, ", Likes: ").concat(this.like, ", Views: ").concat((_a = this.views) !== null && _a !== void 0 ? _a : 0));
    },
    shares: 10
};
var post3 = {
    id: 3,
    title: "JavaScript Basics",
    category: "JavaScript",
    author: "Hassan",
    views: 50,
    like: 30,
    number: 'k',
    createdAt: new Date("2025-08-29"),
    printSummary: function () {
        var _a;
        console.log("Post: ".concat(this.title, ", Author: ").concat(this.author, ", Likes: ").concat(this.like, ", Views: ").concat((_a = this.views) !== null && _a !== void 0 ? _a : 0));
    },
    tags: ["JS", "Web"]
};
var posts = [post1, post2, post3];
console.log("=== All Posts Summary ===");
posts.forEach(function (post) { return post.printSummary(); });
console.log("\n=== Detailed Properties ===");
posts.forEach(function (post) {
    console.log("ID: ".concat(post.id));
    console.log("Category: ".concat(post.category));
    console.log("Created At: ".concat(post.createdAt));
    console.log("Optional Views: ".concat(post.views || "No views"));
    console.log("-------------------------------");
});
console.log("\n=== Filter Posts with Likes > 20 ===");
var popularPosts = posts.filter(function (post) { return post.like > 20; });
popularPosts.forEach(function (post) { return post.printSummary(); });
