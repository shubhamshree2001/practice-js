// Immediately invoked function expression
//--> as we have written a function that function should execute immediately

// so those function which execute immediately
// Sometimes there will be problem due to pollution of Global Scope
// so to remove the variables / declaration of Global scope we have used IIFE

// syntax using two parenthesis ()()
// first for function definition and second for function execution

// it is name IIFE
(function chai(){
    console.log("db connected")
})();

// The immediately invoked funcition gets invoked but it does know where to stop the context
// so we need to add semicolon ;  specifically to end

// IIFE in arrow function
( () => {
    console.log("db connected")
})();

// passing patameter
( (name) => {
    console.log(`db connected ${name}`)
})("shubham"); //> passing name parameter value here because it is executing the function