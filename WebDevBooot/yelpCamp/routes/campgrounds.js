var express = require('express'),
    router  = express.Router();

var Campground = require('../models/campground');  
var isLoggedInMiddleware = require("../middleware/isLoggedIn")

//// Index Campgrounds ////
router.get("/", function(req, res){
    Campground.find({}, function(err,campgrounds){
       if(err){
         console.log(err);  
       }
       else{
         res.render("campgrounds/index", {campgrounds:campgrounds} ) 
       };
    });
});

//// Create Campground ////
router.post("/", isLoggedInMiddleware ,function(req, res){
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

//// New Campground ////
router.get("/new", isLoggedInMiddleware ,function(req, res){
    res.render("campgrounds/new") 
});

//// SHOW Campground ////
router.get("/:id", function(req, res) {
   Campground.findById(req.params.id).populate("comments").exec(function(err, campground) {
       if(err){
         console.log(err)
       }
       else{
         console.log("found Campground: " + campground.name);
         res.render("campgrounds/show", {campground: campground})
       }
   }); 
});

module.exports = router;

