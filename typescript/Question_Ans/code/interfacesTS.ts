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
            print(data: string): void {
                console.log(`data from instance: ${data}`);
                console.log(`data from class: ${this.content}`);
            }
        }

        const docs = new Documents("data content");
        docs.print("new");





// 3. Implementations of interfaces in TS



// 4. Implementations of interfaces in JS in other modules / frameworks