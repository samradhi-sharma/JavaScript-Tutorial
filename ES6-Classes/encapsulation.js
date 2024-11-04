/**ENCAPSULATION */
// It is the concept of bundling the data and methods that operate
// on the data into a single unit known as class
class Person{
    #name;
    #age;
    constructor(name, age){
        this.#name = name;
        this.#age = age;
    }
    greet(){
        console.log(`Hello, my name is ${this.#name} and I am ${this.#age}`);
        this.#incrementAge();
    }
    #incrementAge(){
        this.#age++;
    }
    
}