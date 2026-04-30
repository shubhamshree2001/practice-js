//JS arrays are resizable , can contain mix data types, zero based index, element can be accesed using index
// when you copy array it creates shallow copy (same reference point) rather than deep copies 
const myArr = [0,1,2,3,4, true, "shubham"]

const arr2 = new Array(1, 2 ,3, 4)

// array method

myArr.push(6) //- add element in the arr
myArr.pop() //- remove the last element of array
myArr.unshift(9) // - adding elemnt at first position of element 
myArr.shift() // - remove last element 

myArr.includes(9) // false does not exist in array
myArr.indexOf(9) // -1 there is no such index in arr

const newArr = myArr.join() // - it will convert all the array element to string type 
// values wiil be same but it is in form of string 

// slice , spice 

console.log("A ", myArr)
const myn1 = myArr.slice(1,3) // o/p - [1,2] -- it will take element from first index till before the third index

const myn2 = myArr.splice(1,3) // o/p - [1,2,3] -- it is taking till the index 3

// -- difference between splice and slice 

// slice will not manipulate the original array 
// in case of slice oriinal array myArr -- o/p - [0,1,2,3,4, true, "shubham"]

// splice will manipulate the original array 
//myArr -- o/p -- [0,4,true,"shubham"]

//// ++++++++ part 2 arrays ++++++//

// arrays can take array as input as well in JS

const firstArr = [1, 2, 3, 4, 5]
const secondArr = [9, 8, 7, 6]

firstArr.push(secondArr) // - [1,2,3,4,5, [9,8,7,6]]

firstArr[5][1] // o/p - 8

const thirdArr = firstArr.concat(secondArr) // o/p - [1,2,3,4,5,9,8,7,6]

const fourArr = [...firstArr, ...secondArr] // o/p -- [1,2,3,4,5,9,8,7,6]

const newFifthArr = [1,2,3, [4,5,6],7,[6,7,[4,5]]]
const usableNewFifthArr = newFifthArr.flat() 
//-- it will flatten the complete array it takes dept as a integer value till how much we want to flatten it 
// it also takes Infinity so it will flatten to the max depth itself

Array.isArray("Shubh") // -- it will check the entered data is array or not -- // o/p -- false
Array.from("shubh") // it will conver it to array // o/p -- ["s", "h", "u", "b", "h"]

Array.from({name : "shubh"}) // it will give empty arr // o/p - [] 
// it wont be able to convert map to array


let score1  = 100
let score2 = 200
let score3  = 300

Array.of(score1, score2, score3) // it will form an array // o/p -- [100, 200, 300]


////+++ advance of arrays ++++. --->> study if you want to understand holes --> last video js series 51///
