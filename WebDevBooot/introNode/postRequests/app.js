var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

var friends = ["Sarah","Mac","James","Todd","David"];
    
app.get("/friends", function(req,res){
    res.render("friends", {friends: friends} );
});

app.post("/addFriend", function(req,res){
   var newFriend = req.body.name;
   friends.push(newFriend);
   res.redirect("/friends");
});



// Tells Express to Listen on a specified PORT and IP. Call back prints message to console.
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Has Started...")
});

