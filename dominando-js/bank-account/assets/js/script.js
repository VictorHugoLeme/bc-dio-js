class BankAccount {
    constructor(agency, num, type, balance) {
        this.agency = agency;
        this.num = num;
        this.type = type;
        this._balance = balance;
    }

    get balance() {
        return "$ " + this._balance;
    }

    set balance(value) {
        this._balance = value;
    }

    draw(value) {
        if (value <= this._balance) {
            this._balance -= value;
            return true;
        }
        return false;
    }

    deposit(value) {
        this._balance += value;
    }
}

class CheckingAccount extends BankAccount {
    constructor(agency, num, balance, creditCard) {
        super(agency, num, balance);
        this.type = "Checking Account";
        this.creditCard = creditCard;
    }

    getCreditCard() {
        return this.creditCard;
    }

    setCreditCard(creditCard) {
        this.creditCard = creditCard;
    }
}

class SavingsAccount extends BankAccount {
    constructor(agency, num, balance) {
        super(agency, num, balance);
        this.type = "Savings Account";
    }
}

class StudentAccount extends BankAccount {
    constructor(agency, num, balance) {
        super(agency, num, balance);
        this.type = "Student Account";
        this._balance = balance;
    }

    draw(value) {
        if (value <= 500) {
            return super.draw(value);
        }
        return false;
    }
}


var input = document.getElementById('input');
var green = document.getElementById('green');
var red = document.getElementById('red');

var balanceDisplay = document.getElementById('balance');
var account = new StudentAccount(123, 456, 1000);

balanceDisplay.innerHTML = account.balance;

function lights(color) {
    if (color == 'green') {
        green.style.display = 'block';
        red.style.display = 'none';
    } else {
        green.style.display = 'none';
        red.style.display = 'block';
    }
}

lights('red')

function draw() {

    if (account.draw(Number(input.value))) {
        balanceDisplay.innerHTML = account.balance;
        lights('green')
    } else {
        lights('red')
    }
}

function deposit() {
    account.deposit(Number(input.value));
    balanceDisplay.innerHTML = account.balance;
    lights('red')
}


