/**this Keyword */
// refers to the object that is currently executing 

const person={
    name:"john",
    age:25,
    greet: function(){
        console.log(`hello, my name is ${this.name} and I'm ${this.age} years old`);


    }
};
person.greet();


/**Something important */
const name = "Alice";

const person1 ={
    name: "john",
    greet:function(){
        const innerFunc =() =>{
            console.log(`Hello, ${this.name}!`);

        };
        innerFunc();
    }
};
person1.greet();
// As we are using arrow function in the innerFunc which preserves the lexical environment of the parent function , allowing it to access
//  the "name" declaration from the outer scope. In regular functions, the "this" keyword would have referred to the global object instead of the parent object.

