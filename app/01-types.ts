    //1         //2         //3
let username: string = "instructor";
//let password: string = "Letmein1234!"
let instructorId: number = 5;

/*
1- we declare a variable
2- we declare the variables type
3- we initialize the variable with a value of that type
*/

// We can declare a value and type without initialization
let password: string;
let phoneNumber: number;
let email: string;
let socialSecurity: number;
let isMarried: boolean;

// implicit typing, we don't have to declare a type
let greeting = "Hello";

/* Basic Types*/

//** Number
/// Numbers are one of the most common primitive types and are declared with the number keyword in TS
let age: number = 40;
let currentYear: number = 2018;
// TS also supports ES6 octal literals:
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;

//** String
/// Strings are one of the most common primitive types and are declared with the string keyword in TS
let companyName: string;
companyName = 'Eleven Fifty'
// TS is a superset of JS so single quotes or double quotes are fine, consistency is key:
let appName: string = 'Twitter';
appName = "Instagram";

//** Boolean
let isLoggedIn: boolean = true;
let isGoldLevelUser: boolean = true;

//** Array
/// Arrays are also a type in TS. They can be expressed in two different ways:
//1
let studentList: string[] = ['Tom', 'Tracy', 'Nikaya']
//2
let allScores: Array<number> = [100, 92, 95, 96];
console.log('Student List:', studentList[0]);

//** Any
/// One of the things that many developers like about TS is the ability to toggle off forced types if they type is not known during development. At any point in the application, we may not  /// know what type a variable is. This could be coming from a 3rd party package. With these cases, we let the type be decided at compile time, and we can use the any type:
let dataFromThirdParty: any = '12345';
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);

dataFromThirdParty = 12345;
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);
/// Notice that they type for the variable can change when declaring any type, just like with a JS variable. This allows for the dynamic flexibility of a regular JS varible if it is needed.

//** Void
/// A void type has no type at all. This is not really seen in variablesm but is more common to see in funcitons that return no value:
function sayHelloToAll() : void {
    console.log('Hello to all!')
}

//** Null and Undefined
let undefinedVariable: undefined = undefined;
let nullVariable: null = null;

//** Tuple
/// Tuple types allow you to create an array with multiple different types (notice how Tuple is sort of a suffix of multiple). You would still have a fixed number of items in the array, but /// the items need to be different types. You may want this for a key value pair:
// Declare a tuple type
let usernameAndId: [number, string];
// Initialize it
usernameAndId = [1, 'kennisreally40']; //OK

//** Enum
/// Enums allow us to give names to numeric values
/// Like arrays, enums start at 0, but that starting index can be assigned a different number
enum WeaponType { Sword, Saber, Spear }
let weapon: WeaponType = WeaponType.Sword

enum CardType { Ace = 1, Two, Three, Four }
let cardType: string = CardType[2]
console.log(cardType);

//** Union Types
/// Union types allow us to have more flexibility withour variables, but we still keep the intent of declaring a specific type for our variables
let x: number | string;
let y: number | null;

x = '1234';
x = 1234;

// x = true;
// y = false;

//** Annotations
function demoFunction(someNum){
    return someNum;
}

demoFunction(1); //1
demoFunction('stuff'); //2
// demoFunction(1, 'Stuff'); //3 

// 1- We can call the function with a number as the argument
// 2- We can call the function with a string as an argument
// 3- We can add arguments that weren't originally declared



