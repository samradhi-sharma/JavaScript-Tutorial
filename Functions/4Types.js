// There are four ways a function can be created in JavaScript. They are as follows:

// A function as a statement
// A function as an expression
// A function as an arrow function
// A function created using the Function constructor

// 1. A function as a statement
function Add(num1, num2){
    let sum = num1+num2;
    return sum;
}
let res = Add(7,8);
console.log(res);    
// Output: 15       //  

// 2. A function as an expression
let add = function a(n1, n2){
    let sum= n1+n2;
    return sum;
}
let res1 = add(7,8);
console.log(res1);
// Output: 15       //

// 3. A function as an arrow function
var add2 = (a, b) =>{
    a+b;
}
let res2 = add2(5,2);
  console.log(res2);
  
// 4. Using function constructor

var add4 = Function('a','b', 'return a+b');
let res4 = add4(5,2);
console.log(res4);