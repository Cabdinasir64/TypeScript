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
var Account = /** @class */ (function () {
    function Account(accountHolder, accountNumber, balance) {
        this.accountHolder = accountHolder;
        this.accountNumber = accountNumber;
        this.balance = balance;
        console.log("\u2705 Account created for ".concat(this.accountHolder));
        console.log("   Account Number: ".concat(this.accountNumber));
        console.log("   Initial Balance: $".concat(this.balance, "\n"));
    }
    Account.prototype.deposit = function (amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log("\uD83D\uDCB0 ".concat(this.accountHolder, " deposited $").concat(amount));
            console.log("   \u27A1\uFE0F New Balance: $".concat(this.balance, "\n"));
        }
    };
    Account.prototype.getBalance = function () {
        console.log("\uD83D\uDCCA Balance check for ".concat(this.accountHolder, ": $").concat(this.balance, "\n"));
        return this.balance;
    };
    Account.prototype.showAccountNumber = function () {
        console.log("\uD83D\uDD10 Account Number: ".concat(this.accountNumber));
    };
    return Account;
}());
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.interestRate = 0.05;
        return _this;
    }
    SavingsAccount.prototype.addInterest = function () {
        var interest = this.balance * this.interestRate;
        this.balance += interest;
        console.log("\uD83D\uDCB9 Interest added to ".concat(this.accountHolder));
        console.log("   Interest Amount: $".concat(interest));
        console.log("   \u27A1\uFE0F New Balance: $".concat(this.balance, "\n"));
    };
    SavingsAccount.prototype.showAccount = function () {
        console.log("\uD83C\uDFE6 Savings Account Summary");
        console.log("   Holder: ".concat(this.accountHolder));
        console.log("   Balance: $".concat(this.balance));
        this.showAccountNumber();
        console.log("-------------------------------------------------\n");
    };
    return SavingsAccount;
}(Account));
var CheckingAccount = /** @class */ (function (_super) {
    __extends(CheckingAccount, _super);
    function CheckingAccount() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.overdraftLimit = 500;
        return _this;
    }
    CheckingAccount.prototype.withdraw = function (amount) {
        if (amount <= this.balance + this.overdraftLimit) {
            this.balance -= amount;
            console.log("\uD83D\uDCB8 ".concat(this.accountHolder, " withdrew $").concat(amount));
            console.log("   \u27A1\uFE0F New Balance: $".concat(this.balance, "\n"));
        }
        else {
            console.log("\u26D4 Withdrawal denied for ".concat(this.accountHolder));
            console.log("   Requested: $".concat(amount));
            console.log("   Available (with overdraft): $".concat(this.balance + this.overdraftLimit, "\n"));
        }
    };
    CheckingAccount.prototype.showAccount = function () {
        console.log("\uD83C\uDFE6 Checking Account Summary");
        console.log("   Holder: ".concat(this.accountHolder));
        console.log("   Balance: $".concat(this.balance));
        this.showAccountNumber();
        console.log("-------------------------------------------------\n");
    };
    return CheckingAccount;
}(Account));
var Newperson1 = new Account("Charlie", "ACC001", 5000);
Newperson1.deposit(1000);
Newperson1.getBalance();
var acc1 = new SavingsAccount("Alice", "SAV001", 3000);
acc1.deposit(500);
acc1.addInterest();
acc1.showAccount();
var acc2 = new CheckingAccount("Bob", "CHK001", 1000);
acc2.deposit(200);
acc2.withdraw(800);
acc2.withdraw(1000);
acc2.showAccount();
