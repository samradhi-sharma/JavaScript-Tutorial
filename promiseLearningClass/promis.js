const request = new Promise((resolve, reject) =>{
//    the promise accepts two parametes which are actually function resolve and reject
    setTimeout(()=>{
        resolve({firstName:"samdam", lastname:"damdam"});
        console.log("Promise initiated");
    }, 1000);
})
request.then((value) =>{
    console.log(value);
})
.catch((err) => console.log(err))
.finally(()=> console.log('request completed'));
console.log(request)
// in resolve we can pass anything a string, a number or a object phir then catch kar lega
 