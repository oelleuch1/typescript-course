// 1. Define a type called 'Product' with properties: id (number), name (string), price (number), and category (string).
    type Product = {
        id: number;
        name: string;
        price: number;
        category: string;
    }

// 2. We are building a product update feature but the user can update any field of a product independently. 
//    Define a type that represents this partial product data.
    type UpdatedProduct = Partial<Product>
    // does it has to be called PartialProduct??

// 3. Now we want to build a summary card for a product in the UI, but it should only display product id and name. 
//    Create a type that represents this limited product data.
    type SummaryCard = Pick<Product, 'id' | 'name'>

// 4. The marketing team wants to promote products without showing their prices. 
//    Define a type that represents product data without the price.
    type PromoProduct = Omit<Product, 'price'>

// 5. We are implementing a feature for a super user who can only change the prices of the products. 
//    Define a type that represents this specific product data.
    type SuperUserProduct = Pick<CSSMathProduct, 'price'>

// 6. We want to differentiate between different types of products: physical and digital. 
//    Extend the 'Product' type to incorporate this requirement.

// 7. We need to display product data in different ways for different roles: "Customer" and "Admin". 
//    Customers shouldn't see the price, but Admins should see all product information. Create appropriate types.

// 8. We need to store user data. A user has a name, email, and can be either an 'Admin' or 'Customer'. 
//    Additionally, only the 'Admin' user has a property called 'superUser' which is a boolean. Define these user types.

// 9. We want to build a feature to update user information, but the user can update any field independently. 
//    Create a type that represents this partial user data.

// 10. We want to display specific user data in the UI, but it should only display user's name and role. 
//    Create a type that represents this limited user data.

// 11. We are implementing a cart feature. A cart contains an array of products, a total price, and a user. 
//     Define a type that represents a cart.

// 12. Now we want to update the cart, but the user can update any part of the cart independently. 
//     Create a type that represents this partial cart data.

// 13. We want to show a cart summary in the UI. This should only include total price and user name. 
//     Create a type that represents this limited cart data.

// 14. We are implementing a checkout feature. During the checkout, a user can have multiple carts. 
//     Extend the user type to include an array of carts.

// 15. We want to build a feature to update user information during the checkout, but the user can update any field independently, 
//     including the carts. Create a type that represents this partial user data.

// 16. Now, we want to display specific user data during the checkout. This should only include user's name, role, and cart totals. 
//     Create a type that represents this limited user data.

// 17. We are building a feature to display a list of all the products, but for each product, we only want to show its id, name and category. 
//     Create a type that represents this product data.

// 18. We have an external system which sends us the product data as a string of id, name and category separated by a comma. 
//     We need to convert this string into an object of appropriate type. Create a type that represents this product data.

// 19. We are implementing a feature that lets the user filter the products by their categories. 
//     The filter should be applied to an array of product ids. Define a type that represents this filter.

// 20. Lastly, our application is growing and we are adding new product features such as 'color' and 'size'. 
//     Now, not all products have these new features, only certain categories of products will have them. 
//     Update the product type to reflect this change.
