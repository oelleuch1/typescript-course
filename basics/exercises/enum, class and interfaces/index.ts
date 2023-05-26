// TypeScript Exercise File
// Topics: Class (OOP), Enum, Interface, and Function Annotations
// Domain: eCommerce

// Exercise 1: Create an enum named "ProductCategory" with values: Electronics, Clothing, and Accessories

// Your code here
enum ProductCategory {
    Electronics,
    Clothing,
    Accessories
}
// Exercise 2: Create an interface named "Product" with properties "id", "name", "price", and "category"

// Your code here
interface Product {
    id: number;
    name: string;
    price: number;
    category: ProductCategory;
}
// Exercise 3: Create a class named "Customer" with properties "id", "firstName", "lastName", and "email"
// and a method named "getFullName" that returns the full name of the customer

// Your code here
class Customer {
    constructor(public id: number, public firstName: string, public lastName:string, public email: string) {}

    getFullName() {
        return `${this.firstName} ${this.lastName}` 
        // this.firstName + " " + this.lastName
    }
}
// Exercise 4: Create a function named "applyDiscount" that takes two arguments: a Product and a discount percentage
// (number from 0 to 100). The function should return a new Product with the price reduced by the given discount percentage.

// Your code here

function applyDiscount(product: Product, percentage: number): Product {
 if (percentage < 0 && percentage > 100) return product;

 const discountedPrice = product.price * (1 - percentage / 100)
 return { ...product, price: discountedPrice }
}

// Exercise 5: Create a class named "Order" with properties "id", "customer" (type Customer), and "products" (an array of Product)
// Implement the following methods:
// - "addProduct": Adds a product to the order
// - "removeProduct": Removes a product from the order by its id
// - "getTotal": Returns the total price of the order

// Your code here
class Order {
    id: number;
    customer: Customer;
    products: Array<Product>;

    constructor(id: number, customer: Customer, products: Array<Product>) {
    this.id = id;
    this.customer = customer;
    this.products = products;
    }

    addProduct(product: Product): void {
        this.products.push(product);
    }

    removeProduct(productId: number): void {
        this.products.filter(product => product.id !== productId)
    }

    getTotal(): number {
        const total = []
        this.products.every(product => total.push(product.price))
        total +=
        return 
    }



}
// Exercise 6: Create a class named "Inventory" with a property "products" (an array of Product)
// Implement the following methods:
// - "addProduct": Adds a product to the inventory
// - "removeProduct": Removes a product from the inventory by its id
// - "findProductById": Returns a product by its id or undefined if not found
// - "findProductsByCategory": Returns an array of products with the specified category

// Your code here
class Inventory {
    products: Array<Product>

    constructor(products: Product[]) {
        this.products = products;
    }

    addProduct(product: Product): void {
        this.products.push(product);
    }

    removeProduct(productId: number): void {
    this.products = this.products.filter(product => product.id !== productId);
    }

    findProductById(productId: number): Product | undefined {
        return this.products.find(product => product.id === productId);
    }

    findProductsByCategory(category: string): Product[] {
        return this.products.filter(product => product.category === category)
    }

}
// Exercise 7: Create a class named "eCommerce" with properties "customers" (an array of Customer),
// "orders" (an array of Order), and "inventory" (an instance of Inventory)
// Implement the following methods:
// - "registerCustomer": Adds a customer to the list of customers
// - "placeOrder": Takes a customer id, an array of product ids, and creates an Order
// - "cancelOrder": Cancels an order by its id (removes it from the list of orders)

// Your code here
class eCommerce {

    customers: Customer[];
    orders: Order[];
    inventory: Inventory;

    constructor(customers: Array<Customer>, orders: Array<Order>, inventory: Inventory) {
        this.customers = customers;
        this.orders = orders;
        this.inventory = inventory;
      }

      registerCustomer(customer: Customer): void {
        this.customers.push(customer);
      }

      placeOrder(customerId: number, productIds: number): void {

      }

      cancelOrder(orderId: number): void {
        this.orders = this.orders.filter(order => order.id !== orderId);
      }
}
// Exercise 8: Instantiate the eCommerce class, register a few customers, add some products to the inventory,
// place orders, and cancel an order. Check if the methods are working as expected.

// Your code here


// why void?
// difference btw two constructors
// Array / []