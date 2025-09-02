var Manager = /** @class */ (function () {
    function Manager() {
    }
    Manager.prototype.manage = function () {
        console.log("Managing team");
    };
    return Manager;
}());
var Developer = /** @class */ (function () {
    function Developer() {
    }
    Developer.prototype.code = function () {
        console.log("Writing code");
    };
    return Developer;
}());
var staffId;
staffId = "EMP1001";
console.log(staffId);
staffId = 2002;
console.log(staffId);
var worker = {
    name: "Sofia",
    age: 30,
    employeeId: "EMP1001",
    department: "Engineering"
};
console.log(worker);
var currentStatus;
currentStatus = "active";
console.log(currentStatus);
function showStaffId(id) {
    if (typeof id === "string") {
        console.log("ID as string:", id.toUpperCase());
    }
    else {
        console.log("ID as number:", id + 500);
    }
}
showStaffId(staffId);
showStaffId("empX99");
var manager = new Manager();
var developer = new Developer();
function workRole(person) {
    if (person instanceof Manager) {
        person.manage();
    }
    else {
        person.code();
    }
}
workRole(manager);
workRole(developer);
var admin = { role: "admin", permissions: ["read", "write", "delete"] };
var user = { role: "user", email: "user@company.com" };
function showAccountInfo(account) {
    if ("permissions" in account) {
        console.log("Admin permissions:", account.permissions.join(","));
    }
    else {
        console.log("User email:", account.email);
    }
}
showAccountInfo(admin);
showAccountInfo(user);
