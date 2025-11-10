let score = undefined

//console.log(typeof score); -- these both are way of witimg both will give o/p as string
//console.log(typeof(score)); -- "" ""

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


// "33" => 33 -- it is converted to number
// "33abc" => NaN -- after conversion the type of is -- number -- but the value is NAN --(not a number)
//  true => 1; false => 0 -- after conversion the type of is number -- but the value is Nan
//null => 0 after conversion type of is number -- value is 0
// undefined => after conversion type of is number , value is NaN

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false  //if empty strimg then the value is false
// "hitesh" => true //if not empty then true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);  
console.log(typeof stringNumber);

// number is converted to string here

// *********************** Operations ***********************


let value = 3
let negValue = -value
// console.log(negValue); -- -3

// console.log(2+2); 
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);  -- 12
// console.log(1 + "2");  --12
// console.log("1" + 2 + 2); -- 122
// console.log(1 + 2 + "2");  -- 32

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);  -- 1
// console.log(+"");  -- 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// prefix and postix operator

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

