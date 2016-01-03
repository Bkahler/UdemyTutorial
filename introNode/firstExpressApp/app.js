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

app.get("/r/:subReddit", function(req, res){
    console.log(req);
    res.send("Welcome to the " + req.params.subReddit + " subreddit!");
});

app.get("/r/:subReddit/comments/:id/:title", function(req, res){
    res.send("Welcome to the comments page!");
});

app.get("*", function(req, res){
    res.send("No Yet Implemented, but we are working on it...");
});

// Tells Express to Listen on a specified PORT and IP. Call back prints message to console.
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Has Started...")
});