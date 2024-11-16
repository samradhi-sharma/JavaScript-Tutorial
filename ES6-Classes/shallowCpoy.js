const user1 ={
    username : "sam",
    age:12,
}; 
// const user2 = user1;
// console.log(user1);
// console.log(user2);

// user2.username='Harry';
// console.log(user2);
// console.log(user1);

// here if i make any changes to user2 it will changes to user1, hence it is of no use

/**Shallow Copy */


// const user2 ={...user1};
// here we used spread operator
// console.log(user2);
// console.log(user1);

// user2.username='Harry';
// console.log(user2);
// console.log(user1);

// Object.assign
const user2 = Object.assign({}, user1);
console.log(user2);
console.log(user1);

user2.username = 'Harry';
console.log(user2);
console.log(user1);
// it is acrually creating a copy but it is actually copying the first layer if you have object inside object it won't copy that it will simply copy the reference of the 
// memory where it is stored