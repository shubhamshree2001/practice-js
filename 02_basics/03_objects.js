//when we create object using literals then it wont be singleton 
// but when we create object using constructor then it will be singleton

// ---- object literals --- 

// when we add a key value pair inside the object . the Key us always stored as a string bydefault
const JsUser = {
    name : "shubham",
    age : 18,
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"],
    "fullName" : "Shubham Agrawal"
}

JsUser.age 
JsUser["name"]
JsUser["fullName"]
JsUser.fullName // -- it will give error it wont work 

//-- using symbol as a key inside object 

const mySymb = Symbol("key1")

const JsUser2 = {
    [mySymb] : "myKey1"
}
JsUser2[mySymb]

// changing the value of a key 
JsUser.name = "Satyam"

Object.freeze(JsUser) //-- it will freeze the object and wont allow to modify the object 

/// function can also be added in a map , it can also be treated as a variable 
JsUser.greeting = function(){
    console.log("Hello Js User")
}

console.log(JsUser.greeting) // it will give o/p -> function(anonymous)

JsUser.greetingTwo = function(){
    console.log(`hello Js, ${this.age}`) // using this here to access the keys inside the object
}

console.log(JsUser.greetingTwo) // it will give hello js satyam



////.  2nd part 

// object.create creating object through constructor object 
//const tindUser = new Object() // it is a singleton 

const user = {} // it is non singleton

user.id = "123abc"
user.name = "shubham"
user.isLoggedIn = false

console.log(tindUser)  // it will give {}


const regularUser = {
    email: "shubham@gmail.com",
    fullName : {
        userFullName : {
            firstName : "shubham",
            lastName : "agrawal"
        }
    }
}

console.log(regularUser.fullName.userFullName.firstName)  // ? this operator is there to to check whether the value for that is there or not same like dart

console.log(regularUser.fullName?.userFullName.firstName)


const obj = {1 : "a", 2 : "b"}
const obj2 = {3 : "c", 4 : "d"}

//const obj3 = {obj1, obj2 } // it will add object inside object 

const obj4 = Object.assign(obj, obj2) // it will give one object  {1 : "a", 2 : "b", 3 : "c", 4 : "d" }
const obj4 = Object.assign({}, obj, obj2) // it will give one object  {1 : "a", 2 : "b", 3 : "c", 4 : "d" } 
// in above we have added {} (optional parameter) .. it will give same result but it will ensure that it will give in this manner only in one object form
// giving optinal parameter {} -- > this means that it will be target and all otheres are source 
 
const obj5 = {...obj1, ...obj2}

// array of objects 

const users = [
    {
        email : "abc"
    }, 
     {
        email : "wxy"
     },
     {
        email : "efg"
     }
]

console.log(user[1].email)

// to get all the keys of some object 

console.log(Object.keys(user)) // hgere you will get all the keys inside a array
console.log(Object.values(user))

console.log(Object.entries(user)) // it will give output which is in a array where key value will be in array
// --> [['key', 'balue], ['key', 'value'], ['key', 'value']]

// to check any property value exists or not in map 
console.log(user.hasOwnProperty('name'))


// destructuring of object +++++++ //////

const JsUser3 = {
    name : "shubham",
    age : 18,
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"],
    "fullName" : "Shubham Agrawal"
}

// suppose you want to access some key from the object but dont want to write like JsUser3.lastLoginDays
// what we can do ?

const {lastLoginDays} = JsUser3

// now we can access directly be lastLoginDays

// we can also do :

const {lastLoginDays : days} = JsUser3

// now we can access using days 


const navBar = () => {}

// we do desructuring in react by 
// there is props 

const navBar = ({company}) => {}

navBar(company = 'shubham')



