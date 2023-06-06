// TypeScript Exercise File
// Topics: Class (OOP), Enum, Interface, and Function Annotations
// Domain: eCommerce

// Exercise 1
enum ProductCategory {
    Electronics,
    Clothing,
    Accessories,
}

// Exercise 2
interface Product {
    id: number;
    name: string;
    price: number;
    category: ProductCategory;
}

// Exercise 3
class Customer {
    constructor(
        public id: number,
        public firstName: string,
        public lastName: string,
        public email: string
    ) {}

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Exercise 4
function applyDiscount(product: Product, discountPercentage: number): Product {
    const discountedPrice = product.price * (1 - discountPercentage / 100);
    return { ...product, price: discountedPrice };
}

// Exercise 5
class Order {
    constructor(
        public id: number,
        public customer: Customer,
        public products: Product[] = []
    ) {}

    addProduct(product: Product): void {
        this.products.push(product);
    }

    removeProduct(productId: number): void {
        this.products = this.products.filter((product) => product.id !== productId);
    }

    getTotal(): number {
        return this.products.reduce((total, product) => total + product.price, 0);
    }
}

// Exercise 6
class Inventory {
    constructor(public products: Product[] = []) {}

    addProduct(product: Product): void {
        this.products.push(product);
    }

    removeProduct(productId: number): void {
        this.products = this.products.filter((product) => product.id !== productId);
    }

    findProductById(productId: number): Product | undefined {
        return this.products.find((product) => product.id === productId);
    }

    findProductsByCategory(category: ProductCategory): Product[] {
        return this.products.filter((product) => product.category === category);
    }
}

// Exercise 7
class eCommerce {
    customers: Customer[] = [];
    orders: Order[] = [];
    inventory: Inventory = new Inventory();

    registerCustomer(customer: Customer): void {
        this.customers.push(customer);
    }

    placeOrder(customerId: number, productIds: number[]): void {
        const customer = this.customers.find((c) => c.id === customerId);
        if (!customer) {
            throw new Error("Customer not found");
        }

        const products = productIds
            .map((id) => this.inventory.findProductById(id))
            .filter((product) => product !== undefined) as Product[];

        const order = new Order(customerId, customer, products);
        this.orders.push(order);
    }

    cancelOrder(orderId: number): void {
        this.orders = this.orders.filter((order) => order.id !== orderId);
    }
}

// Exercise 8
const onlineStore = new eCommerce();

const customer1 = new Customer(1, "John", "Doe", "john.doe@example.com");
const customer2 = new Customer(2, "Jane", "Doe", "jane.doe@example.com");
onlineStore.registerCustomer(customer1);
onlineStore.registerCustomer(customer2);

const product1: Product = {
    id: 101,
    name: "Laptop",
    price: 1500,
    category: ProductCategory.Electronics,
};
const product2: Product = {
    id: 102,
    name: "T-Shirt",
    price: 20,
    category: ProductCategory.Clothing,
};
const product3: Product = {
    id: 103,
    name: "Smartphone",
    price: 800,
    category: ProductCategory.Electronics,
};

onlineStore.inventory.addProduct(product1);
onlineStore.inventory.addProduct(product2);
onlineStore.inventory.addProduct(product3);

onlineStore.placeOrder(customer1.id, [101, 102]);
onlineStore.placeOrder(customer2.id, [103]);

console.log("Orders before cancellation:", onlineStore.orders);

onlineStore.cancelOrder(2);

console.log("Orders after cancellation:", onlineStore.orders);

const discountedProduct = applyDiscount(product1, 10);
console.log("Product with discount applied:", discountedProduct);

const electronics = onlineStore.inventory.findProductsByCategory(ProductCategory.Electronics);
console.log("Electronics:", electronics);
