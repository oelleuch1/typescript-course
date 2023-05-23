// We define a class called 'Account' with properties for 'id', 'username', and 'email', and a constructor that sets these properties.
class Account {
    private static nextId = 1;
    private id: number;
    public readonly username: string;
    private email: string;

    constructor(username: string, email: string) {
        this.id = Account.nextId++;
        this.username = username;
        this.email = email;
    }

    // We define a method called 'getUsername' that returns the username property.
    getUsername() {
        return this.username;
    }

    setId(id: number) {
        this.id = id;
    }

    // We define a method called 'setEmail' that sets the email property.
    setEmail(email: string) {
        this.email = email;
    }

    // We define a static property called 'totalAccounts' that is shared by all instances of the 'Account' class.
    static totalAccounts = 0;

    // We define a static method called 'getTotalAccounts' that returns the value of the 'totalAccounts' property.
    static getTotalAccounts() {
        return Account.totalAccounts;
    }
}

// We define a subclass of 'Account' called 'PremiumAccount' with an additional property for 'subscriptionLevel'.
class PremiumAccount extends Account {
    private readonly subscriptionLevel: string;

    constructor(username: string, email: string, subscriptionLevel: string) {
        super(username, email); // Account.constructor(username, email)
        this.subscriptionLevel = subscriptionLevel;
    }

    // We define a method called 'getSubscriptionLevel' that returns the subscriptionLevel property.
    getSubscriptionLevel() {
        return this.subscriptionLevel;
    }
}

// We create an instance of the 'Account' class with a username and email, and call the 'getUsername' method.
let account1 = new Account("johndoe", "johndoe@example.com");
console.log(account1.getUsername());

// We create an instance of the 'PremiumAccount' class with a username, email, and subscription level, and call the 'getSubscriptionLevel' method.
let account2 = new PremiumAccount("janedoe", "janedoe@example.com", "gold");
console.log(account2.getSubscriptionLevel());

// We access the 'totalAccounts' property and 'getTotalAccounts' method of the 'Account' class.
console.log(Account.totalAccounts);
console.log(Account.getTotalAccounts());

// const firstAccount = new Account("johndoe", "johndoe@example");
// console.log(Account.nextId)
// const secondAccount = new Account("john", "john@example");
// console.log(Account.nextId);
// firstAccount.nextId = 1; // not allowed
// Account.nextId = 2; // allowed

// account.id = 1; // not allowed
// account.setId(100); // allowed

// account.username = 1;


class Person {
    public static nextId: number = 1;
    public id: number;
    public name: string;

    constructor(id: number, name: string) {
        this.id = Person.nextId;
        this.name = name;
        Person.nextId++;
    }

}

// const firstPerson = new Person("John");
// const secondPerson = new Person("Jane");