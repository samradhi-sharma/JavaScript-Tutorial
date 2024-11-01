/**Higher Order Function */
// function which accepts other function as a argument or a function returning a function


 const inputs =[2,3,4,5,6,7,8,12,1,4,16];

//  function square(inputs){
//     const squared =[];
//     for(let num of input){
//         squared.push(num*num);
//     }
//     return squared;
//  }

//  function cubic(inputs){
//     const cubes =[];
//     for(let num of inputs){
//         cubes.push(num*num*num);
//     }
//      return cubes;
//  }

/**Here we are doing the same thing in both the function
 * except one line so we need higher order functions let's see how
 */

function operation(inputs, fn){
    const output = [];
  for(let num of inputs){
    output.push(fn(num));

  } 
  return output; 
}

function square(number){
    return number*number;
}

function cube(number){
    return number*number*number;
}

console.log(operation(inputs, square));

/**1. map() */
const inputs1 = [2,4,6,8,7];
const squaredArray = inputs1.map((num) => num*num);
console.log(squaredArray);


/**2. reduce() */
// reduce(redFn, initial value);
// function redFn(accumulator, currentValue, currentIndex, arr)
// here currentIndex is optional

const input2 = [2,3,4,5,6];
const sum = input2.reduce((total, num) =>{
    return total + num;
},0);

console.log(sum);