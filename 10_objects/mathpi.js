// concept related to object
//console.log(Math.PI)
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI") // accessing property for PI
console.log(descriptor)

// we cannot change te value of PI ecause the the proper of the PI values 
// writable : false
// enumerale : false
//configurable : false
//  these all are set to fale and can t be changed so value can be overwrite

// ways of creating oject 

// const myNewObject = Object.create(null)

const user = {
    name : "shubham",
    isLoggedIn : " false",

    orderfood : function(){
        console.log("no food")
    }
}

console.log(user.getOwnPropertyDescriptor(user, "name"))

Object.defineProperty(user, "name", {
    //writable : false,
    enumerable: false 
})

// we can also stop iteration over the any key of a object by setting property like enumerable : false

for (let [key,value] of Object.entries(user)) {
    if(typeof valve != "function"){ // this will remove function while priniting key value
    console.log(`${key}: ${value}`)
    }
}