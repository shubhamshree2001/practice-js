const email = "abc.com"

if(email){
    console.log("has email")
}else{
    console.log("has no email")
}

//// Falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function (){}

// check an object 

const a = {}

if(Object.keys(a).length === 0){
    console.log("it is an empty object")
}

// false == 0 --> true
// false == '' --> true
// 0 == '' --> true