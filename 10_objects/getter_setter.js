class User {
    constructor(username, email, password){ 
        this.username = username;
        this.email = email;
        this.password = password;
    }
    // there is by default getters and setters over each variale inside the constructor
    // if we use getter then we need to use setter also , both the methods we need to implement 
    // getter is accessed outside the class 
    // set is to set inside the class
    // the name of method for getters and setteres will e same as the for which you are creating

    // get password(){
    //     return this.password.toUpperCase()
    // }

    // set password(value){
    //      this.password = value
    // }

    // the aove two function will create issue
    // as in constructor we are also setting the values 
    // and when we try to aacess the value it comes form the construnctor
    // so it gets confuse whihc to set and get so it keep setting agian and again similarly for getting
    // it gives error like call stack is mx 
    // this problem can be fix by changing the variale name 

    get password(){ 
        return this._password.toUpperCase()
    }

    set password(value){
         this._password = value
    }

}

const shubham = User("shubham", "shubham@examp.com", "abc")

console.log(shubham.password)
 

////++++++++++++ old ways for getters and setters when these thing were not there +++++++++////

//earlier when class was not there then we have define properrty to use setters and getter 
// the below is the way to do when we didnot had getter and setter method

function UserOne(email, password){
  this._email = email;
  this._password = password;

  Object.defineProperty(this, 'email', {
    get :function(){
      return this.email.toUpperCase()
    },

    set : function(value){
       this.email = email
    }
  })
}

const userThree = new UserOne("shuhbam", "1234")

console.log(userThree.email)


/// +++++++++.  object base getters and setters implementation ++++ ////////
// _ underscore is used to define a private property
const Teacher = {
    //email = "shubham@com",
  _email = "shubham@com",
  _password = "1234",

  get email() {
    return this.email.toUpperCase() 
  },

  set email(value){
   this._email = value
  }
}

// using factory function that is --> object.create

const tea = Object.create(User) 
console.log(tea.email)
