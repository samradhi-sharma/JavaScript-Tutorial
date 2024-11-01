/** CaallBack Functions */
function greet(wish){
    console.log(`${wish()}, Welcome to js course`);
}

function sayHi(){
    return "hi";
}
function sayHello(){
    return "hello";
}
function goodMorning(){
    return "good morning";
}

greet(sayHi);
greet(sayHello);
greet(goodMorning);