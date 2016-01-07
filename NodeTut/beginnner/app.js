// function statement
function greet(){
  console.log("Hi Bryan");  
};
greet();

//functions are frist-class... functions can be passed around... event as arguments.
function logGreeting(fn) {
    fn();
};
logGreeting(greet);

//function expresion
var greetMe = function(){
  console.log("Hi Bryan");  
};
greetMe();


// functions expressions are still first class...
logGreeting(greetMe);


/// use a function expression on the fly
logGreeting(function() {
    console.log("Hi Bryan !!!");
})