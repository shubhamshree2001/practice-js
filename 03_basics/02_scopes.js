//{} --> this is scope --> when it is used in a function or with if else then it is called as scope
//{} --> this is also used while creating object but in that case it is not called scope

// {
// the value which we declare inside this is called local scope and 
// can not be accessed outside this block scope
// }

// the variables declared outside this scope that is Global scope and can be accessed anywhere

// if we declare some variable using var it can be accessed from out of the scope and it can be modified
// so we dont declare variable using var 

// var c = 300

// if(true){
//     c = 30
// }

let a = 300

if(true){
    a = 30
    console.log(a) // here the value will be 30 
}

console.log(a) // here the value will be 300

// so the value does not get modified that soves many programming bug

/// +++++++++++ Nested scope and Closure  ++++++++++++++ //////////
// DOM - (Document object model) -- > how to manipulate html web pages through java script

function one(){
    const username = "shubham"

    function two(){
        const website = "youtube"

        console.log(username)
    }
    
    //console.log(website) // it will give error accessing outside the function scope
    
    two() // --> jere the function will execute 
}

one() // --> here the function will start executing first 


if(true){
    const username = "shubham"
    if(username === "shubham"){
        const website = "youtube"
        console.log(username + website)
    }
  // console.log(website) // --> it will give error
}

// console.log(username) /// --> it will give error

//// ++++++++++++++++ interesting ++++++++++++++  /////////

 one(5) //-- > here also correct

function one(num){
    return num + 1 
}

 one(5) //--> here also correct


 addTwo(5) // --> here it will give error cannot access before intialization
 const addTwo = function(num){
    return num + 2
 }

 addTwo(5) // --> here it is correct 
