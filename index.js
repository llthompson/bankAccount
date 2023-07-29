//what are we doing? making a bank account? 

class BankAccount {
    constructor(accountNumber, owner) {
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.transactions = [];
    }

    balance() {
        let sum = 0;
        for (let i = 0; i < this.transactions.length; i++) {
            sum += this.transactions[i].amount;
        }
        return sum;
    }

    charge(amt, payee) {
        const cheese = new Transaction(amt, payee);
        this.transactions.push(cheese);
    }

    deposit(amt) {
        if (amt > 0) {
            const aDeposit = new Transaction(amt, this.accountNumber);
            this.transactions.push(aDeposit);
        } else {
            console.log('Cannot deposit less than $0.01')
        }
    }

    getTransactions() {
        return this.transactions;
    }
}

class Transaction {
    constructor(amount, payee) {
        this.amount = amount;
        this.payee = payee;
        this.date = new Date();
    }
}

const lisaAcct = new BankAccount('3456243', 'Lisa');
console.log('Bank Account Testing:')
console.log(lisaAcct.deposit(18))
console.log(lisaAcct.deposit(45))
console.log(lisaAcct.charge(-22, 'bob'))
console.log(lisaAcct.charge(99, 'jane'))
console.log(lisaAcct.balance());
console.log(lisaAcct.getTransactions())

console.log('End Testing')
