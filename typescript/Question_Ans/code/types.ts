// 1. Defination (in the format of 'problem-solution') of interfaces in typescript
    //- types are used to create custom types
        // - union types, conditional types, mapped types, optional properties

// 2. Usecases of interfaces what its advantages
    // // Union type using type
    // type Result = number | string;

    // // Conditional type using type
    // type NonNullable<T> = T extends null | undefined ? never : T;

    // // Mapped type using type
    // type Optional<T> = { [K in keyof T]?: T[K] };

    // Descriptive name for a union type
    // type Result = Success | Failure;

    // // Descriptive name for a conditional type
    // type NonNullable<T> = T extends null | undefined ? never : T;

    // // Descriptive name for a mapped type
    // type Optional<T> = { [K in keyof T]?: T[K] };

//Conditional type using type in the context of type with code examples

// Example: Define a conditional type
type TypeName<T> = T extends string ? "string" :
                  T extends number ? "number" :
                  T extends boolean ? "boolean" :
                  "object";

// Usage examples
type StringTypeName = TypeName<string>;     // "string"
type NumberTypeName = TypeName<number>;     // "number"
type BooleanTypeName = TypeName<boolean>;   // "boolean"
type ObjectTypeName = TypeName<object>;     // "object"
type ArrayTypeName = TypeName<string[]>;    // "object"
type UndefinedTypeName = TypeName<undefined>; // "object"






// 3. Implementations of interfaces in TS




// 4. Implementations of interfaces in JS in other modules / frameworks