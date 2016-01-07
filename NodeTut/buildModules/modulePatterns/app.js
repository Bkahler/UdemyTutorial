var greet1 = require('./greet1');
greet1();

var greet2 = require('./greet2').greet2;
greet2();

var greet3 = require('./greet3');
greet3.greet();

var Greet4 = require('./greet4');
var grtr4 = new Greet4();
grtr4.greet();


//Revealing module pattern...(only exposes methods and propterties you select, via a returned object)
var greet5 = require('./greet5');
greet5.greet();