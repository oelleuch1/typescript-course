// Enums in TypeScript provide a way to define a set of named constants.

// We define a numeric enum called 'Direction' with four values.
const Up = 0;
const Donw = 1;
const Left = 2;
const Right = 3;

enum Direction {
    Up, Down, Left, Right,
}

enum Tabs {
    Home = 0,
    About = 1,
    Contact = 2,
}

const tabs = [
    { title: 'Home', content: 'Home page' },
    { title: 'About', content: 'About page' },
    { title: 'Contact', content: 'Contact page' },
]

const aboutPageInfos = tabs[Tabs.About]


const tabsObject = {
    home: { title: 'Home', content: 'Home page' },
    about: { title: 'About', content: 'About page' },
    contact: { title: 'Contact', content: 'Contact page' },
}

enum TabsObject {
    Home = 'home',
    About = 'about',
    Contact = 'contact',
}

const aboutPageInfosObject = tabsObject[TabsObject.About]

console.log(Direction.Up);

// We create a constant variable called 'playerDirection' and assign it a value from the 'Direction' enum.
const playerDirection = Direction.Right;

// We define a string enum called 'Color' with three values.
enum Color {
    Red = "red",
    Green = "green",
    Blue = "blue",
}

// We create a constant variable called 'favoriteColor' and assign it a value from the 'Color' enum.
const favoriteColor = Color.Green;

// We define a heterogeneous enum called 'Status' with two values: a numeric value and a string value.
enum Status {
    Success = "success",
    Error = 500,
}

// We create a constant variable called 'serverStatus' and assign it a value from the 'Status' enum.
const serverStatus = Status.Error;

// We log the values of the 'playerDirection', 'favoriteColor', and 'serverStatus' variables to the console.
console.log(playerDirection);
console.log(favoriteColor);
console.log(serverStatus);
