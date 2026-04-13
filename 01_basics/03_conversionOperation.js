let score = undefined

// let score = 33 it will give int
//-- these both are way of witimg both will give o/p as string
//console.log(typeof score); 
//console.log(typeof(score));

// let score = "33"
// here the number is in string and if I am sure it will come in int so we will do below operation
let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber); --> it will print number 


//score = "33" => 33 -- it is converted to number
//score = "33abc" => NaN -- after conversion the type of is -- number -- but the value is NAN --(not a number)
//  score = true => 1; false => 0 -- after conversion the type of is --  number -- but the value is Nan
//score = null => 0 after conversion type of is number -- value is 0
// score = undefined => after conversion type of is number , value is NaN

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// isLoggedIn = 1 => true; 0 => false
// isLoggedIn = "" => false  //if empty strimg then the value is false
// isLoggedIn = "hitesh" => true //if not empty then true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);  
console.log(typeof stringNumber);

// number is converted to string here in above 

// *********************** Operations *********************** 



let value = 3
let negValue = -value
// console.log(negValue); -- -3 value

// console.log(2+2); 
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); -- it is power
// console.log(2/3);
// console.log(2%3); -- reminder

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3); -- > "hello hitesh"

// console.log("1" + 2);  -- 12
// console.log(1 + "2");  --12
// console.log("1" + 2 + 2); -- 122
// console.log(1 + 2 + "2");  -- 32
// -- both the ouptut depends the data type of first value which is entered in the expression

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);  -- 1
// console.log(true+);  -- this will give error it wont run 
// console.log(+"");  -- 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++; // 101
++gameCounter; // 101
console.log(gameCounter);

// prefix and postix operator

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
//mdn prefix postfix


// start again js from 8th video 
// and backend from 2nd video