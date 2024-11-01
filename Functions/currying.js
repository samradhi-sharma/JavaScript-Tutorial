// Currying is a functional programming technique where a function with multiple arguments is transformed into a series of functions, each taking a single argument.

// Instead of taking all arguments at once, the curried function takes the first argument, returns a new function that takes the next argument, and so on until all arguments are provided. The final function then returns the result.

// In simpler terms, currying breaks down a function that takes multiple parameters into a chain of functions that each take one parameter.

function power(b){
    return function(a){
        return a ** b;
    };
}

const square = power(2);
console.log(square);
console.log(square(4));

const cube = power(3);
console.log(cube);
console.log(cube(2));