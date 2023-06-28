// 1. The straightforward definition of a type
type Product = {
    id: number;
    name: string;
    price: number;
    category: string;
}

// 2. We use the 'Partial' utility to make all properties optional for updates.
type PartialProduct = Partial<Product>;

// 3. We use the 'Pick' utility to select only specific properties for the UI display.
type ProductPreview = Pick<Product, 'id' | 'name'>;

// 4. We use the 'Omit' utility to remove the 'price' property for promotional purposes.
type ProductWithoutPrice = Omit<Product, 'price'>;

// 5. Here, we use 'Pick' to select only the 'price' for super user adjustments.
type SuperUserProduct = Pick<Product, 'price'>;

// 6. Union types are perfect for this differentiation.
type Product = {
    id: number;
    name: string;
    price: number;
    category: string;
    type: 'physical' | 'digital';
}

// 7. Conditional types can be used based on the role.
type Role = 'Admin' | 'Customer';

type ProductForRole<R extends Role> = R extends 'Admin' ? Product : Omit<Product, 'price'>;

// 8. Union and conditional types again come to the rescue.
type User = {
    name: string;
    email: string;
    role: Role;
    superUser?: boolean;
}

// 9. The 'Partial' utility again for updates.
type PartialUser = Partial<User>;

// 10. The 'Pick' utility to select specific properties for the UI display.
type UserPreview = Pick<User, 'name' | 'role'>;

// 11. A simple definition, but notice the use of Product[] for an array of products.
type Cart = {
    products: Product[];
    total: number;
    user: User;
}

// 12. The 'Partial' utility for updates, but with nested properties.

type PartialCart = Partial<Omit<Cart, 'products' | 'user'> & {products?: PartialProduct[]; user?: PartialUser}>;

// 13. A combination of 'Pick', 'Omit' and 'Partial' utilities.
type CartSummary = Pick<Cart, 'total'> & {user: Pick<User, 'name'>};

// 14. Extending the user type with an array of carts.
type UserWithCarts = User & {carts: Cart[]};

// 15. A complex use of 'Partial' with nested properties for updates.
type PartialUserWithCarts = Partial<Omit<UserWithCarts, 'carts'> & {carts?: PartialCart[]}>;

// 16. A combination of 'Pick', 'Omit' and 'Partial' utilities with nested properties.
type UserCheckoutPreview = Pick<User, 'name' | 'role'> & {cartTotals: Cart['total'][]};

// 17. The 'Pick' utility to select specific properties for the list display.
type ProductListData = Pick<Product, 'id' | 'name' | 'category'>;

// 18. A simple type but the implementation of conversion would be interesting.
type ProductDataString = string;

// 19. A simple type to represent the filter. The implementation of filter logic would be interesting.
type CategoryFilter = {category: Product['category'], productIds: Product['id'][]};

// 20. Using optional properties to add new features.
type Product = {
    id: number;
    name: string;
    price: number;
    category: string;
    type: 'physical' | 'digital';
    color?: string;
    size?: string;
}

