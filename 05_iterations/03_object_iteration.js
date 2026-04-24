const myObj = {
    a : 1,
    b: 2,
    c: 3,
    d: 4,
    e:5
}

for (const key in myObj) {
    console.log(key) // it will give all keys
    console.log(myObj[key]) // it will give all values
}

// for in loop over array
const myarr = [1,2,3,4,5,6]

for (const key in myarr) {
       console.log(key) // it will give all index of array
       console.log(myarr[key]) 
}