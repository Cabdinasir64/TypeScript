let id: string | number;
id = 101;
console.log("Union type with number:", id);
id = "TS101";
console.log("Union type with string:", id);

type Person = { name: string; age: number };
type Employee = { employeeId: string; department: string };
type Staff = Person & Employee;

const worker: Staff = {
  name: "Ali",
  age: 25,
  employeeId: "EMP001",
  department: "IT"
};
console.log("Intersection type Staff object:", worker);

type Status = "success" | "error" | "loading";
let requestStatus: Status;
requestStatus = "success";
console.log("Literal type Status:", requestStatus);
requestStatus = "error";
console.log("Literal type Status:", requestStatus);
requestStatus = "loading";
console.log("Literal type Status:", requestStatus);

function printId(id: string | number) {
  if (typeof id === "string") {
    console.log("typeof narrowing (string):", id.toUpperCase());
  } else {
    console.log("typeof narrowing (number):", id + 100);
  }
}
printId("abc");
printId(50);

class Dog {
  bark() { console.log("instanceof narrowing: Woof!"); }
}
class Cat {
  meow() { console.log("instanceof narrowing: Meow!"); }
}
function animalSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}
const dog = new Dog();
const cat = new Cat();
animalSound(dog);
animalSound(cat);

type Admin = { role: "admin"; permissions: string[] };
type User = { role: "user"; email: string };
function getInfo(account: Admin | User) {
  if ("permissions" in account) {
    console.log("in operator narrowing - Admin permissions:", account.permissions.join(", "));
  } else {
    console.log("in operator narrowing - User email:", account.email);
  }
}
const admin: Admin = { role: "admin", permissions: ["read", "write"] };
const user: User = { role: "user", email: "user@example.com" };
getInfo(admin);
getInfo(user);
