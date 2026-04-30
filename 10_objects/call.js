function SetUserName(userName){
this.userName = userName
console.log(called);
}

function createUser(userName, email, password){
   // SetUserName(userName), // it will now work directly it wont execute 
   // it will get the context and it will remove rom it but does not hold the reference 
    SetUserName.call(this, userName), // using .call will hold the reference and set the variable userName 
    // but still using just call will not work because it does not know which value we are sending
    // so we need to pass current context also which is 'this'
    this.email = email,
    this.password = password;
}

// call is senc=ding current context 
const shubham = new createUser("shubham", "shubham@example.com", "acb")

console.log(shubham);