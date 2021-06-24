var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//** Properties
//1
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
//3
var phil = new Person();
//4
phil.firstName = 'Phil';
phil.lastName = 'Donahue';
//** Analysis
// 1- using the class keyword, we create a new class called Person. Just to be clear, this is not part of TypeScript. This is part of ES6
// 2- we create 2 properties with types in that class. Here TS allows us to set the types of our properties, as we would in a traditional OOP language like Java or C#. Dictating these types requires that when we instantiate the class and use these properties, they must hold string values.
// 3- We instantiate (create an instance) of the class by setting the type to Person and calling the new keyword to create a new instance of the class.
// 4- back to the top code. We set the properties on the instance of the phil property
//** Instantiation
/// Instantiation means to create a new instance of a class. 
//1                 //2   //3     //4      
var someVariableName = new Person();
//* Analysis
// 1- We declare a variable with our own custom name
// 2- We declare the type. It's a custom type of Person
// 3- We use the new keyword to instantiate a new instance
// 4- We call the class with parens. The parens invoke the constructor function.
//** Methods
/// Methods can be described as functions inside the body of a class. 
// class Person {
//     //1
//     firstName: string;
//     lastName: string;
//     //2
//     sayHello(){                    //3
//         console.log('Hello', this.firstName)
//     }
// }
// //4
// let kenn: Person = new Person();
// //5
// kenn.firstName = 'Kenn';
// //6
// kenn.sayHello();
//** Analysis
// 1- These two variables are the properties of the class. They should be above the methods
// 2- Here we have a method. This is a function that prints 'Hello,' then a name to the console.
// 3- this.firstName will refer to the firstName for the specific instance
// 4- We instantiate the Person() class with a variable name of kenn
// 5- We set the property of firstName to 'kenn' for this specific instance
// 6- We call the method on the kenn object. Because the firstName of kenn is set to 'Kenn', this will print 'Hello Kenn' to the console.
//***KEY RULE/
// - Notice that with methods in our class that you don't have to use the function keyword.
/*
    Practice
        1- Create a method called sayHelloToFullname that says hello to someone by full name.

        2- Instantiate(create a new instance of) the person class.

        3- Set the first name property to 'Sheriff' and the last name property to 'Holler'.

        4- Call the sayHelloToFullname method on the instance of the class.
*/
var Name = /** @class */ (function () {
    function Name() {
    }
    Name.prototype.sayHelloToFullName = function () {
        console.log('Hello', this.firstName, this.lastName);
    };
    return Name;
}());
var alyssa = new Name();
alyssa.firstName = 'alyssa';
alyssa.lastName = 'reyes';
alyssa.sayHelloToFullName();
//** Constructors
/// A constructor allows us to more easily and effeciently create an instance of a class by enabling us to instantiate the class (create a new instance of the class) and set the properties at the same time.
//1
var Game = /** @class */ (function () {
    function Game(name, maker) {
        this.gameName = name; //4
        this.gameMaker = maker;
    }
    return Game;
}());
//5
var battleship = new Game('Battleship', 'Hasbro');
//* Analysis
// 1- we create a new class called Game
// 2- we create a constructor for the class that takes in a parameter that is of type string
// 3- we set up a property called gameName
// 4- we set the value of gameName equal to the value that is passed into the constructors argument
// 5- we create an instance of the Game class called battleship
// 6- we pass in values to satisfy the requirements of the constructor. If we do not pass values in for the constructors arguments, we get an error. The following code throws a comple-time error:
//let battleship: Game = new Game(); //Throws an error because two arguments are required in the parens
//** Inheritance
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    return Vehicle;
}());
// ^^ this is called a parent class, this holds all the properties that are going to be universal to all vehicles. With inheritance,  we can make subclasses of Vehicle that hold these properties along with the properties that are unique to the subclass. Here is the syntax for a sublass with two examples:
//EXAMPLE ONE
//1
var Automobile = /** @class */ (function (_super) {
    __extends(Automobile, _super);
    function Automobile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Automobile;
}(Vehicle));
var myCar = new Automobile();
myCar.isSelfDriving = false; //2
myCar.topSpeed = 200; //3
myCar.make = 'Volvo';
//EXAMPLE TWO
//1
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Motorcycle;
}(Vehicle));
var myMotorcycle = new Motorcycle();
myMotorcycle.easyToDoWheelie = true; //2
myMotorcycle.topSpeed = 180; //3
//** Analysis
// 1- The extends keyword declares that the class is going to inherit all of the properties and methods from another class. This is called sublassing. Both Motorcycle and Automobile inherit from Vehicle
// 2- Note that these are properties declared in the sublass. The Motorcycle class does not have access to the isSelfDriving property and the Automobile class does not have access to easyToDoWheelie
// 3- These are properties from the parent class, the Vehicle class. They are inherited properties.
//* Practice 
/**
 * Create a class called  with 3 properties.

 *  Create two subclasses, maybe Bear and Tiger, that each has a property unique.

 *  Instantiate both classes and add values for properties to each.
 */
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Tiger = /** @class */ (function (_super) {
    __extends(Tiger, _super);
    function Tiger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Tiger;
}(Animal));
var myTiger = new Animal();
myTiger.isNocturnal = false;
myTiger.species = 'mammal';
myTiger.habitat = 'land';
var Bear = /** @class */ (function (_super) {
    __extends(Bear, _super);
    function Bear() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bear;
}(Animal));
var myBear = new Animal();
myBear.isNocturnal = false;
myBear.species = 'mammal';
myBear.habitat = 'forest';
//** Parameter Properties
/// Parameter properties allow us to make our classes even more streamlined by allowing us to declare property types and accessors in our constructor parameters.
// class Store {
//     constructor(name: string, city: string){
//         this.name = name;
//         this.city = city;
//     }
//     name: string;
//     city: string;
// }
// let ikea: Store = new Store('Ikea', 'Fishers');
var Store = /** @class */ (function () {
    function Store(name, city) {
        this.name = name;
        this.city = city;
    }
    return Store;
}());
var ikea = new Store('Ikea', 'Fishers');
//* Analysis
// 1- we add a public accessor. It is required for this approach
// 2- With this approach, we don't have to do all of the bindings for our properties inside of our constructor. We don't need this.name = name;
//TS infers that there is a property called a name that will be the value of the argument that is passed into the constructor
//** Accessors
/// TS has brought us more explicit keywords for determining the accessibility of a member using the private and public keywords. In terms of classes, this allows us to keep certain members private to the class for internal use
//1
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //5
    Employee.prototype.getSalary = function () {
        return this._salary.toString();
    };
    //4
    Employee.prototype.setSalary = function (newSalary) {
        this._salary = newSalary;
    };
    return Employee;
}(Person));
var newEmployee = new Employee();
newEmployee.setSalary(30000);
//newEmployee._salary = 0; //This breaks
var salaryResult = newEmployee.getSalary();
console.log('The salary is:', salaryResult);
//* Analysis
// 1- we have a class called Employee that extends Person
// 2- we create a private property, denoted by the private keyword
// 3- it is commin practice to see private properties in classes start with an underscore. This is not required. It is just a common convention.
// 4- we have a method called setSalary that takes in a number. It sets the value of the private property to the value that is passed in as an argument. These are both number types
// 5- we have a method called getSalary that returns a string. Inside the method, we perform so low-level business logic of converting the salary number value to a string in the return statement.
//# sourceMappingURL=03-classes.js.map