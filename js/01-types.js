//1         //2         //3
var username = "instructor";
//let password: string = "Letmein1234!"
var instructorId = 5;
/*
1- we declare a variable
2- we declare the variables type
3- we initialize the variable with a value of that type
*/
// We can declare a value and type without initialization
var password;
var phoneNumber;
var email;
var socialSecurity;
var isMarried;
// implicit typing, we don't have to declare a type
var greeting = "Hello";
/* Basic Types*/
//** Number
/// Numbers are one of the most common primitive types and are declared with the number keyword in TS
var age = 40;
var currentYear = 2018;
// TS also supports ES6 octal literals:
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
//** String
/// Strings are one of the most common primitive types and are declared with the string keyword in TS
var companyName;
companyName = 'Eleven Fifty';
// TS is a superset of JS so single quotes or double quotes are fine, consistency is key:
var appName = 'Twitter';
appName = "Instagram";
//** Boolean
var isLoggedIn = true;
var isGoldLevelUser = true;
//** Array
/// Arrays are also a type in TS. They can be expressed in two different ways:
//1
var studentList = ['Tom', 'Tracy', 'Nikaya'];
//2
var allScores = [100, 92, 95, 96];
console.log('Student List:', studentList[0]);
//** Any
/// One of the things that many developers like about TS is the ability to toggle off forced types if they type is not known during development. At any point in the application, we may not  /// know what type a variable is. This could be coming from a 3rd party package. With these cases, we let the type be decided at compile time, and we can use the any type:
var dataFromThirdParty = '12345';
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);
dataFromThirdParty = 12345;
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);
/// Notice that they type for the variable can change when declaring any type, just like with a JS variable. This allows for the dynamic flexibility of a regular JS varible if it is needed.
//** Void
/// A void type has no type at all. This is not really seen in variablesm but is more common to see in funcitons that return no value:
function sayHelloToAll() {
    console.log('Hello to all!');
}
//** Null and Undefined
var undefinedVariable = undefined;
var nullVariable = null;
//** Tuple
/// Tuple types allow you to create an array with multiple different types (notice how Tuple is sort of a suffix of multiple). You would still have a fixed number of items in the array, but /// the items need to be different types. You may want this for a key value pair:
// Declare a tuple type
var usernameAndId;
// Initialize it
usernameAndId = [1, 'kennisreally40']; //OK
//** Enum
/// Enums allow us to give names to numeric values
/// Like arrays, enums start at 0, but that starting index can be assigned a different number
var WeaponType;
(function (WeaponType) {
    WeaponType[WeaponType["Sword"] = 0] = "Sword";
    WeaponType[WeaponType["Saber"] = 1] = "Saber";
    WeaponType[WeaponType["Spear"] = 2] = "Spear";
})(WeaponType || (WeaponType = {}));
var weapon = WeaponType.Sword;
var CardType;
(function (CardType) {
    CardType[CardType["Ace"] = 1] = "Ace";
    CardType[CardType["Two"] = 2] = "Two";
    CardType[CardType["Three"] = 3] = "Three";
    CardType[CardType["Four"] = 4] = "Four";
})(CardType || (CardType = {}));
var cardType = CardType[2];
console.log(cardType);
//** Union Types
/// Union types allow us to have more flexibility withour variables, but we still keep the intent of declaring a specific type for our variables
var x;
var y;
x = '1234';
x = 1234;
// x = true;
// y = false;
//** Annotations
function demoFunction(someNum) {
    return someNum;
}
demoFunction(1); //1
demoFunction('stuff'); //2
// demoFunction(1, 'Stuff'); //3 
// 1- We can call the function with a number as the argument
// 2- We can call the function with a string as an argument
// 3- We can add arguments that weren't originally declared
//# sourceMappingURL=01-types.js.map