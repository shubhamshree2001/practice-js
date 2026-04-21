// for loop 

for(let index = 0; index < 1; index ++){
    const element = index;
    if(element == 5){
          //  console.log("5 number");
    }
    //console.log(element);
}

for(let index = 0; index < 10; index ++){
    //console.log(`outerloop : ${index}`)
   for (let j = 0; j < 10; j++) {
   //console.log(`innerloop : ${j}, outerlop : ${index}`)
   //console.log(`${index} * ${j} = ${index * j}`)
   }
}

let arr = [1,2,3,4]

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    //console.log(element)
}

/// break and continue

//break : loop will execute till the index matches with 5 and then it terminate the execution and comes out
for (let index = 0; index < 20; index++) {
    if(index == 5){
        console.log(`detected`)
        break;
    }
    console.log(`value of ${index}`) 
}

// continue : loop will execute till the end but for the condition it wont execute it directly goes to next index 
// stops the execution of that index after continue keyword
for (let index = 0; index < 20; index++) {
    if(index == 5){
        console.log(`detected`)
        continue;
    }
    console.log(`value of ${index}`) 
}


//// ++++++++ while loop ++++++ /////

let index = 0

while(index <=10){
    console.log(`${index}`)
    index++
}

let arr2 = [1,2,3,4,5]
let ab = 0

while(ab < arr2.length){
    console.log(`arr2[ab]`)
    ab++
}

// +++++++++ do while loop ++++ //
// first it excutes the loop then it checks the condition

let score = 1

do {
    console.log(`${score}`)
    score++
}while(score <=10)