// while creating function in javascript --> passing parameters in it we dont need to add the data type 

// when we create functions and we decleare what to take in that is : Parameters 

function addTwoNumber(number1 , number2) { // parameters are number1, number2
   console.log(number1 + number2); // o/p -> 8
}

addTwoNumber(2,3) // here while passing the value it is argument

const number3 = addTwoNumber(2,4)

console.log(number3) // o/p -> undefined 

function addTwoNumber2(number1 , number2) { // parameters are number1, number2
   return(number1 + number2); // o/p -> 8
}

const number4 = addTwoNumber(2,4)
console.log(number4) 

function loginUserMessage(username = " sam"){ // giving default value
    if(username === undefined){
        console.log("enter name")
        return 
    }

    return `${username} just logged in`
}


/// ++++ +++++++++ ---------- ////

// suppose we dont know how many parameters can come in a function

function calculateCartPrice(num1) {
    return num1
}

console.log(calculateCartPrice(200, 300, 400)) 

// to solve such problem of multiple value to pass if we dont know the number of paramert 
// we have res operator

function calculateCartPrice(...num1) {
    return num1
}

console.log(calculateCartPrice(200, 300, 400)) 

// now the functon will take all the input in form of an array [200, 300, 400]

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

console.log(calculateCartPrice(200, 300, 400, 500)) 

// o/p --> val1 will be 200 , val2 will be 300 , num1 will be [400,500]

// pass object in a function 

const user = {
    username : "shubham",
    age: 18
}

function handleObject(anyObject) {
   console.log(`user is ${anyObject.username} and age is ${anyObject.age}`)
}

handleObject(user)
// or

handleObject({username : "shubham", age: 18})

// passing array in function 

const myArr = [ 100, 200 ,300]

function returnSecondValue(anyArray){
  return anyArray[1]
}

returnSecondValue(myArr)
