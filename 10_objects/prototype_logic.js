// prototypal behaviour 
// javascript tries to accessa all the  ancestars in a hierarchy, until it get null value -- > this is protypal inheritance
// prototype gives -- new keyword, this keyword , classes access , and protypal behaviour

const newNumber = [1,2,3,4,5]

// --> array is a object so array inherits all the properties from this object and this objet refere to null
// same way string 

//  what is function ? is function also a object ?

function multiplyBy5(num){
    return num * 5
}

console.log(multiplyBy5.prototype)
console.log(multiplyBy5.power) 

// funciton is a function and a object as well

function createUserName(userName, score){
    this.userName = userName
    this.score = score
}

// injecting a function inside created function prototype

createUserName.prototype.increment = function(){
    this.score++ 
}

createUserName.prototype.printMe = function(){
 console.log(`score is ${this.score}`)
}

// to use this increment function while using with created function

const shubham = new createUserName("shubham", 25)
const satyam = new createUserName("satyam", 250)

// now how to tell the ffunciton for which i need to call increment, it will get confuse and 
// while creating increment function I cannot hardcode it that will not be scalable
// to solve this issue we will ise this alsong with score in increment function 

shubham.printMe() // but this will give error can not find property of indefined because we were using it without new keyword 

// new keyword helps to inject the protype funciton 


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/