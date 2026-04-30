class User {
    constructor(username, email, password){ // it is not necessary write constructor everytime
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.paasword}abc`
    }

    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const userOne = new User('shubham', 'shubham@example.com', "123")

console.log(userOne.encryptPassword())

// suppose if classes was not there then how to do it 
// function also behaves as a object

function userCreation(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

userCreation.prototype.encryptPassword = function(){
    return `${this.paasword}abc`
}

userCreation.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
}

const userTwo = new userCreation("shubham", "shubham@example.com", "345")

console.log(userTwo.encryptPassword())

// sp both the abive are the same
