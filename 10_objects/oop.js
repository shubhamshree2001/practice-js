const user = {
    username: "shubham",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        // console.log(`${this.username}`)
        // console.log(this)

    }
}

// constructor function

const promiseOne = new Promise()

// the new keyword is the constructor function
// this contructor function help us to create multiple instances of that object literal
// this new keyword helps to create ne context of it

function User(userName, loginCount, isLoggedIn){
    this.userName = userName; // this.variable is the variable inside the user , instead of thi. we can user some other variable alos
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    //return this; //if we dont this then also it will work 
}

// const userOne = User("shubham", 8, true)
// console.log(userOne)

// const userTwo = User("Satyam", 10, false)

// Now if we log userOne the values are replaced with the values of userTwo that is a issue 
//so to fix this issue we use new keyword. so that we can make multiple copies of object and use, it wont affect the original object
// just add new keyword to it 

const userOne = new User("shubham", 8, true)
const userTwo = new User("Satyam", 10, false)
console.log(userOne)
console.log(userTwo)

console.log(userTwo.constructor)




