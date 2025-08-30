let person = {
    firstName: "Ali",
    lastName: "Mohamed",
    age: 25,
    isStudent: true
};
console.log("First Name:", person.firstName);
console.log("Last Name:", person.lastName);
console.log("Age:", person.age);
console.log("Is Student?", person.isStudent);
person.age = 26;
person.isStudent = false;
console.log("Updated Age:", person.age);
console.log("Updated Is Student:", person.isStudent);
let company = {
    name: "TechCorp",
    location: "Mogadishu",
    employees: {
        total: 50,
        managers: 5
    }
};
console.log("Company Name:", company.name);
console.log("Location:", company.location);
console.log("Total Employees:", company.employees.total);
console.log("Managers:", company.employees.managers);
let student = {
    name: "Ali",
    age: 25,
};
let course = {
    title: "TypeScript Basics",
    duration: 30,
    students: [
        { name: "Ali", score: 85 },
        { name: "Fatima", score: 92 },
        { name: "Hassan", score: 78 }
    ]
};
course.students.forEach(s => {
    console.log(`${s.name} scored ${s.score} in ${course.title}`);
});
export {};
//# sourceMappingURL=example4.js.map