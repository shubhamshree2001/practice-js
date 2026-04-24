//for of  Loop
//objects in a array
//[{}, {}, {}]

const arr = [1,2,3,4,5]

for (const element of arr) { // object means on what you want to put loop
    console.log(element)
}

const greetings = "Hello World !"

for (const element of greetings) {
    console.log(greetings)
}


// ForEach loop over an array

arr.forEach(function (item){
  console.log(item)
})

// using arrow function in ForEach
arr.forEach( (item) =>{
  console.log(item)
})

// forEach loop has item, index, and complete array
arr.forEach( (item, index, arra) =>{
  console.log(item)
  console.log(index)
  console.log(arr)
})

// passing callback function on ForEach loop

arr.forEach(print)

function print(item){
    console.log(item)
}


// ForEach loop over array of objects
const arrayObj = [
    {
        a : 1,
        lang: js
    },
    {
        a : 2,
        lang: python
    },
    {
        a:3,
        lang: dart
    }
]

arrayObj.forEach( (item) => {
   console.log(item.a)
})

//how to return values from array -->> for each loop does not return any value 
// if you return anything from from foreach loop it will give undefined 

const nums = [1,2,3,4,5,6,7,8,9,10]
// inside filter it is same it takes a function and return a condition
const newNums = nums.filter((item) => items > 4)
const newNums = nums.filter((item) => { return items > 4})
console.log(newNums)

// another way without using filter
// const newNums = []
//  nums.forEach((item) => {
//     if(item > 4){
//        newNums.push(item)
//     }
// })


// applying filter over array of objects 
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);



  // using map over array

  const numbers = [1,2,3,4,5,6,7]

 //const newNumbers = numbers.map((item ) => {return item +10})


  /// concept of chaining 
 
  const newNumbers = numbers.map((item)=> item * 10).map( (item) => item + 10).filter((item) => item >= 40)



  // ++++++++++ Reduce +++++++++ //

  const myReduceNums = [1,2,3,4,5,6,7,8]

  const myTotal = myReduceNums.reduce(function (acc , currentVal) {
    console.log(`acc : ${acc}, currentval : ${currentVal}`)
    return acc + currentVal}, 0) 
  // here 0 is the initial value which is given for accumulator
  //the accumulator iniitiall a empty variable

    const myTotal2 = myReduceNums.reduce( (acc , currentVal) =>
    //console.log(`acc : ${acc}, currentval : ${currentVal}`)
     acc + currentVal, 0)

     
     
     const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);


// MAps

const amap =  new Map(). // stores unique key values 

amap.set('IN', 'India')
amap.set('USA', 'United States Of America')
amap.set('FR', 'France')

for (const element of amap) {
    console.log(element)
}

// destructuring of map having both key and value 

for (const [key, value] of amap) {
    console.log(key, ":-", value)
}
// we can not use ForIn loop over map 



///++++++++++++++?/////////////////


// ForOf loop over object 
const myObject = {
    a: 1,
    b: 2,
    c: 3,
}

// for (const [key , value] of myObject) {
//     console.log(key, ":-", value)
// }

// it will give error as the object can not be itterated using ForOf loop 


