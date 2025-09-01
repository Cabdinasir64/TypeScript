var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    Employee.prototype.pay = function () {
        console.log("Paid $".concat(this.calculateSalary(), " to employee ").concat(this.name));
    };
    Employee.prototype.showDetails = function () {
        console.log("Employee Name: ".concat(this.name, ", Base Salary: $").concat(this.baseSalary));
    };
    return Employee;
}());
var FullTimeEmployee = /** @class */ (function (_super) {
    __extends(FullTimeEmployee, _super);
    function FullTimeEmployee(name, baseSalary, bonus) {
        var _this = _super.call(this, name, baseSalary) || this;
        _this.bonus = bonus;
        return _this;
    }
    FullTimeEmployee.prototype.calculateSalary = function () {
        return this.baseSalary + this.bonus;
    };
    return FullTimeEmployee;
}(Employee));
var Freelancer = /** @class */ (function () {
    function Freelancer(name, rate, hours) {
        this.name = name;
        this.rate = rate;
        this.hours = hours;
    }
    Freelancer.prototype.calculateSalary = function () {
        return this.rate * this.hours;
    };
    Freelancer.prototype.pay = function () {
        console.log("Paid $".concat(this.calculateSalary(), " to freelancer ").concat(this.name));
    };
    Freelancer.prototype.showDetails = function () {
        console.log("Freelancer Name: ".concat(this.name, ", Hourly Rate: $").concat(this.rate, ", Hours Worked: ").concat(this.hours));
    };
    return Freelancer;
}());
var emp1 = new FullTimeEmployee("Ali", 3000, 500);
var emp2 = new FullTimeEmployee("Hassan", 4000, 700);
var freelancer1 = new Freelancer("Sara", 50, 120);
var payableList = [emp1, emp2, freelancer1];
for (var _i = 0, payableList_1 = payableList; _i < payableList_1.length; _i++) {
    var payable = payableList_1[_i];
    payable.showDetails();
    payable.pay();
}
