const user = {
    username : "shubham",
    price : 999,

    welcomeMessage : function(){
        //console.log(`${username}, welcome to website`)
    }
}

// using this keyword --> 
// this keyword gives the current context of the function, object whereever it is used
// in above object in welcome message if we use username directly it will always give shubham
user.welcomeMessage() //--> shubham 

//but what if we modify the username then in that case 
 user.username = "sam"

 // now if we accessed 

 user.welcomeMessage () //--> it will give shubham only 

 // so instead of directly using username use it with 'this' keyword

 const user2 = {
    username : "shubham",
    price : 999,

    welcomeMessage : function(){
        //console.log(`${this.username}, welcome to website`)
        //console.log(this)
    }
}

user2.welcomeMessage()

// no if we modify the username so current context is change and it will give specific result
user2.username = "satyam"
user2.welcomeMessage() 

// Now what if we try to do 
//console.log(this) // -> the current context is  {} -- (it is empty object)
// there is no global object 
// because we are in node in environment 

/// But if we do same thing in browser in console -- > console.log(this) --> it will give window as output


function chai (){
    let username = "shubham"
    //console.log(this) // --> it will give lot of info about the function
    //console.log(this.username)// o/p - > undefined //-> we can not access username with 'this' in a function
}

//// +++++++++  Arrow Function  +++++++++///

// const chai = function (){
//     let username = "shubham"
//     console.log(this) 
//     console.log(this.username)
// }

const chai2 = () => {
    let username = "shubham"
    console.log(this)  // here nothing will come as o/p we no result
    console.log(this.username) // here nothing will come as o/p we no result
    // we dont use this inside arrow function
}


const addTwoNumber = (num1, num2) => {
 return num1+ num2
}

// one more way of writing that is implicit return
// retunring only one line of code statement 
// removing curly brackets

const addThreeNum = (num1, num2, num3) => num1 + num2 + num3
// or
const addThreeNum = (num1, num2, num3) => (num1 + num2 + num3)

const addFour = (num1, num2, num3, num4) => ({username : "shubham"})
// to retun an object we need to use brackets otherwise it will give undefined as output

console.log(addFour(1,2,3,4))


