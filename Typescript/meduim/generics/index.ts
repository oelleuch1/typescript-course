//=====================
// Topic: Generics 
//=====================

interface User {
    id: number,
    username: string,
    password: string,
    role: 'CUSTOMER' | 'ADMIN'
}

// Generic class for representing a result
class Result<T> {
  constructor(
    public success: boolean,
    public data?: T,
    public error?: string
  ) {}
}

// Generic interface for a service
interface Service<T> {
  getById(id: number): Result<T>;
  getAll(): Result<T[]>;
  create(item: T): Result<T>;
}

// Implementing the generic interface for User service
class UserService implements Service<User> {
  private users: User[] = [];
  private currentId: number = 1;

  getById(id: number): Result<User> {
    const user = this.users.find((u) => u.id === id);
    if (user) {
      return new Result<User>(true, user);
    } else {
      return new Result<User>(false, undefined, "User not found");
    }
  }

  getAll(): Result<User[]> {
    return new Result<User[]>(true, this.users);
  }

  create(user: User): Result<User> {
    user.id = this.currentId++;
    this.users.push(user);
    return new Result<User>(true, user);
  }
}

// Sample usage of UserService
const userService = new UserService();

const newUser: User = {
  id: 1,
  username: "john_doe",
  password: "password",
  role: "CUSTOMER",
};

const createUserResult = userService.create(newUser);

if (createUserResult.success) {
  console.log("User created:", createUserResult.data);
} else {
  console.error("Error creating user:", createUserResult.error);
}

const getUserResult = userService.getById(1);

if (getUserResult.success) {
  console.log("User retrieved:", getUserResult.data);
} else {
  console.error("Error retrieving user:", getUserResult.error);
}

const getAllUsersResult = userService.getAll();

if (getAllUsersResult.success) {
  console.log("All users:", getAllUsersResult.data);
} else {
  console.error("Error retrieving users:", getAllUsersResult.error);
}
