interface CartItem<T> {
    id: number;
    name: string;
    price: number;
    quantity: T;
}

class ShoppingCart<T extends CartItem<number>> {
    items: T[];

    constructor() {
        this.items = [];
    }

    addItem(item: T) {
        this.items.push(item);
    }

    getTotal(): number {
        const total: number = this.items.reduce((total: number, item: T) => {
            return total + item.price * item.quantity;
        }, 0);

        return isNaN(total) ? 0 : total;
    }
}

const cart1 = new ShoppingCart<CartItem<number>>();
cart1.addItem({ id: 1, name: "T-shirt", price: 19.99, quantity: 2 });
cart1.addItem({ id: 2, name: "Jeans", price: 49.99, quantity: 1 });
console.log(cart1.getTotal()); // 89.97

// @ts-ignore
const cart2 = new ShoppingCart<CartItem<string>>();
cart2.addItem({ id: 3, name: "Sneakers", price: 79.99, quantity: "1 pair" });
console.log(cart2.getTotal()); // 79.99

enum ProductCategory {
    Clothing = "Clothing",
    Electronics = "Electronics",
}

class Product<T extends ProductCategory> {
    id: number;
    name: string;
    price: number;
    category: T;

    constructor(id: number, name: string, price: number, category: T) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
}

const tshirt = new Product<ProductCategory.Clothing>(1, "T-shirt", 19.99, ProductCategory.Clothing);
const iphone = new Product<ProductCategory.Electronics>(2, "iPhone", 999.99, ProductCategory.Electronics);

interface FilterFn<T> {
    (item: T): boolean;
}

interface FilteredProduct {
    id: number;
    name: string;
    price: number;
    category: string;
}

const products: FilteredProduct[] = [
    { id: 1, name: "T-shirt", price: 19.99, category: "Clothing" },
    { id: 2, name: "Jeans", price: 49.99, category: "Clothing" },
    { id: 3, name: "Sneakers", price: 79.99, category: "Shoes" },
    { id: 4, name: "iPhone", price: 999.99, category: "Electronics" },
];

function filter<T>(items: T[], filterFn: FilterFn<T>): T[] {
    return items.filter(filterFn);
}

const filteredProducts = filter<FilteredProduct>(products, (product) => product.price < 50);
console.log(filteredProducts);
