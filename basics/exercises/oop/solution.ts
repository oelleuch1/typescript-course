// Exercise 1
abstract class BaseEntity {
  static idCounter = 0;

  protected constructor(public id: number) {}

  static generateId(): number {
    return ++BaseEntity.idCounter;
  }
}

// Exercise 2
class Customer extends BaseEntity {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string
  ) {
    super(BaseEntity.generateId());
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Product extends BaseEntity implements Product {
  constructor(
    public name: string,
    public price: number,
    public quantity: number
  ) {
    super(BaseEntity.generateId());
  }
}

class Inventory extends BaseEntity {
  constructor(public products: Product[] = []) {
    super(BaseEntity.generateId());
  }

  findProductById(productId: number): Product | undefined {
    return this.products.find((product) => product.id === productId);
  }

  addProduct(product: Product): void {
    // ...
  }

  removeProduct(productId: number): void {
    // ...
  }

}

// Exercise 3
class ProductInventory extends Inventory {
  restock(productId: number, quantity: number): void {
    const product = this.products.find((product) => product.id === productId);
    if (product) {
      product.quantity += quantity;
    }
  }
}

// Exercise 4
function applyDiscount(
  product: Product,
  discountPercentage: number,
  quantity: number
): Product {
  const discountedPrice = product.price * (1 - discountPercentage / 100);
  return { ...product, price: discountedPrice, quantity };
}

class Order extends BaseEntity {
  constructor(public customer: Customer, public products: Product[] = []) {
    super(BaseEntity.generateId());
  }
  addProduct(product: Product, quantity: number): void {
    // ...
  }

  removeProduct(productId: number, quantity: number): void {
    // ...
  }

  getTotal(): number {
    return this.products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  }
}

// Exercise 5
class VIPCustomer extends Customer {
  getFullName(): string {
    return `VIP ${super.getFullName()}`;
  }
}

export {
    BaseEntity,
    Customer,
    Product,
    Inventory,
    ProductInventory,
    applyDiscount,
    Order,
    VIPCustomer
}
