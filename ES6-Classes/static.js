/**Static Keyword */
// It is used to define static properties and methods within a class. Static members are associated with the class itself rather than its instances.
// They are accessed and invoked directly on the class, without the need to create an object.
// they are accessed using the class name followed by the dot notation.

class Circle{
    static PI =3.1448;
    constructor(radius){
        this.radius = radius;
    }
    calculateArea(){
        return Circle.PI*this.radius*this.radius;
    }
    static formatNumber(number){
        return number.toFixed(2);
    }
}
const myCircle = new Circle(5);
console.log(myCircle.calculateArea());
// Output: 78.72
console.log(myCircle.PI);
// Output: undefined
console.log(Circle.PI);
// Output: 3.15