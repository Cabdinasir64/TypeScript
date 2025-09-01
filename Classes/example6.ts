abstract class Employee {
    protected baseSalary: number;
    public name: string;
    private id: string;

    constructor(name: string, id: string, baseSalary: number) {
        if (!name || baseSalary < 0) throw new Error("Invalid employee data");
        this.name = name;
        this.id = id;
        this.baseSalary = baseSalary;
    }

    abstract calculateSalary(): number;

    protected showId() {
        console.log(`Employee ID: ${this.id}`);
    }

    public showInfo() {
        console.log(`Employee Name: ${this.name}, Salary: $${this.calculateSalary()}`);
        this.showId();
    }
}

class FullTimeEmployee extends Employee {
    private bonus: number;

    constructor(name: string, id: string, baseSalary: number, bonus: number) {
        super(name, id, baseSalary);
        this.bonus = bonus;
    }

    calculateSalary(): number {
        return this.baseSalary + this.bonus;
    }
}

class PartTimeEmployee extends Employee {
    private hoursWorked: number;
    private hourlyRate: number;

    constructor(name: string, id: string, hourlyRate: number, hoursWorked: number) {
        super(name, id, 0);
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }

    calculateSalary(): number {
        return this.hourlyRate * this.hoursWorked;
    }
}

const emp1 = new FullTimeEmployee("Ali", "FT001", 3000, 500);
const emp2 = new PartTimeEmployee("Hassan", "PT001", 20, 120);

emp1.showInfo();
emp2.showInfo();
