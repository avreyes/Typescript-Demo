//** Type Safety in Arguments
function addNumbers(numOne, numTwo) {
    return numOne + numTwo;
}
//1 - Works
addNumbers(1, 2);
//2 - Errors
// addNumbers(1, 2, 3);
// addNumbers(1, 2, 3, 'Foo');
// Challenge: add a TS function that concatenates two strings(firstName & lastName) and returns a fullName
// function fullName(first: string, last: string, middle?: string){
//     if(middle !== undefined){
//         return first + ' ' + middle + ' ' + last;
//     } else {
//         return first + ' ' + last
//     }
// }
console.log(fullName('Firstname', 'LastName', 'MiddleName'));
//** Return Types
function sayHello(name) {
    return name;
}
sayHello('Kenn'); //3
// sayHello(1); //4 --> error
//** Practice Function:
/*
Follow these steps to create a TypeScript function:

Create a function with a return type of boolean.

The function takes in a string username and string password for it's password.

Inside the function have a conditional that checks if the username is set to  and the password is .

If both conditions are true, the function should return true.

If one or both conditions are false the function should return false.
*/
//** Optionals
/// Optionals allow for flexibility in our parameters. With optionals, we can allow an argument to be left out if needed. Optionals are declared using a question mark after them. 
//1                              //2
function addNumbersWithOptional(numOne, numTwo, someString) {
    console.log(someString);
    return numOne + numTwo;
}
//5
addNumbersWithOptional(1, 2); //3
addNumbersWithOptional(1, 2, 'This is optional'); //4
//** Analysis
// 1- the first two parameters, numOne and numTwo are not optional
// 2- the someString parameter is optional
// 3- since someString is optional, it does not require an argument when the function is called
// 4- we can also call the function with an argument provided for someString
// 5- if you hover over the functional call, you'll notice the type on someString is a union type of string | undefined. if a value is passed in, it should be of type string. If a value is not passed in, it is of type undefined.
/**KEY RULE */
// Optional params must go after all required params
function fullName(first, last, middle) {
    if (middle !== undefined) {
        return first + ' ' + middle + ' ' + last;
    }
    else {
        return first + ' ' + last;
    }
}
console.log(fullName('Firstname', 'LastName', 'MiddleName'));
//# sourceMappingURL=02-functions.js.map