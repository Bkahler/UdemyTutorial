'use strict';

class Person{
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;  
  } 
  
  greet(){
    console.log("Hello " + this.firstname + " " + this.lastname);
  }
  
  sayHi(){
      console.log("Hi Everyone!");
  }
}

var bryan = new Person("Bryan","Kahler");
var john = new Person("John","Smith");

bryan.sayHi();
bryan.greet();

john.sayHi();
john.greet();