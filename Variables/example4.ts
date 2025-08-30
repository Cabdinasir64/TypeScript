let person: { firstName: string; lastName: string; age: number; isStudent: boolean } = {
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

let company: { name: string; location: string; employees: { total: number; managers: number } } = {
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

let student: { name: string; age: number;} = {
    name: "Ali",
    age: 25,
};
let course: { title: string; duration: number; students: { name: string; score: number }[] } = {
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
