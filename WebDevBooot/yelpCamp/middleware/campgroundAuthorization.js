var Campground = require('../models/campground');

var campgroundAuthorization = function(req, res, next){
    if(req.isAuthenticated()){
        Campground.findById(req.params.id, function(err,foundCampground){
            if(err){
              console.log("error finding campground...");    
              console.log(err);    
              res.redirect("back");
            }
            else{
              if(foundCampground.author.id.equals(req.user._id)){
                next(); 
              }
              else{
                console.log("Unauthorized action on campground.");  
                res.redirect("back");
              }
            }
        });
    }
    else{
        console.log("Unauthorized action on campground.");
        res.redirect("back");
    }
};

module.exports = campgroundAuthorization;