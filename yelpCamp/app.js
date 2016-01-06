//sets up express 
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");


// shared variables
var campgrounds = [
    {name:"Salt Point", image:"http://bit.ly/1Uv0iJt"},
    {name:"Pepper Ridge", image:"http://bit.ly/1Uv0iJt"},
    {name:"Cinnamon Falls", image:"http://bit.ly/1Uv0iJt"},
    {name:"Rosemary Lakes", image:"http://bit.ly/1Uv0iJt"},
    {name:"Sage Fields", image:"http://bit.ly/1Uv0iJt"}
]




//Landing Page
app.get("/", function(req, res) {
    res.render("landing")
});

//Shows all campgrounds
app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds:campgrounds} )
});

// Tells Express to Listen on a specified PORT and IP. Call back prints message to console.
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Has Started...")
});
