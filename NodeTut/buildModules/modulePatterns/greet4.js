function Greet4(){
    this.greeting = "Yo Planet";
    this.greet = function(){
        console.log(this.greeting);
    };
};


module.exports = Greet4;