interface Payable {
    calculateSalary(): number;
    pay(): void;
    showDetails(): void;
}

abstract class Employee implements Payable {
    constructor(public name: string, protected baseSalary: number) { }

    abstract calculateSalary(): number;

    pay(): void {
        console.log(`Paid $${this.calculateSalary()} to employee ${this.name}`);
    }

    showDetails(): void {
        console.log(`Employee Name: ${this.name}, Base Salary: $${this.baseSalary}`);
    }
}

class FullTimeEmployee extends Employee {
    private bonus: number;

    constructor(name: string, baseSalary: number, bonus: number) {
        super(name, baseSalary);
        this.bonus = bonus;
    }

    calculateSalary(): number {
        return this.baseSalary + this.bonus;
    }
}

class Freelancer implements Payable {
    constructor(public name: string, public rate: number, public hours: number) { }

    calculateSalary(): number {
        return this.rate * this.hours;
    }

    pay(): void {
        console.log(`Paid $${this.calculateSalary()} to freelancer ${this.name}`);
    }

    showDetails(): void {
        console.log(`Freelancer Name: ${this.name}, Hourly Rate: $${this.rate}, Hours Worked: ${this.hours}`);
    }
}

const emp1 = new FullTimeEmployee("Ali", 3000, 500);
const emp2 = new FullTimeEmployee("Hassan", 4000, 700);
const freelancer1 = new Freelancer("Sara", 50, 120);

const payableList: Payable[] = [emp1, emp2, freelancer1];

for (const payable of payableList) {
    payable.showDetails();
    payable.pay();
}

