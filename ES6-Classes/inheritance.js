class Animal{
    constructor(name){
        this.name = name;
    }
}
class Dog extends Animal{
    constructor(name, breed){

    super(name);
    this.breed = breed;
}
}
const mydog = new Dog("Rex", "Labrador");

console.log(mydog);

// ( `The ${this.name} is ${this.color} in color.
            // It has ${this.wheels} wheels`);

            /**Function Overriding */
//             Function overriding is the ability of a child class to provide a different
// implementation for a method that is already defined in its parent class.
// ● When a child class overrides a method, the implementation in the child class
// is executed instead of the parent class's implementation.

class Shape{
    draw(){
        console.log("Drawing a shape");
    }
}
class Circle extends Shape{
    draw(){
        console.log("Drawing a circle");
    }
}
const myShape = new Shape();
myShape.draw();
// Output: Drawing a shape
const myCircle = new Circle();
myCircle.draw();
// Output: Drawing a circle