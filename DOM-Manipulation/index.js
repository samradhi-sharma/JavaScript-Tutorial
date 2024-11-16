/**DOM Manipulation */
// in simple words it is just to manipulate html using javascript
// on console we can type document. and many properties will be shown
// we can acess different parts using className, id, div, tsg name

console.log(document.getElementById("para"));
console.log(document.getElementsByClassName("first"))
console.log(document.querySelector("h1")); // this method returns the first element that matches the specified selectors string.
console.log(document.querySelectorAll("h1"));
// it returns all the elements that match the specified selectors string.

//  we can also use css selectors
console.log(document.querySelector("#para")); // id selector
console.log(document.querySelector(".para")); // class selector

// in these examples we have learned how we can access elements now lets make changes to them
const heading = document.getElementById("para");
heading.style.color = 'red';