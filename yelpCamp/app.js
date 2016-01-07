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
    {name:"Pepper Ridge", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSPRncMF_1mX0P6gPhNgwEz1ZvWQg5DxIClHcHT028n9feGEvbxQ"},
    {name:"Rosemary Lakes", image:"http://bit.ly/1Uv0iJt"},
    {name:"Sage Fields", image:"http://bit.ly/1Uv0iJt"},
    {name:"Salt Point", image:"http://bit.ly/1Uv0iJt"},
    {name:"Pepper Ridge", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSPRncMF_1mX0P6gPhNgwEz1ZvWQg5DxIClHcHT028n9feGEvbxQ"},
    {name:"Rosemary Lakes", image:"http://bit.ly/1Uv0iJt"},
    {name:"Salt Point", image:"http://bit.ly/1Uv0iJt"},
    {name:"Pepper Ridge", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSPRncMF_1mX0P6gPhNgwEz1ZvWQg5DxIClHcHT028n9feGEvbxQ"},
    {name:"Rosemary Lakes", image:"http://bit.ly/1Uv0iJt"}
]




//Landing Page
app.get("/", function(req, res) {
    res.render("landing")
});

//Shows all campgrounds
app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds:campgrounds} )
});

//add a new campground
app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image:image};
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");

});

// takes you to new campground form
app.get("/campgrounds/new", function(req, res){
    res.render("new") 
});

// Tells Express to Listen on a specified PORT and IP. Call back prints message to console.
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Has Started...")
});
