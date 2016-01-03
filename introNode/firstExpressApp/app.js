var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi Bryan");
});

app.get("/bye", function(req, res){
    res.send("Bye Bry");
});


app.get("/cat", function(req, res){
    res.send("Meow");
});

// Tells Express to Listen on a specified PORT and IP. Call back prints message to console.
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Has Started...")
});