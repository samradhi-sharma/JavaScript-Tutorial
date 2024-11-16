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

/**OR : this constructor function can also be written as */
function Vehicle(name, color, wheels){
    this.name = name;
    this.color = color;
    this.wheels = wheels;}
    Vehicle.prototype.getDetails = function(){
        console.log( `The ${this.name} is ${this.color} in color.
            It has ${this.wheels} wheels`);
    };



// this is how we define class
class VehicleCl{
    // properties-> writing these properties is optional 
    // for declaring any property as private we use hash
    name;
    color;
    wheels;
    #regNumber;
    // constructor
    constructor(name, color, wheels, number){
        this.name = name;
        this.color = color;
        this.wheels = wheels;
        this.#regNumber = number;
    }
    // methods
    getDetails(){
        console.log(`The ${this.name} is ${this.color} in color.
            It has ${this.wheels} wheels. RegNo is ${this.#regNumber}`);
    }
}

// creating instance of class

const veh1 = new VehicleCl('Bike', 'Red', 2,88589);
console.log(veh1);

// Vehicle is a constructor function used to create instances of vehicles.
// VehicleCl is a class that essentially serves the same purpose but is written in a more modern and concise syntax introduced in ES6 (ES2015).