function Greet3(){
    this.greeting = "Hey Earth";
    this.greet = function(){
        console.log(this.greeting);
    };
};


module.exports = new Greet3();