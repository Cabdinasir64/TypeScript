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
    function Employee(name, id, baseSalary) {
        if (!name || baseSalary < 0)
            throw new Error("Invalid employee data");
        this.name = name;
        this.id = id;
        this.baseSalary = baseSalary;
    }
    Employee.prototype.showId = function () {
        console.log("Employee ID: ".concat(this.id));
    };
    Employee.prototype.showInfo = function () {
        console.log("Employee Name: ".concat(this.name, ", Salary: $").concat(this.calculateSalary()));
        this.showId();
    };
    return Employee;
}());
var FullTimeEmployee = /** @class */ (function (_super) {
    __extends(FullTimeEmployee, _super);
    function FullTimeEmployee(name, id, baseSalary, bonus) {
        var _this = _super.call(this, name, id, baseSalary) || this;
        _this.bonus = bonus;
        return _this;
    }
    FullTimeEmployee.prototype.calculateSalary = function () {
        return this.baseSalary + this.bonus;
    };
    return FullTimeEmployee;
}(Employee));
var PartTimeEmployee = /** @class */ (function (_super) {
    __extends(PartTimeEmployee, _super);
    function PartTimeEmployee(name, id, hourlyRate, hoursWorked) {
        var _this = _super.call(this, name, id, 0) || this;
        _this.hourlyRate = hourlyRate;
        _this.hoursWorked = hoursWorked;
        return _this;
    }
    PartTimeEmployee.prototype.calculateSalary = function () {
        return this.hourlyRate * this.hoursWorked;
    };
    return PartTimeEmployee;
}(Employee));
var emp1 = new FullTimeEmployee("Ali", "FT001", 3000, 500);
var emp2 = new PartTimeEmployee("Hassan", "PT001", 20, 120);
emp1.showInfo();
emp2.showInfo();
