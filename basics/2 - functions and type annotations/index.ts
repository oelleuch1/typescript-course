// We define a function called 'add' that takes two numbers as arguments and returns their sum.
function add(a: number, b: number): number {
    return a + b;
}

function addWithoutReturn(a: number, b: number): void {
    console.log('Add without return: ', a + b);
}

// We call the 'add' function with two numbers and store the result in a constant variable called 'sum'.
const sum: number = add(3, 4);

// We define an arrow function called 'multiply' that takes two numbers as arguments and returns their product.
const multiply = (a: number, b: number): number => a * b;

multiply(3, 4);
