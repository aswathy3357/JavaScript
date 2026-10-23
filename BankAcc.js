class BankAccount{

    #balance
    AccountHolder 
    constructor(initialBalance,AccountHolder){
        this.#balance = initialBalance;
        this.AccountHolder = AccountHolder;
    }

    showBalance()
    {
        console.log(this.#balance);
    }

    deposit(depositAmount){
        if (depositAmount>0)
        {
            this.#balance +=depositAmount;
        }
        else
            console.log("Invalid deposit amount");
    }

    withdraw(withdrawAmount)
    {
        if (withdrawAmount>0)
        {
            this.#balance -= withdrawAmount;
        }
        else
            console.log("Invalid withdraw amount");
    }

}

const BA1 = new BankAccount(100,"John");
BA1.showBalance();
BA1.deposit(50);
BA1.showBalance();
BA1.withdraw(10);
BA1.showBalance();
//BA1.AccountHolder = "Mary"
