const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur" // it is also allowed but dont use it
let accountState;

// using semicolon is optional in JS
// accountId = 2 // not allowed -- constant varibale value can not be changed

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

// in JS to declare variable there are two way using var or let
// dont use var ever in JS

/*
Prefer not to use var
JS does not know scope
because of issue in block scope and functional scope
scope means - {} so any where this comes there will be issue with the variables declared by var.
because var variable value changes everywhere in the project if name is same
*/

// alwaysuse const and let for variables

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])