//Tuple is a new data type which includes set of values of different data types.
//You can declare a tuple that allows a variable to hold multiple values with different data types. 
let arr: [number, string] = [1, 'a'];
console.log(arr[0]);

//enumerations are a new data type supported in TypeScript.
//They are used to define a collection of named constants.They are useful when you have a set of named values and want to perform a different action based on the name of the value.
//By default, enums begin numbering their members starting at 0. You can change this by manually setting the value of one of its members.
enum color {Red, Green, Blue};
let c: color = color.Green;
console.log(c);

//other Examples of Enum
enum UserRoles{
    Admin ='Admin',
    User = 'User',
    Guest = 'Guest'
}

enum StatusCode{
    OK = 200,
    NotFound = 404,
    ServerError = 500
}

let code:StatusCode= StatusCode.OK;
console.log(code);


//Any is a type that can hold values of any data type.
let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false;


//unknown is a type-safe counterpart of any. When you don’t know the type of the value in advance, you can use unknown to safely store these values.
//unknown is a type that is safe to use with any other type. It is also safe to assign unknown type to any other type.
let userInput: unknown;
let userName: string;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userName = userInput;
}   


//difference between unknown and any
let anyValue: any;
let unknownValue: unknown;
let str: string = 'hello';
anyValue = str;
unknownValue = str;
console.log(anyValue.toUpperCase());
//console.log(unknownValue.toUpperCase()); // Error: Object is of type 'unknown'.
//The main difference between any and unknown is that any is a supertype of all other types, whereas unknown is not a supertype of any type.
//This means that values of type any can be assigned to variables of any type, whereas values of type unknown cannot be assigned to variables of any type without a type assertion or a control flow based narrowing.
//In other words, any is a type that can be assigned to any other type, whereas unknown is a type that is safe to use with any other type.
//The unknown type is safer than the any type because it prevents you from accidentally assigning a value of one type to a variable of another type.
//The any type is less safe than the unknown type because it allows you to assign a value of one type to a variable of another type.


//void is a type that represents the absence of a value. It is used as the return type of functions that do not return a value.
function log(message: string): void {
    console.log(message);
}

//never is a new type in TypeScript that represents the type of values that never occur.
//For example, never is the return type for a function expression or an arrow function expression that always throws an exception or one that never returns.
//Variables also acquire the type never when narrowed by any type guards that can never be true.

function error(message: string): never {
    throw new Error(message);
}

//null and undefined are two primitive types that have the same name as their values.
//You can assign null and undefined to any other type.However, you can also assign them to the type null or undefined.
let u: undefined = undefined;
let n: null = null;
//The null and undefined types are not the same as the any type. They are primitive types that are used to represent the absence of a value.
//The any type can hold any value, whereas the null and undefined types can only hold the values null and undefined, respectively.



//-------------------Type Inference-------------------
//Type inference is a feature in TypeScript that allows you to set the type of a variable based on its value.This means that you don’t need to explicitly set the type of a variable when you declare it.
//Type inference allows you to get the benefits of static types without writing them explicitly.
//Type inference is a powerful feature in TypeScript that allows you to write clean and maintainable code without sacrificing the benefits of static types.
let x = 3; // Type inference sets x to number.
let y = 'hello'; // Type inference sets y to string.
let z = [0, 1, null]; // Type inference sets z to (number | null)[].
let a = (x = 1); // Type inference sets a to number.
let b = (x = 'a'); // Error: Type 'string' is not assignable to type 'number'.
//Type inference is a powerful feature in TypeScript that allows you to write clean and maintainable code without sacrificing the benefits of static types.


//-------------------Type Annotations-------------------
//Type annotations are a way to explicitly specify the type of a variable or a function.
//Type annotations are useful when the type of a variable or a function cannot be inferred by TypeScript.
//You can use type annotations to provide additional information about the types of variables and functions in your code.
let myName: string = 'John';
let myAge: number = 30;
let isValid: boolean = true;
let fruits: string[] = ['apple', 'banana', 'orange'];
let tuple: [number, string] = [1, 'a'];
let userRole: UserRoles = UserRoles.Admin;
let statusCode: StatusCode = StatusCode.OK;
let unknownValue1: unknown;
let anyValue1: any;
let voidValue: void;
let neverValue: never;
let nullValue: null;
let undefinedValue: undefined;



//Interfaces
// Defining an interface
// using interfaces to define the shape of an object.
// Extending an interface


interface User{
    name: string;
    age: number;
    email: string;
    password: string;
    gender?: string; //optional property
}

interface Admin extends User{
    admin: boolean;
}

function registerUser(user: User): void {
    console.log(`${user.email} is registered.`);
}

function abcd(user: Admin): void {
    console.log(`${user.name} is registered.`);
}

registerUser({
    name: 'John',
    age: 30,
    email: "john@gmail.com",
    password: "john@123"
});

abcd({
    name: 'John',
    age: 30,
    email: "karl@123",
    admin: true,
    password: "john@123"
});

// Type aliases
//Type aliases are a way to give a type a name. You can use type aliases to define complex types that are used multiple times in your code.
//Type aliases are similar to interfaces, but they are more flexible. You can use type aliases to define union types, intersection types, and other complex types.
type value= string | number| boolean;
let val: value = 'hello';
val = 5;//ok
val = true;//ok
//val = [];//error

type arg = string | number;
function display(obj: arg): void {
    console.log(obj);
}
display('hello');
display(5);
// display(true); error


//Union types
//Union types allow you to combine two or more types into a single type.
//You can use union types to define variables that can hold values of different types.
//You can use the pipe (|) character to separate the types in a union type.
let union: string | number;
union = 'hello';
union = 5;
//union = true; error

//// Intersection types
//Intersection types allow you to combine multiple types into a single type.
//You can use intersection types to define variables that have all the properties of two or more types. 
//You can use the ampersand (&) character to separate the types in an intersection type.
interface A {
    prop1: number;
}
interface B {
    prop2: number;
}
let intersection: A & B;
intersection = { prop1: 5, prop2: 10 };
//intersection = { prop1: 5 }; error
//intersection = { prop2: 10 }; error
