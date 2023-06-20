// =======================
// Topic 1: Advanced Types
// =======================

// Union types: Can be one of several types.
type ProductID = string | number;
type UserID = string | number;
type Review = string | number;
// A review can be a number (rating) or a string (textual review)

// Literal types: Restrict a variable to have a specific literal value.
type OrderStatus = "Pending" | "Shipped" | "Delivered" | "Cancelled";

// Object type: Represents an object with specific structure
type Address = {
  street: string;
  city: string;
  state: string;
  zip: string;
};

// Intersection types: Combine multiple types into one.
interface BasicProduct {
  id: ProductID;
  name: string;
  description: string;
  price: number;
  reviews: Review[];
}

interface ProductDetails {
  category: string;
  manufactureDetails: string;
  returnPolicy: string;
  shippingAddress: Address;
}

type FullProductDetails = BasicProduct & ProductDetails;

// Type guards: Narrow down the type of an object within a conditional block.
function isStringReview(review: Review): review is string {
  return typeof review === "string";
}

// Some function that processes reviews
function processReview(review: Review) {
  if (isStringReview(review)) {
    console.log(`Textual review: ${review.toUpperCase()}`); // We know that `review` is a string here
  } else {
    console.log(`Rating review: ${review.toFixed(1)}`); // TypeScript infers that `review` is a number here
  }
}

// Sample usage
// processReview("This product is excellent!");
// processReview(4.7);

// Conditional types: Select one of two possible types based on a condition.
type ReviewSummary = Review extends string
  ? "Textual Review"
  : "Numerical Review";

// Mapped types: Create new types based on transformations of properties in old types.
// (Avoiding generics per request, using a specific type)
type ReadonlyProduct = { readonly [K in keyof BasicProduct]: BasicProduct[K] };

const readOnlyProduct: ReadonlyProduct = {
  id: 1,
  name: "P1",
  description: "desc",
  price: 100,
  reviews: [],
};

// Cannot change the value: readOnlyProduct.id = 2

// Lookup types: Extract the type of a property from another type.
type ProductNameType = BasicProduct["name"];

const productName: ProductNameType = "P2";

// Index types: Lets you create dynamic property keys and values.
interface ProductDictionary {
  [index: string]: FullProductDetails;
}

// Function types: Define the signatures of functions
type ProductDetailsLogger = (product: FullProductDetails) => void;

const productDetailsLogger: ProductDetailsLogger = (
  product: FullProductDetails
) => {
  // console.log(product);
  return product;
};

// From Array Values to Type:
const categories = [
  "Electronics",
  "Fashion",
  "HomeAppliance",
  "Books",
  "HealthAndBeauty",
] as const;

// Create a type using the array values
type Category = (typeof categories)[number];

const category: Category = "Electronics";
