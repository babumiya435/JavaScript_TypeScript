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

let emp3:Person = {
    name: "Sameer",
    age: 30,
    salary: {
        amount: 20000,
        currency: "INR"
    }
}
console.log(emp3);

// 2. Usecases of interfaces what its advantages



// 3. Implementations of interfaces in TS



// 4. Implementations of interfaces in JS in other modules / frameworks