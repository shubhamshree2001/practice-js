let myDate = new Date() //it is a object 
 // myDate.toString()

 let myCreatedDate = new Date(2023, 0, 23)

 let myCreatedDateOne = new Date("01-14-2023")

 let myTimeStamp = Date.now()
 myCreatedDate.getTime()

myCreatedDate.getDay()

let newDate = new Date()
newDate.toLocaleString('default', {weekday : "long", timeZone : '' }) // it will customizre the view of weedday