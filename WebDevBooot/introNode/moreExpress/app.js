var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");



app.get("/", function(req,res){
    res.render("home");
});

app.get("/ilove/:thing", function(req, res) {
    var thing = req.params.thing;
    res.render("love",{thing: thing});
});

app.get("/posts", function(req, res) {
    var posts = [
        {title: "Post1", author: "Bryan"},    
        {title: "Post2", author: "Bryan"},    
        {title: "Post3", author: "Bryan"}    
    ];
    res.render("posts", {posts: posts});
})

// Tells Express to Listen on a specified PORT and IP. Call back prints message to console.
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Has Started...")
});