//** Properties
/// Interfaces are often associated with the idea of coding with intend and defining what we're going to need for something before we get into the weeds of creating that thing. 
/// No instantiation- you can't instantiate interfaces. Interfaces aren't used to create objects. They are used to shape them. "one of TypeScripts core principles is that type-checking focuses on the shape that values have". We impose an interface on an object or class to dictate certain aspects of how that object should be shaped.

interface Animal {
    name: string;
    numberOfLegs: number;
}
// let lassie: Animal = {
//     name: 'Lassie',
//     numberOfLegs: 4
// }

//** Methods

//1
// sayHello(name: string) : string {
//     //2
//     var someNum = 1 + 2;
//     var someOtherNum = 1 + 2;
//     return name;
// }
                //1
interface Product {
    name: string;
    price: number;
    setTimeOfPurchase(d: Date);
}
class Apples implements Product {
    name: 'Apples';
    price: 5.50;
    //2
    setTimeOfPurchase(d: Date){
        console.log('Apples purchased on ', d);
    }
}
//3
let myApples: Apples = new Apples();
myApples.setTimeOfPurchase(new Date(Date.now()));

/** Analysis
 * 1- we are implementing an interface on the class. Since we are implementing our interface on the class, we are imposing its shape. This means the class will be required to hold the properties and methods of the interface. When we implement it, it will show an error until we add those things.
 * 2- we implement the setTimeOfPurchase method in the class, and provide a basic implementation by logging the date to the console.
 * 3- we then create a new instance of the Apples class and call the setTimeOfPurchase method.
 */