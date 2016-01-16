//sets up express 
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var seedDB = require("./seeds");

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

//models
var Campground = require("./models/campground")

//seed the db
seedDB();

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
         res.render("index", {campgrounds:campgrounds} ) 
       };
    });
});



//add a new campground
app.post("/campgrounds", function(req, res){
  var name = req.body.name;
  var image = req.body.image;
  var description = req.body.description;
  var newCampground = {name: name, image:image, description:description};
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
   Campground.findById(req.params.id).populate("comments").exec(function(err, campground) {
       if(err){
         console.log(err)
       }
       else{
         console.log("found Campground: " + campground.name);
         res.render("show", {campground: campground})
       }
   }); 
});

// Tells Express to Listen on a specified PORT and IP. Call back prints message to console.
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Has Started...")
});
