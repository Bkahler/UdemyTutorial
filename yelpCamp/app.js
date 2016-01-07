//sets up express 
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

//schema setup
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String
});

var Campground = mongoose.model("Campground", campgroundSchema); 

//Landing Page
app.get("/", function(req, res) {
    res.render("landing")
});

//Shows all campgrounds
app.get("/campgrounds", function(req, res){
    Campground.find({}, function(err,campgrounds){
       if(err){
         console.log(err);  
       }
       else{
         res.render("campgrounds", {campgrounds:campgrounds} ) 
       };
    });
});



//add a new campground
app.post("/campgrounds", function(req, res){
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name: name, image:image};
  Campground.create(newCampground, function(err, campground) {
    if(err){
      console.log(err);
    }
    else{
      console.log("New campground added to db")
      res.redirect("/campgrounds");  
    };
  });
});

// takes you to new campground form
app.get("/campgrounds/new", function(req, res){
    res.render("new") 
});

//shows one campground
app.get("/campgrounds/:id", function(req, res) {
   Campground.find({},function(err, campground) {
       if(err){
         console.log(err)
       }
       else{
         res.render("campground", {campground: campground})
       }
   }) 
});

// Tells Express to Listen on a specified PORT and IP. Call back prints message to console.
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Has Started...")
});
