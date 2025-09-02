type Person = { name: string; age: number };
type Employee = { employeeId: string; department: string };
type Staff = Person & Employee;

type Status = "active" | "inactive" | "onLeave";

class Manager {
  manage() {
    console.log("Managing team");
  }
}
class Developer {
  code() {
    console.log("Writing code");
  }
}

type Admin = { role: "admin"; permissions: string[] };
type User = { role: "user"; email: string };

let staffId: string | number;
staffId = "EMP1001";
console.log(staffId);
staffId = 2002;
console.log(staffId);

const worker: Staff = {
  name: "Sofia",
  age: 30,
  employeeId: "EMP1001",
  department: "Engineering"
};
console.log(worker);

let currentStatus: Status;
currentStatus = "active";
console.log(currentStatus);

function showStaffId(id: string | number) {
  if (typeof id === "string") {
    console.log("ID as string:", id.toUpperCase());
  } else {
    console.log("ID as number:", id + 500);
  }
}
showStaffId(staffId);
showStaffId("empX99");

const manager = new Manager();
const developer = new Developer();

function workRole(person: Manager | Developer) {
  if (person instanceof Manager) {
    person.manage();
  } else {
    person.code();
  }
}
workRole(manager);
workRole(developer);

const admin: Admin = { role: "admin", permissions: ["read", "write", "delete"] };
const user: User = { role: "user", email: "user@company.com" };

function showAccountInfo(account: Admin | User) {
  if ("permissions" in account) {
    console.log("Admin permissions:", account.permissions.join(","));
  } else {
    console.log("User email:", account.email);
  }
}
showAccountInfo(admin);
showAccountInfo(user);
