//=====================
// Utility Types in TypeScript
//=====================

interface Person {
  name: string;
  age: number;
  address: string;
}

type PartialPerson = Partial<Person>;

interface Point {
  x: number;
  y: number;
}

type ReadonlyPoint = Readonly<Point>;

interface Config {
  apiKey?: string;
  endpoint?: string;
}

type RequiredConfig = Required<Config>;

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

type ProductInfo = Pick<Product, "name" | "price">;

interface User {
  id: number;
  username: string;
  email: string;
  role: string;
}

type PublicUser = Omit<User, "email" | "role">;

type Car = "sedan" | "suv" | "hatchback";
type CarInventory = Record<Car, number>;

const inventory: CarInventory = {
  sedan: 10,
  suv: 5,
  hatchback: 8,
};

type Colors = "red" | "blue" | "green";
type NonRedColors = Exclude<Colors, "red">; // Equivalent to: 'blue' | 'green'

type BlueOrGreen = Extract<Colors, "blue" | "green">; // Equivalent to: 'blue' | 'green'

type Value = string | null | undefined;
type NonNullValue = NonNullable<Value>; // Equivalent to: string

function greet(name: string): string {
  return `Hello, ${name}!`;
}

type Greeting = ReturnType<typeof greet>;

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
