//** Properties
/// Interfaces are often associated with the idea of coding with intend and defining what we're going to need for something before we get into the weeds of creating that thing. 
/// No instantiation- you can't instantiate interfaces. Interfaces aren't used to create objects. They are used to shape them. "one of TypeScripts core principles is that type-checking focuses on the shape that values have". We impose an interface on an object or class to dictate certain aspects of how that object should be shaped.
var Apples = /** @class */ (function () {
    function Apples() {
    }
    //2
    Apples.prototype.setTimeOfPurchase = function (d) {
        console.log('Apples purchased on ', d);
    };
    return Apples;
}());
//3
var myApples = new Apples();
myApples.setTimeOfPurchase(new Date(Date.now()));
/** Analysis
 * 1- we are implementing an interface on the class. Since we are implementing our interface on the class, we are imposing its shape. This means the class will be required to hold the properties and methods of the interface. When we implement it, it will show an error until we add those things.
 * 2- we implement the setTimeOfPurchase method in the class, and provide a basic implementation by logging the date to the console.
 * 3- we then create a new instance of the Apples class and call the setTimeOfPurchase method.
 */ 
//# sourceMappingURL=04-interfaces.js.map