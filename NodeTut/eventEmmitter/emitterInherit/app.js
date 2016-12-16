'use strict';
var eventEmitter = require('events');
var util         = require('util');


function Greetr(){
    eventEmitter.call(this);
    this.greeting = 'Hello World';
}

util.inherits(Greetr,eventEmitter);

Greetr.prototype.greet = function(data){
    console.log(this.greeting + data);
    this.emit('greet', data);
};

var greet1 = new Greetr;

greet1.on('greet', function(data){
  console.log("There was a greeting!" + data);  
});

greet1.greet(" Bryan");

