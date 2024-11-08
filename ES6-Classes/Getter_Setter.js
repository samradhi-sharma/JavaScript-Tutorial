/**GETTERS AND SETTERS */
// these are special methods that allow controlled access to object properties
// provide a way to define custom behavior when getting or setting the values of properties
// getters are used to get the value of a property, while setters are used to set the value
// getters do not accept any value but setters do
class Person {
    constructor(name){
        this.name = name;
    }

    get uppercaseName(){
        return this.name.toUpperCase();
    }
    set setName(newName){
        this.name = newName;
    }
}

const alice = new Person("Alice");
console.log(alice.uppercaseName);
alice.setName = "Bob";
console.log(alice.uppercaseName);