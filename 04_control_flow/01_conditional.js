// basic if else , else if condition flow
// comparison operator like >,<,<=,>=,==, !=, !==, ===

//logical operator --> &&, || 

// switch case conditions 
const month = 3

switch(month){
   case 1: 
    console.log("jan")
    break;
   case 2: 
    console.log("feb")
    break;
   case 3: 
    console.log("mar")
    break; 
   default:
    console.log("default")
    break;
}

// bydefault what happen when the case matches after that all the lines of code get executed except default without matching the case
// so we use break here 


// ++ Nullish Coalescing Operator (??) : we need to check over --> null undefined
// it check the safety over null value

let val1;
//val1 = 5 ?? 10

// same as dart if fist value is null assign second value 
val1 = null ?? 10
val1 = undefined ?? 15

val1 = null ?? 10 ?? 20 // 10 will be assigned


// ++ ternary operator ++ //

// condition ? true : false --> same as dart
