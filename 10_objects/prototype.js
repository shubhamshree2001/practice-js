
let myName = "shubham     "

console.log(myName.length)
// we need to create a method for finding the true length if strings
console.log(myName.trueLength) //


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.shubham = function(){
    console.log('shubham is present in all objects')
}

// what the aboove function is doing?
// it is accessing top level hierarchy and added a new property inside Object and now this property can be accessed anywhere 

heroPower.shubham()

myHeros.shubham()

// so now suppose we are giving function to an array so it should not go to the ancestors 
// example for it 

Array.prototype.heyShubham = function() {
    console.log('hi shubham')
}

// array can access the above function
//. but the object heroPower shoild not access it 

myHeros.heyShubham()
//heroPower.heyShubham() --> this will give error can not access this function over object
  
// inheritance 

const User = {
    name : "shubham",
    email : "shuhbham@example.com"
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable = false
}

// accessing properties of other object
// now we want to exchange/correlate these information between differtent object

const TaSupport = {
    makeAssignment : 'JS assignment',
    fullTIme : true,
    __proto__ : TeachingSupport  // connecting Teaching supoort object to TaSupport
}

// alternate way to connect 

Teacher.__proto__ = User

// new way to access
// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher) // access all properties of teacher in traching support


// now to create true length function to work over string

String.prototype.trueLength = function(){
    console.log(`${this}`)
    //console.log(`${this.name}`)
    console.log(`True length is ${this.trim().length }`)
}

const anotherUserName = "shubham           "

anotherUserName.trueLength()
"shubham".trueLength() // --> ut can be done due to this keyword use , it has the reference of current context