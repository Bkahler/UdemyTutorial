// Prototypical Inheritance and function constructors

function Person(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
    this.sayHi = function(){
        console.log("Hi");
    };
};

Person.prototype.greet = function(){
    console.log("Hello " + this.firstname + " " + this.lastname);
};

var bryan = new Person("Bryan","Kahler");
var john = new Person("John","Smith");

console.log(bryan.firstname);
console.log(bryan.lastname);
bryan.sayHi();
bryan.greet();


console.log(john.firstname);
console.log(john.lastname);
john.sayHi();
john.greet();