'use strict';

// var Emitter = require("./emitter"); this is my own simple event emmitter
var Emitter = require("events") // this is the node core emitter 
var eventConfig = require("./config")
var emtr    = new Emitter();

emtr.on(eventConfig.GREET, function(){
    console.log("There was another event !" + Date.now());
});

emtr.on(eventConfig.GREET, function(){
    console.log("There was an event !" +  Date.now());
});



console.log("Greetings");
emtr.emit(eventConfig.GREET);