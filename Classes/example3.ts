class Account {
    protected balance: number;
    public accountHolder: string;
    private accountNumber: string;

    constructor(accountHolder: string, accountNumber: string, balance: number) {
        this.accountHolder = accountHolder;
        this.accountNumber = accountNumber;
        this.balance = balance;

        console.log(`✅ Account created for ${this.accountHolder}`);
        console.log(`   Account Number: ${this.accountNumber}`);
        console.log(`   Initial Balance: $${this.balance}\n`);
    }

    public deposit(amount: number) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`💰 ${this.accountHolder} deposited $${amount}`);
            console.log(`   ➡️ New Balance: $${this.balance}\n`);
        }
    }

    public getBalance() {
        console.log(`📊 Balance check for ${this.accountHolder}: $${this.balance}\n`);
        return this.balance;
    }

    protected showAccountNumber() {
        console.log(`🔐 Account Number: ${this.accountNumber}`);
    }
}

class SavingsAccount extends Account {
    public interestRate: number = 0.05;

    public addInterest() {
        const interest = this.balance * this.interestRate;
        this.balance += interest;
        console.log(`💹 Interest added to ${this.accountHolder}`);
        console.log(`   Interest Amount: $${interest}`);
        console.log(`   ➡️ New Balance: $${this.balance}\n`);
    }

    public showAccount() {
        console.log(`🏦 Savings Account Summary`);
        console.log(`   Holder: ${this.accountHolder}`);
        console.log(`   Balance: $${this.balance}`);
        this.showAccountNumber();
        console.log("-------------------------------------------------\n");
    }
}

class CheckingAccount extends Account {
    public overdraftLimit: number = 500;

    public withdraw(amount: number) {
        if (amount <= this.balance + this.overdraftLimit) {
            this.balance -= amount;
            console.log(`💸 ${this.accountHolder} withdrew $${amount}`);
            console.log(`   ➡️ New Balance: $${this.balance}\n`);
        } else {
            console.log(`⛔ Withdrawal denied for ${this.accountHolder}`);
            console.log(`   Requested: $${amount}`);
            console.log(`   Available (with overdraft): $${this.balance + this.overdraftLimit}\n`);
        }
    }

    public showAccount() {
        console.log(`🏦 Checking Account Summary`);
        console.log(`   Holder: ${this.accountHolder}`);
        console.log(`   Balance: $${this.balance}`);
        this.showAccountNumber();
        console.log("-------------------------------------------------\n");
    }
}

const Newperson1 = new Account("Charlie", "ACC001", 5000);


const acc1 = new SavingsAccount("Alice", "SAV001", 3000);
acc1.deposit(500);
acc1.addInterest();
acc1.showAccount();

const acc2 = new CheckingAccount("Bob", "CHK001", 1000);
acc2.deposit(200);
acc2.withdraw(800);
acc2.withdraw(1000);
acc2.showAccount();
