/** function returning function */
function greet(message){
    return function(wishes){
        console.log(`${wishes}, ${message}`);
    };
}

// const greeting = greet("I hope you are doing well");
// greeting("hello");

// OR

greet('welcome to the session')("hi");