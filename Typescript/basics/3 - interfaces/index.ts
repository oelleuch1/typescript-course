// An interface in TypeScript defines a contract that objects can conform to.
// It specifies a set of properties and their types that an object must have in order to be considered an instance of that interface.

// We define an interface called 'Person' with three properties: 'firstName', 'lastName', and 'age'.
interface Person {
    firstName: string;
    lastName: string;
    age: number;
}

// We create a constant variable called 'person' and assign it an object that implements the 'Person' interface.
const person: Person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
};

// We can also define optional properties in interfaces using the '?' operator.
interface OptionalPerson {
    firstName: string;
    lastName?: string;
    age?: number;
}

// We create a constant variable called 'optionalPerson' and assign it an object that implements the 'OptionalPerson' interface.
const optionalPerson: OptionalPerson = {
    firstName: "Jane",
};

// optionalPerson.firstName = "John";

// We can also define readonly properties in interfaces using the 'readonly' keyword.
interface ReadonlyPerson {
    readonly firstName: string;
    readonly lastName: string;
    readonly age: number;
}

// We create a constant variable called 'readonlyPerson' and assign it an object that implements the 'ReadonlyPerson' interface.
const readonlyPerson: ReadonlyPerson = {
    firstName: "Bob",
    lastName: "Smith",
    age: 40,
};

// readonlyPerson.firstName = "John";  (Throw an error)

// We define an interface called 'Employee' that extends the 'Person' interface and adds a new property called 'jobTitle'.
interface Employee extends Person {
    jobTitle: string;
}

// We create a constant variable called 'employee' and assign it an object that implements the 'Employee' interface.
const employee: Employee = {
    firstName: "Jane",
    lastName: "Smith",
    age: 28,
    jobTitle: "Software Engineer",
};
