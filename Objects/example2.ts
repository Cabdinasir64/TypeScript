interface Post {
    id: number | string;
    title: string;
    category: string;
    author: string;
    views?: number;
}

interface ExtendedPost extends Post {
    readonly createdAt: Date;
    like: number;
    printSummary: () => void;
    [key: string]: any;
}

const post1: ExtendedPost = {
    id: 1,
    title: "Intro to TypeScript",
    category: "TypeScript",
    author: "Abdinasir",
    views: 100,
    like: 25,
    createdAt: new Date("2025-08-31"),
    printSummary: function () {
        console.log(`Post: ${this.title}, Author: ${this.author}, Likes: ${this.like}, Views: ${this.views ?? 0}`);
    },
    comments: 5
};

const post2: ExtendedPost = {
    id: 2,
    title: "Advanced Python Tips",
    category: "Python",
    author: "Fatima",
    like: 15,
    createdAt: new Date("2025-08-30"),
    printSummary: function () {
        console.log(`Post: ${this.title}, Author: ${this.author}, Likes: ${this.like}, Views: ${this.views ?? 0}`);
    },
    shares: 10
};

const post3: ExtendedPost = {
    id: 3,
    title: "JavaScript Basics",
    category: "JavaScript",
    author: "Hassan",
    views: 50,
    like: 30,
    number: 'k',
    createdAt: new Date("2025-08-29"),
    printSummary: function () {
        console.log(`Post: ${this.title}, Author: ${this.author}, Likes: ${this.like}, Views: ${this.views ?? 0}`);
    },
    tags: ["JS", "Web"]
};

const posts: ExtendedPost[] = [post1, post2, post3];

console.log("=== All Posts Summary ===");
posts.forEach(post => post.printSummary());

console.log("\n=== Detailed Properties ===");
posts.forEach(post => {
    console.log(`ID: ${post.id}`);
    console.log(`Category: ${post.category}`);
    console.log(`Created At: ${post.createdAt}`);
    console.log(`Optional Views: ${post.views || "No views"}`);
    console.log("-------------------------------");
});

console.log("\n=== Filter Posts with Likes > 20 ===");
const popularPosts = posts.filter(post => post.like > 20);
popularPosts.forEach(post => post.printSummary());
