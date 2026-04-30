class User {
    constructor (userName){
        this.userName = userName
    }

    logMe(){
        console.log(`username is ${this.userName}`)
    }
}

class Teacher extends User{
   constructor(userName, email, password){
      super(userName)  //setting username inside user without sending with this 
                        // using super so it by default takes this in background 
      this.email = email
      this.password = password
   }

   addCourse(){
    console.log(`a new course was added for ${this.userName}`)
   }
}

const userOne = new Teacher("shubham", "shubham.com", "123")

userOne.addCourse()

const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(userOne === User);
console.log(userOne instanceof User);
