var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("Welcome To the App...");
});

app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal.toLowerCase();
    var sounds = {
        pig: "oink",
        dog: "woof",
        cow: "moooo"
    };
    var noise = sounds[animal];
    
    res.send("The " + animal + " says " + noise + " !" );
    
});


app.get("/repeat/:phrase/:number", function(req, res) {
    var num = Number(req.params.number);
    var phrase = req.params.phrase;
    var sentence = "";
    
    for(var i =0; i< num; i++){
        sentence += phrase + " ";
    }
    console.log(sentence);
    res.send(sentence);
    
});


app.get("*", function(req, res) {
    res.send("Not Implemented Yet....");
});


// Tells Express to Listen on a specified PORT and IP. Call back prints message to console.
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Has Started...")
});