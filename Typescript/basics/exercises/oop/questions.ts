// TypeScript Advanced Exercise File
// Topics: Inheritance, Abstract Classes, Static Methods
// Domain: eCommerce

// Exercise 1: Create an abstract class "BaseEntity" with a static property "idCounter" initialized with 0,
// a constructor that accepts an "id" property (number), and a static method "generateId" that increments and
// returns the "idCounter" value.

// Your code here

// Exercise 2: Make the "Customer", "Product", "Order", and "Inventory" classes extend "BaseEntity".
// Update their constructors to call the "super()" method with a generated ID. Remove the "id" parameter from
// their constructors.

// Your code here

// Exercise 3: Add a "ProductInventory" class which extends "Inventory" and adds a "restock" method that takes
// a product ID and a quantity, and updates the product's quantity in the inventory.

// Your code here

// Exercise 4: Add a "quantity" property to the "Product" interface and update the "applyDiscount" function
// to also accept a quantity parameter. Update the "Order" class to handle product quantities in the
// "addProduct", "removeProduct", and "getTotal" methods.

// Your code here

// Exercise 5: Add a "VIPCustomer" class which extends the "Customer" class and overrides the "getFullName"
// method to add a "VIP" prefix to the customer's full name.

// Your code here
