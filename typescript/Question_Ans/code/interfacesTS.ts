console.log("Interfaces in Typescript");

// 1. Defination (in the format of 'problem-solution') of interfaces in typescript
// - typeSafety (creating custom types for properties & methods)
// - adding multilevel type safety
// - implementing classes with this types to have consistancy across the module/project
interface Salary {
    amount: number | string; // union types is fine
    currency?: string;
}

interface Person {
    name: string;
    age: number;
    salary?: Salary;
}

interface Employee extends Person, Salary {
    company: string;
    companyAddress?: string;
}

let emp:Person = {
    name: "Sameer",
    age: 30,
    salary: {
        amount: 20000,
        currency: "INR"
    }
}
console.log(emp);

// 2. Usecases of interfaces what its advantages
    // 1. Object Shape Definition:
    // Interfaces are commonly used to describe the structure of objects, providing clear contracts for their properties and methods.
        interface Name {
            firstName: string;
            lastName: string;
        }

        interface User {
            id: string;
            name: Name;
            email: string;
            age?: number;   // Optional property
        }

        // Function that expects a user object and returns string
        function displayUser(user:User): string {
            return `User Details: ${user.name.firstName} ${user.name.lastName}`;
        }

        // 2. Method Signatures:
        // Interfaces can define method signatures, allowing you to enforce that objects implementing the interface have specific methods with the correct signatures.

        // Interface for a printable object
        interface Printable {
            print(data: string):void;
        }

        class Documents implements Printable {
            constructor(private content: string){}
            print(data) {
                console.log(`data from instance: ${data}`);
                console.log(`data from class: ${this.content}`);
            }
        }

        const docs = new Documents("data content");
        docs.print("new");


        // 3. Optional Properties:
        // Interfaces can have optional properties, denoted by a ? after the property name. This allows flexibility in object shapes.

        // Interface for a configuration object
        interface Configuration {
            debugMode?: boolean;
            logLevel?: string;
        }

        // Usage example with optional properties
        const config: Configuration = { debugMode: true };

        // 4. Readonly Properties:
        // Interfaces support readonly properties, ensuring that properties cannot be modified after object initialization.

        // Interface for a point object
        interface Point {
            readonly x: number;
            readonly y: number;
        }

        // Usage example with readonly properties
        const point: Point = { x: 10, y: 20 };
        // point.x = 30; // Error: Cannot assign to 'x' because it is a read-only property

        // 5. Extending Interfaces:
        // Interfaces can extend other interfaces, inheriting their properties and methods while adding new ones.

        // Base interface
        interface Shape {
            color: string;
        }

        // Extended interface
        interface Square extends Shape {
            sideLength: number;
        }

        // Usage example with extended interface
        const square: Square = { color: "red", sideLength: 10 };

        // 6. Declaration Merging:
        // Interfaces support declaration merging, allowing you to spread the definition of an interface across multiple declarations.

        // First declaration of interface
        interface User1 {
            name: string;
        }

        // Second declaration of interface (merged with the first)
        interface User1 {
            age: number;
        }

        // Usage of the merged interface
        const user: User1 = { name: "Alice", age: 30 };

        // 7. Function Types:
        // Interfaces can define function types, ensuring that objects implementing the interface have specific function signatures.

        // Interface for a function with a specific signature
        interface Greet {
            (name: string): string;
        }

        // Usage example with a function type
        const greetFn: Greet = (name) => `Hello, ${name}!`;


// 3. Interfaces Drawbacks
        // 1. Inability to Enforce Private Members:
            // interface Person {
            //     name: string;
            //     age: number;
            //     // Private member (not allowed in interfaces)
            //     // privateId: number;
            // }
            
            // class Student implements Person {
            //     // Public properties
            //     name: string;
            //     age: number;
            //     // Private member (allowed in classes)
            //     private privateId: number;
            
            //     constructor(name: string, age: number, privateId: number) {
            //     this.name = name;
            //     this.age = age;
            //     this.privateId = privateId;
            //     }
            
            //     getPrivateId(): number {
            //     return this.privateId;
            //     }
            // }
            
            // const student = new Student('Alice', 20, 123);
            // console.log(student.name); // Output: Alice
            // console.log(student.getPrivateId()); // Output: 123

        // 2. Inability to Extend Multiple Interfaces:
            //- this can be achieved using intersection types (define new interface with extends key word)
            // interface Shape {
            //     color: string;
            //   }
              
            //   interface Size {
            //     size: number;
            //   }
              
            //   // Define a new interface using an intersection type
            //   interface Square extends Shape, Size {
            //     sideLength: number;
            //   }
              
            //   // Example usage
            //   const square: Square = {
            //     color: 'red',
            //     size: 10,
            //     sideLength: 5
            //   };
              
        //3. No Support for Static Members:
        // interface Printable {
        //     print(): void;
        //     // This is not allowed
        //     // staticStaticMember: string;
        //   }
          
        //   class Printer implements Printable {
        //     static staticMember: string = "Static Member";
          
        //     print(): void {
        //       console.log("Printing...");
        //     }
        //   }
          
        //   // Accessing static member directly from the class
        //   console.log(Printer.staticMember); // Output: Static Member
          
        //   // Accessing static member from an instance
        //   const printer = new Printer();
        //   // Below line will result in a TypeScript compilation error
        //   // console.log(printer.staticMember);

        //4. Limited Support for Implementing Function Signatures:
            // interface MathOperation {
            //     (x: number, y: number): number;
            // }
            
            // const add: MathOperation = (x, y) => x + y;
            // const subtract: MathOperation = (x, y) => x - y;
            
            // console.log(add(5, 3)); // Output: 8
            // console.log(subtract(5, 3)); // Output: 2

        //5. No Runtime Representation:
            // interface Person {
            //     name: string;
            //     age: number;
            // }
            
            // function greet(person: Person) {
            //     return `Hello, ${person.name}!`;
            // }
            
            // const john = { name: 'John', age: 30 };
            // console.log(greet(john)); // Output: Hello, John!

        //6. Lack of Flexibility:
            // Cannot represent a union type directly using interfaces
            // interface Result {
            //     value: number | string; // This is fine
            // }

            // // Cannot represent a mapped type directly using interfaces
            // interface Optional<T> {
            //     [K in keyof T]?: T[K]; // Error
            // }

          
          
          


// 4. Implementations of interfaces in JS in other modules / frameworks

    // 1.Angular ------------------------------------------------
        //1. Service Contracts:
        // Interface for a data service
        // export interface DataService {
        //     getData(): Observable<any>;
        //     saveData(data: any): Observable<any>;
        // }

        // 2. Component Input and Output Properties:
        // Interface for input properties of a component
        // export interface UserInput {
        //     id: number;
        //     name: string;
        //     email: string;
        // }

        // // Interface for output properties of a component
        // export interface UserOutput {
        //     userDeleted: EventEmitter<number>;
        // }

        // 3. HTTP Responses:
        // Interface for a user object returned from the API
        // export interface User {
        //     id: number;
        //     name: string;
        //     email: string;
        // }

        // // HTTP service method that fetches user data
        // getUser(id: number): Observable<User> {
        //     return this.http.get<User>(`/api/users/${id}`);
        // }

        // 4. Route Data:
        // Interface for route data
        // export interface RouteData {
        //     title: string;
        //     icon: string;
        //     permissions: string[];
        // }

        //5. Form Models:
        // Interface for a user form model
        // export interface UserForm {
        //     name: string;
        //     email: string;
        //     age: number;
        // }

        // 6. Mock Objects:
        // Interface for a mock user object
        // export interface MockUser {
        //     id: number;
        //     name: string;
        //     email: string;
        // }
    
    // 2. ReactJs:-----------------------------------------------
        // 1. Component Props:
        // Interface for props of a user component
        // interface UserProps {
        //     id: number;
        //     name: string;
        //     email: string;
        // }

        // // User component using props defined by the interface
        // const User: React.FC<UserProps> = ({ id, name, email }) => {
        //     return (
        //         <div>
        //             <h2>{name}</h2>
        //             <p>Email: {email}</p>
        //         </div>
        //     );
        // };

        // 2. Component State:
        // Interface for state of a counter component
        // interface CounterState {
        //     count: number;
        // }

        // // Counter component using state defined by the interface
        // class Counter extends React.Component<{}, CounterState> {
        //     state: CounterState = {
        //         count: 0,
        //     };

        //     render() {
        //         return (
        //             <div>
        //                 <p>Count: {this.state.count}</p>
        //             </div>
        //         );
        //     }
        // }

        //3. Component Events:
        // Interface for event handler of a button component
        // interface ButtonProps {
        //     onClick: () => void;
        // }

        // // Button component using event handler defined by the interface
        // const Button: React.FC<ButtonProps> = ({ onClick }) => {
        //     return <button onClick={onClick}>Click me</button>;
        // };

        // 4. API Responses:
        // Interface for a user object received from the API
        // interface User {
        //     id: number;
        //     name: string;
        //     email: string;
        // }

        // // Fetching user data from the API and using the interface
        // const fetchUser = async (userId: number): Promise<User> => {
        //     const response = await fetch(`/api/users/${userId}`);
        //     const userData = await response.json();
        //     return userData as User;
        // };

        // 5. Form Models:
        // Interface for a login form model
        // interface LoginForm {
        //     username: string;
        //     password: string;
        // }

        // // React form component using the interface
        // const LoginFormComponent: React.FC = () => {
        //     const [formData, setFormData] = useState<LoginForm>({ username: '', password: '' });

        //     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        //         setFormData({ ...formData, [e.target.name]: e.target.value });
        //     };

        //     return (
        //         <form>
        //             <input type="text" name="username" value={formData.username} onChange={handleChange} />
        //             <input type="password" name="password" value={formData.password} onChange={handleChange} />
        //         </form>
        //     );
        // };











