const name = "shubham"
const repoCount = 50

console.log(name + repoCount + "value")

// here we are using backtips for string interpolation
console.log("hello my name is ${name}")

// other way to declare string 
const gameName = new String('shubham')
// using the above way the string here is a object where each letter is stored as a key value pair
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(3))
console.log(gameName.indexOf('t'))

const newString = gameName.substring(0,4) // -- shub -- negative index will not be considered
console.log(newString)

const anotherString = gameName.slice(-8,4) // neagtive index can be given 

const newStringOne = " shbha "

console.log(newStringOne.trim)


const url = "abc.%20.com"

url.replace('%20', '-')
url.includes('')
url.split('-')