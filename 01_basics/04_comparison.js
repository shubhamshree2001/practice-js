//console.log(2 >  1)
//console.log(2 >=  1)
//console.log(2 <  1)
//console.log(2 ==  1)
//console.log(2 != 1)

// avoid these type of conversion which are shown below 
// it auto converts 
console.log( "2" >  1) //-- true
console.log("02" >  1) // -- true

// sometimes these kind of conversion does not give predictable result

console.log(null > 0) // false
console.log(null == 0) // false
console.log(null >= 0) // true here the null get converts and does not give the predictable result

// In JS the working of '>,< ' is different and working of '<= or >=' is different


console.log(undefined > 0) 
console.log(undefined == 0) 
console.log(undefined < 0) 

// strict check which is ===
// It checks the value as well data type 

console.log( "2" ===  2)