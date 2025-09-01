#include <iostream>
#include <string>
#include <iomanip> 

class Account {
protected:
    double balance;
    std::string accountNumber;
public:
    std::string accountHolder;

    Account(std::string holder, std::string number, double bal) {
        accountHolder = holder;
        accountNumber = number;
        balance = bal;

        std::cout << "✅ Account created for " << accountHolder << std::endl;
        std::cout << "   Account Number: " << accountNumber << std::endl;
        std::cout << "   Initial Balance: $" << balance << "\n\n";
    }

    void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            std::cout << "💰 " << accountHolder << " deposited $" << amount << std::endl;
            std::cout << "   ➡️ New Balance: $" << balance << "\n\n";
        }
    }

    double getBalance() {
        std::cout << "📊 Balance check for " << accountHolder << ": $" << balance << "\n\n";
        return balance;
    }

protected:
    void showAccountNumber() {
        std::cout << "🔐 Account Number: " << accountNumber << std::endl;
    }
};

class SavingsAccount : public Account {
public:
    double interestRate;

    SavingsAccount(std::string holder, std::string number, double bal)
        : Account(holder, number, bal) {
        interestRate = 0.05;
    }

    void addInterest() {
        double interest = balance * interestRate;
        balance += interest;
        std::cout << "💹 Interest added to " << accountHolder << std::endl;
        std::cout << "   Interest Amount: $" << interest << std::endl;
        std::cout << "   ➡️ New Balance: $" << balance << "\n\n";
    }

    void showAccount() {
        std::cout << "🏦 Savings Account Summary" << std::endl;
        std::cout << "   Holder: " << accountHolder << std::endl;
        std::cout << "   Balance: $" << balance << std::endl;
        showAccountNumber();
        std::cout << "-------------------------------------------------\n\n";
    }
};

class CheckingAccount : public Account {
public:
    double overdraftLimit;

    CheckingAccount(std::string holder, std::string number, double bal)
        : Account(holder, number, bal) {
        overdraftLimit = 500;
    }

    void withdraw(double amount) {
        if (amount <= balance + overdraftLimit) {
            balance -= amount;
            std::cout << "💸 " << accountHolder << " withdrew $" << amount << std::endl;
            std::cout << "   ➡️ New Balance: $" << balance << "\n\n";
        } else {
            std::cout << "⛔ Withdrawal denied for " << accountHolder << std::endl;
            std::cout << "   Requested: $" << amount << std::endl;
            std::cout << "   Available (with overdraft): $" << balance + overdraftLimit << "\n\n";
        }
    }

    void showAccount() {
        std::cout << "🏦 Checking Account Summary" << std::endl;
        std::cout << "   Holder: " << accountHolder << std::endl;
        std::cout << "   Balance: $" << balance << std::endl;
        showAccountNumber();
        std::cout << "-------------------------------------------------\n\n";
    }
};

int main() {
    Account Newperson1("Charlie", "ACC001", 5000);
    Newperson1.deposit(1000);
    Newperson1.getBalance();

    SavingsAccount acc1("Alice", "SAV001", 3000);
    acc1.deposit(500);
    acc1.addInterest();
    acc1.showAccount();

    CheckingAccount acc2("Bob", "CHK001", 1000);
    acc2.deposit(200);
    acc2.withdraw(800);
    acc2.withdraw(1000);
    acc2.showAccount();

    return 0;
}
#include <iostream>
#include <string>
#include <iomanip> 

class Account {
protected:
    double balance;
    std::string accountNumber;
public:
    std::string accountHolder;

    Account(std::string holder, std::string number, double bal) {
        accountHolder = holder;
        accountNumber = number;
        balance = bal;

        std::cout << "✅ Account created for " << accountHolder << std::endl;
        std::cout << "   Account Number: " << accountNumber << std::endl;
        std::cout << "   Initial Balance: $" << balance << "\n\n";
    }

    void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            std::cout << "💰 " << accountHolder << " deposited $" << amount << std::endl;
            std::cout << "   ➡️ New Balance: $" << balance << "\n\n";
        }
    }

    double getBalance() {
        std::cout << "📊 Balance check for " << accountHolder << ": $" << balance << "\n\n";
        return balance;
    }

protected:
    void showAccountNumber() {
        std::cout << "🔐 Account Number: " << accountNumber << std::endl;
    }
};

class SavingsAccount : public Account {
public:
    double interestRate;

    SavingsAccount(std::string holder, std::string number, double bal)
        : Account(holder, number, bal) {
        interestRate = 0.05;
    }

    void addInterest() {
        double interest = balance * interestRate;
        balance += interest;
        std::cout << "💹 Interest added to " << accountHolder << std::endl;
        std::cout << "   Interest Amount: $" << interest << std::endl;
        std::cout << "   ➡️ New Balance: $" << balance << "\n\n";
    }

    void showAccount() {
        std::cout << "🏦 Savings Account Summary" << std::endl;
        std::cout << "   Holder: " << accountHolder << std::endl;
        std::cout << "   Balance: $" << balance << std::endl;
        showAccountNumber();
        std::cout << "-------------------------------------------------\n\n";
    }
};

class CheckingAccount : public Account {
public:
    double overdraftLimit;

    CheckingAccount(std::string holder, std::string number, double bal)
        : Account(holder, number, bal) {
        overdraftLimit = 500;
    }

    void withdraw(double amount) {
        if (amount <= balance + overdraftLimit) {
            balance -= amount;
            std::cout << "💸 " << accountHolder << " withdrew $" << amount << std::endl;
            std::cout << "   ➡️ New Balance: $" << balance << "\n\n";
        } else {
            std::cout << "⛔ Withdrawal denied for " << accountHolder << std::endl;
            std::cout << "   Requested: $" << amount << std::endl;
            std::cout << "   Available (with overdraft): $" << balance + overdraftLimit << "\n\n";
        }
    }

    void showAccount() {
        std::cout << "🏦 Checking Account Summary" << std::endl;
        std::cout << "   Holder: " << accountHolder << std::endl;
        std::cout << "   Balance: $" << balance << std::endl;
        showAccountNumber();
        std::cout << "-------------------------------------------------\n\n";
    }
};

int main() {
    Account Newperson1("Charlie", "ACC001", 5000);
    Newperson1.deposit(1000);
    Newperson1.getBalance();

    SavingsAccount acc1("Alice", "SAV001", 3000);
    acc1.deposit(500);
    acc1.addInterest();
    acc1.showAccount();

    CheckingAccount acc2("Bob", "CHK001", 1000);
    acc2.deposit(200);
    acc2.withdraw(800);
    acc2.withdraw(1000);
    acc2.showAccount();

    return 0;
}
#include <iostream>
#include <string>
#include <iomanip> 

class Account {
protected:
    double balance;
    std::string accountNumber;
public:
    std::string accountHolder;

    Account(std::string holder, std::string number, double bal) {
        accountHolder = holder;
        accountNumber = number;
        balance = bal;

        std::cout << "✅ Account created for " << accountHolder << std::endl;
        std::cout << "   Account Number: " << accountNumber << std::endl;
        std::cout << "   Initial Balance: $" << balance << "\n\n";
    }

    void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            std::cout << "💰 " << accountHolder << " deposited $" << amount << std::endl;
            std::cout << "   ➡️ New Balance: $" << balance << "\n\n";
        }
    }

    double getBalance() {
        std::cout << "📊 Balance check for " << accountHolder << ": $" << balance << "\n\n";
        return balance;
    }

protected:
    void showAccountNumber() {
        std::cout << "🔐 Account Number: " << accountNumber << std::endl;
    }
};

class SavingsAccount : public Account {
public:
    double interestRate;

    SavingsAccount(std::string holder, std::string number, double bal)
        : Account(holder, number, bal) {
        interestRate = 0.05;
    }

    void addInterest() {
        double interest = balance * interestRate;
        balance += interest;
        std::cout << "💹 Interest added to " << accountHolder << std::endl;
        std::cout << "   Interest Amount: $" << interest << std::endl;
        std::cout << "   ➡️ New Balance: $" << balance << "\n\n";
    }

    void showAccount() {
        std::cout << "🏦 Savings Account Summary" << std::endl;
        std::cout << "   Holder: " << accountHolder << std::endl;
        std::cout << "   Balance: $" << balance << std::endl;
        showAccountNumber();
        std::cout << "-------------------------------------------------\n\n";
    }
};

class CheckingAccount : public Account {
public:
    double overdraftLimit;

    CheckingAccount(std::string holder, std::string number, double bal)
        : Account(holder, number, bal) {
        overdraftLimit = 500;
    }

    void withdraw(double amount) {
        if (amount <= balance + overdraftLimit) {
            balance -= amount;
            std::cout << "💸 " << accountHolder << " withdrew $" << amount << std::endl;
            std::cout << "   ➡️ New Balance: $" << balance << "\n\n";
        } else {
            std::cout << "⛔ Withdrawal denied for " << accountHolder << std::endl;
            std::cout << "   Requested: $" << amount << std::endl;
            std::cout << "   Available (with overdraft): $" << balance + overdraftLimit << "\n\n";
        }
    }

    void showAccount() {
        std::cout << "🏦 Checking Account Summary" << std::endl;
        std::cout << "   Holder: " << accountHolder << std::endl;
        std::cout << "   Balance: $" << balance << std::endl;
        showAccountNumber();
        std::cout << "-------------------------------------------------\n\n";
    }
};

int main() {
    Account Newperson1("Charlie", "ACC001", 5000);
    Newperson1.deposit(1000);
    Newperson1.getBalance();

    SavingsAccount acc1("Alice", "SAV001", 3000);
    acc1.deposit(500);
    acc1.addInterest();
    acc1.showAccount();

    CheckingAccount acc2("Bob", "CHK001", 1000);
    acc2.deposit(200);
    acc2.withdraw(800);
    acc2.withdraw(1000);
    acc2.showAccount();

    return 0;
}
#include <iostream>
#include <string>
#include <iomanip> 

class Account {
protected:
    double balance;
    std::string accountNumber;
public:
    std::string accountHolder;

    Account(std::string holder, std::string number, double bal) {
        accountHolder = holder;
        accountNumber = number;
        balance = bal;

        std::cout << "✅ Account created for " << accountHolder << std::endl;
        std::cout << "   Account Number: " << accountNumber << std::endl;
        std::cout << "   Initial Balance: $" << balance << "\n\n";
    }

    void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            std::cout << "💰 " << accountHolder << " deposited $" << amount << std::endl;
            std::cout << "   ➡️ New Balance: $" << balance << "\n\n";
        }
    }

    double getBalance() {
        std::cout << "📊 Balance check for " << accountHolder << ": $" << balance << "\n\n";
        return balance;
    }

protected:
    void showAccountNumber() {
        std::cout << "🔐 Account Number: " << accountNumber << std::endl;
    }
};

class SavingsAccount : public Account {
public:
    double interestRate;

    SavingsAccount(std::string holder, std::string number, double bal)
        : Account(holder, number, bal) {
        interestRate = 0.05;
    }

    void addInterest() {
        double interest = balance * interestRate;
        balance += interest;
        std::cout << "💹 Interest added to " << accountHolder << std::endl;
        std::cout << "   Interest Amount: $" << interest << std::endl;
        std::cout << "   ➡️ New Balance: $" << balance << "\n\n";
    }

    void showAccount() {
        std::cout << "🏦 Savings Account Summary" << std::endl;
        std::cout << "   Holder: " << accountHolder << std::endl;
        std::cout << "   Balance: $" << balance << std::endl;
        showAccountNumber();
        std::cout << "-------------------------------------------------\n\n";
    }
};

class CheckingAccount : public Account {
public:
    double overdraftLimit;

    CheckingAccount(std::string holder, std::string number, double bal)
        : Account(holder, number, bal) {
        overdraftLimit = 500;
    }

    void withdraw(double amount) {
        if (amount <= balance + overdraftLimit) {
            balance -= amount;
            std::cout << "💸 " << accountHolder << " withdrew $" << amount << std::endl;
            std::cout << "   ➡️ New Balance: $" << balance << "\n\n";
        } else {
            std::cout << "⛔ Withdrawal denied for " << accountHolder << std::endl;
            std::cout << "   Requested: $" << amount << std::endl;
            std::cout << "   Available (with overdraft): $" << balance + overdraftLimit << "\n\n";
        }
    }

    void showAccount() {
        std::cout << "🏦 Checking Account Summary" << std::endl;
        std::cout << "   Holder: " << accountHolder << std::endl;
        std::cout << "   Balance: $" << balance << std::endl;
        showAccountNumber();
        std::cout << "-------------------------------------------------\n\n";
    }
};

int main() {
    Account Newperson1("Charlie", "ACC001", 5000);
    Newperson1.deposit(1000);
    Newperson1.getBalance();

    SavingsAccount acc1("Alice", "SAV001", 3000);
    acc1.deposit(500);
    acc1.addInterest();
    acc1.showAccount();

    CheckingAccount acc2("Bob", "CHK001", 1000);
    acc2.deposit(200);
    acc2.withdraw(800);
    acc2.withdraw(1000);
    acc2.showAccount();

    return 0;
}
#include <iostream>
#include <string>
#include <iomanip> 

class Account {
protected:
    double balance;
    std::string accountNumber;
public:
    std::string accountHolder;

    Account(std::string holder, std::string number, double bal) {
        accountHolder = holder;
        accountNumber = number;
        balance = bal;

        std::cout << "✅ Account created for " << accountHolder << std::endl;
        std::cout << "   Account Number: " << accountNumber << std::endl;
        std::cout << "   Initial Balance: $" << balance << "\n\n";
    }

    void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            std::cout << "💰 " << accountHolder << " deposited $" << amount << std::endl;
            std::cout << "   ➡️ New Balance: $" << balance << "\n\n";
        }
    }

    double getBalance() {
        std::cout << "📊 Balance check for " << accountHolder << ": $" << balance << "\n\n";
        return balance;
    }

protected:
    void showAccountNumber() {
        std::cout << "🔐 Account Number: " << accountNumber << std::endl;
    }
};

class SavingsAccount : public Account {
public:
    double interestRate;

    SavingsAccount(std::string holder, std::string number, double bal)
        : Account(holder, number, bal) {
        interestRate = 0.05;
    }

    void addInterest() {
        double interest = balance * interestRate;
        balance += interest;
        std::cout << "💹 Interest added to " << accountHolder << std::endl;
        std::cout << "   Interest Amount: $" << interest << std::endl;
        std::cout << "   ➡️ New Balance: $" << balance << "\n\n";
    }

    void showAccount() {
        std::cout << "🏦 Savings Account Summary" << std::endl;
        std::cout << "   Holder: " << accountHolder << std::endl;
        std::cout << "   Balance: $" << balance << std::endl;
        showAccountNumber();
        std::cout << "-------------------------------------------------\n\n";
    }
};

class CheckingAccount : public Account {
public:
    double overdraftLimit;

    CheckingAccount(std::string holder, std::string number, double bal)
        : Account(holder, number, bal) {
        overdraftLimit = 500;
    }

    void withdraw(double amount) {
        if (amount <= balance + overdraftLimit) {
            balance -= amount;
            std::cout << "💸 " << accountHolder << " withdrew $" << amount << std::endl;
            std::cout << "   ➡️ New Balance: $" << balance << "\n\n";
        } else {
            std::cout << "⛔ Withdrawal denied for " << accountHolder << std::endl;
            std::cout << "   Requested: $" << amount << std::endl;
            std::cout << "   Available (with overdraft): $" << balance + overdraftLimit << "\n\n";
        }
    }

    void showAccount() {
        std::cout << "🏦 Checking Account Summary" << std::endl;
        std::cout << "   Holder: " << accountHolder << std::endl;
        std::cout << "   Balance: $" << balance << std::endl;
        showAccountNumber();
        std::cout << "-------------------------------------------------\n\n";
    }
};

int main() {
    Account Newperson1("Charlie", "ACC001", 5000);
    Newperson1.deposit(1000);
    Newperson1.getBalance();

    SavingsAccount acc1("Alice", "SAV001", 3000);
    acc1.deposit(500);
    acc1.addInterest();
    acc1.showAccount();

    CheckingAccount acc2("Bob", "CHK001", 1000);
    acc2.deposit(200);
    acc2.withdraw(800);
    acc2.withdraw(1000);
    acc2.showAccount();

    return 0;
}
