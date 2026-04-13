"use strict"; // treat all JS code as newer version -- to maintain standard and to treat all old and new code as per newer version
// in latest updates by default the code are trated as newer version only 

// alert( 3 + 3) // we are using nodejs, not browser -- 
//-- running this command in node js will give error but in console of browser it will give 6 as output

console.log(3 
    +
     3) // code readability should be high

console.log("Hitesh")


let name = "hitesh" // string data type
let age = 18 // int data type
let isLoggedIn = false
let state;


// these all are primitive data type

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value / empty value 
// undefined => till now no value is assigned
// symbol => unique. moslty used in react to differentitate between different component
// it is used to make some component which you have made and want to differentiate we use Symbol


// object

// null is standalone value that means null can be a value when there is no result
// same as the response from api is null

console.log(typeof "Hitesh"); // it will give string 
console.log(typeof undefined); // undefined
console.log(typeof null); // object

// the typeof undefined is undefined
// but the type of null is object

// --------- DataTyoes of JS summary -----

// DataTypes summary 
// -- Types of data type in JS 
// 1. Primitive 
// 2. Non-primitive
 // Bsis of categorization 
 //1. how the parameters(data) are saved in the memory 
 //2. How we can access those parameters from memory 

 // Primitive (call by vale)

 // when you copy any data and use it -- the original data - memory reference is not used , 
 // the copied data is given and the changes which is done to the copied parameter is done in that only 

 // 7 types : String, Number, Boolean , null, undefined, symbol, BigInt

  const id = Symbol('123') 
 // it will give data type symbol
 // the id can be unique for this symbol 

 const anotherId = Symbol('123')

 //even if you pass the similar values  in symbol but the anotherId and id will not be the same
 console.log(id === anotherId) // false

 const bigNumber = 34563656372818274666737n // - > n will convert the number into bigInt 

 // Reference Type(non-primitive)
 // array, object , function

 const heroe = ["a", "b", "c"] // -> array

 let myObj = {
    name: "shubham",
    age: 26,
 }

 // function can also be treated as a variable. in Js
  
 const myFuntion = function(){
    console.log("hello world");
}

console.log(typeof myFuntion) // -> it will give type as function



