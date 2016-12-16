'use strict';

var Greetr = require('./greetr');
var greet1 = new Greetr;

greet1.on('greet', function(data){
  console.log("There was a greeting!" + data);  
});

greet1.greet(" Bryan");

