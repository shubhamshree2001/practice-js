/// promise has three states 
// pending , fulfilled and rejected 
// promise is object 

// in JS if you need new instance of promise 
// promise was introducesin ES6 before that also async things were working 
// earlier there were libraries like Q or blue bird to use all the functionalities like fetch catch finally inside JS engine

// there are two things in promise /
//1. creating promise /
//2. consuming promise

// ---- creating promise ---//
const promiseOne = new Promise(function (resolve, reject) { // it takes a callback
    // do an async task
    //DB calls, cryptography, network
    setTimeout(function () {
        console.log("async task is complete")
        resolve() // it connects this to .then now it will print promise consumed
        // firstly the task will get complete then resolve will tell now we cacn execute what ever is there in .then 
    }, 1000)
})

// -- consuming promise ---- //
// in this what ever is inside the promise one it return all the things  
promiseOne.then(function () {
    console.log("promise consumed")
})

// alternate way to create promise without assigning it into a variable

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("async task two is complete")
        resolve() // it connects this to .then now it will print promise consumed
        // firstly the task will get complete then resolve will tell now we cacn execute what ever is there in .then 
    }, 1000)
}).then(function () {
    console.log("promise two consumed")
})


const promiseThree = new Promise(function (resolve, reject) { // it takes a callback
    // suppose it will bring some data from the network
    // we will do something on that data in .then we need to pass that data to .then 
    // for it also we use resolve 

    setTimeout(function () {
        resolve({ sername: "shubham", email: "shubham@example.com" }) // like this the data is passsed 
    }, 1000)
})

promiseThree.then(function (user) { // now as you know we have passed thing so we can assume here also that some data will come 
    console.log(user);
})


const promiseFour = new Promise(function (resolve, reject) {

    setTimeout(function () {
        //let error = true  // may be sometime there will be error
        let error = false
        if (!error) {
            resolve({ username: "shubham", email: "shubham@example.com" })
        } else {
            reject(" Error: something went wromg") // it will give error
        }
    }, 1000)
})

// this is the wrong way to take out sub parameters from the the object if 
/* const username = promiseFour.then((user) => {
    console.log(user)
    return user.username
})
console.log(username); */ // it will give error 

// to do above things  the concept of chaning 

promiseFour.then((user) => {
    console.log(user)
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function (error) {
    console.log(error)
}).finally(() => {
    console.log("promise is either rejected or executed")
})

//// ++++ using async await methods instead of then over promise +++///

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        //let error = true  // may be sometime there will be error
        let error = false
        if (!error) {
            resolve({ username: "js", email: "js@example.com" })
        } else {
            reject(" Error: js went wromg") // it will give error
        }
    }, 1000)
});


// inside async await we cannot handles error directly
async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()


// ++ use of async await implementation

async function getAllUsers() {
    try {
        const response = await fetch('https://api.github.com/users/shubhamshree2001')
        //console.log(response)
        const data = await response.json() // await this converion as well because this lso takes time
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

getAllUsers()


/// ++ use of .then to do the same above api call

fetch('https://api.github.com/users/shubhamshree2001')
    .then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data)
    }).catch((error) => {
        console.log(error)
    }) // to handle the returned response

// Now we execute we notice that the functions which are written above at 
// top of the file are executed lately but the fetch method below is executed earlier 