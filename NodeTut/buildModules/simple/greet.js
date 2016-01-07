var greeter = {
  greet: function(name){ console.log("Hi " + name); },
  sayHi: function(){console.log("Hi")}
}


/// exposes object in module
module.exports = greeter;
