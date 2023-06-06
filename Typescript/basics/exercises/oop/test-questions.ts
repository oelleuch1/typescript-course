// Test Plan for TypeScript eCommerce Exercises
// Topics: Class (OOP), Enum, Interface, Function Annotations, Inheritance, Abstract Classes, Static Methods

// Test Case 1: Verify the Customer class
// 1.1. Test if a valid Customer object can be created with required properties: id, firstName, lastName, and email.
// 1.2. Test if the getFullName method returns the correct full name of the customer.

// Test Case 2: Verify the applyDiscount function
// 2.1. Test if the applyDiscount function correctly applies a given discount percentage to a product's price.
// 2.2. Test if the applyDiscount function correctly handles edge cases (e.g. 0% discount, 100% discount, negative discount).

// Test Case 3: Verify the Order class
// 3.1. Test if a valid Order object can be created with required properties: id, customer, and products.
// 3.2. Test the addProduct method, checking if it correctly adds a product to the order.
// 3.3. Test the removeProduct method, checking if it correctly removes a product from the order by its id.
// 3.4. Test the getTotal method, checking if it correctly returns the total price of the order.

// Test Case 4: Verify the Inventory class
// 4.1. Test if a valid Inventory object can be created with required properties: id and products.
// 4.2. Test the addProduct method, checking if it correctly adds a product to the inventory.
// 4.3. Test the removeProduct method, checking if it correctly removes a product from the inventory by its id.
// 4.4. Test the findProductById method, checking if it returns the correct product by its id or undefined if not found.
// 4.5. Test the findProductsByCategory method, checking if it returns an array of products with the specified category.

// Test Case 5: Verify the BaseEntity abstract class and its integration with other classes
// 5.1. Test if the BaseEntity class provides a unique ID for each instance of its derived classes (Customer, Product, Order, Inventory).
// 5.2. Test if the BaseEntity class does not allow direct instantiation.

// Test Case 6: Verify the ProductInventory class
// 6.1. Test if a valid ProductInventory object can be created with required properties: id and products.
// 6.2. Test the restock method, checking if it correctly updates the product's quantity in the inventory.

// Test Case 7: Verify the VIPCustomer class
// 7.1. Test if a valid VIPCustomer object can be created with required properties: id, firstName, lastName, and email.
// 7.2. Test if the getFullName method for a VIPCustomer object returns the correct full name with the "VIP" prefix.
