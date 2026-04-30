class User {
    constructor(userNane){
        this.userNane = userNane
    }

    logMe(){
        console.log(`${this.userNane}`)
    }

    static createId(){ 
// sometime you dont want to give access of a method in a class to other object instancesiated from that class 
// ex: if we have created the object of user like shubham we can not access themethod createId if it is static 
// so static keyword restrticts the object to access the method outside the class
       return 123
    }
}

const shubham = new User("shubham")

//console.log(shubham.createId())


class Teacher extends User{
   constructor(userName, email){
      super(userName)    
      this.email = email
   }
}

const satyam = new Teacher("shuham", "example.com")

satyam.logMe()
satyam.createId() // --> it will restricts as it is create id is static 