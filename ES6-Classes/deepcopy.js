const user1 ={
    username:'Sara',
    age:25,
    marks:{
        maths:80,
        science:90,
    },
    getMarks(){
        console.log(this.marks);
    }
};

// deep copy

const user2 = JSON.parse(JSON.stringify(user1));
user2.username='harry';
user2.marks.maths =10;
console.log(user2);
console.log(user1);
