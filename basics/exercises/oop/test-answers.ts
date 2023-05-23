import {
    Customer,
    VIPCustomer,
    Product,
    Order,
    Inventory,
    BaseEntity,
    ProductInventory,
    applyDiscount,
} from './solution';

// Test utility function to compare arrays
function arraysEqual(a: any[], b: any[]): boolean {
    return a.length === b.length && a.every((value, index) => value === b[index]);
}

// Test Case 1: Verify the Customer class
const testCustomer = new Customer('John', 'Doe', 'john.doe@example.com');
console.log('Test Case 1.1:', testCustomer.id === 1);
console.log('Test Case 1.2:', testCustomer.getFullName() === 'John Doe');

// Test Case 2: Verify the applyDiscount function
const testProduct: Product = {
    id: 1,
    name: 'Test Product',
    price: 100,
    quantity: 10,
};
const discountedProduct = applyDiscount(testProduct, 10, 1);
console.log('Test Case 2.1:', discountedProduct.price === 90);

// Test Case 3: Verify the Order class
const testOrder = new Order(testCustomer, [testProduct]);
console.log('Test Case 3.1:', testOrder.id === 1);
console.log('Test Case 3.2:', arraysEqual(testOrder.products, [testProduct]));
testOrder.addProduct({ ...testProduct, id: 2 }, 1);
console.log('Test Case 3.3:', testOrder.products.length === 1);
console.log('Test Case 3.4:', testOrder.getTotal() === 100);

// Test Case 4: Verify the Inventory class
const testInventory = new Inventory([testProduct]);
console.log('Test Case 4.1:', testInventory.id === 1);
testInventory.addProduct({ ...testProduct, id: 2 });
console.log('Test Case 4.2:', testInventory.products.length === 2);
testInventory.removeProduct(2);
console.log('Test Case 4.3:', testInventory.products.length === 1);
console.log('Test Case 4.4:', testInventory.findProductById(1) === testProduct);

// Test Case 5: Verify the BaseEntity abstract class and its integration with other classes
console.log('Test Case 5.1:', testCustomer.id !== testProduct.id && testProduct.id !== testInventory.id);
try {
    // @ts-ignore
    new BaseEntity(0);
    console.log('Test Case 5.2:', false);
} catch (error) {
    console.log('Test Case 5.2:', true);
}

// Test Case 6: Verify the ProductInventory class
const testProductInventory = new ProductInventory([testProduct]);
console.log('Test Case 6.1:', testProductInventory.id === 1);
testProductInventory.restock(1, 10);
console.log('Test Case 6.2:', testProductInventory.products[0].quantity === 20);

// Test Case 7: Verify the VIPCustomer class
const testVIPCustomer = new VIPCustomer('Jane', 'Doe', 'jane.doe@example.com');
console.log('Test Case 7.1:', testVIPCustomer.id === 1);
console.log('Test Case 7.2:', testVIPCustomer.getFullName() === 'VIP Jane Doe');