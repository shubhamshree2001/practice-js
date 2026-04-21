const score = 400

const balance = new Number(100) // it will know that the type is specific Number

balance.toString()

balance.toFixed(2)

balance.toPrecision(3) // for rounding off the number to that digit

balance.toLocaleString('en-IN ')


//+++++++++++++++++++ Maths +++++++++++++++
Math.abs(-4)
Math.round(4.6)
Math.ceil(4.2)
Math.floor(4.9) // 4
Math.min(4,3,6,8)
(Math.random()*10) + 1 // -- give value between 0 and 1 

const max = 20
const min = 10

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // 19