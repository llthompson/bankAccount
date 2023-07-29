//what are we doing? making a bank account? 

class BankAccount {
    constructor(accountNumber, owner, transactions) {
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

    charge(payee, amt) {
        
    }

    deposit(amt) {
        if (amt > 0) {
            return balance + amt;
        } else {
            console.log('Cannot deposit less than 0')
        }
        console.log(amt)
    }
}

class Transaction {
    constructor(amount, payee) {
        this.amount = amount;
        this.payee = payee;
    }
}