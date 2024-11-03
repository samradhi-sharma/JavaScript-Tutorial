// constructor function
function Vehicle(name, color, wheels){
    this.name = name;
    this.color = color;
    this.wheels = wheels;
    this.getDetails=function(){
        console.log( `The ${this.name} is ${this.color} in color.
            It has ${this.wheels} wheels`);
    };
}
class VehicleCl{
    // properties-> writing these properties is optional 
    name;
    color;
    wheels;
    // constructor
    constructor(name, color, wheels){
        this.name = name;
        this.color = color;
        this.wheels = wheels;
    }
    // methods
    getDetails(){
        console.log(`The ${this.name} is ${this.color} in color.
            It has ${this.wheels} wheels`);
    }
}

// creating instance of class

const veh1 = new VehicleCl('Bike', 'Red', 2);
console.log(veh1);