var express = require('express'),
    router  = express.Router({mergeParams:true});

var Campground = require('../models/campground'),
    Comment    = require('../models/comment');

var isLoggedInMiddleware = require("../middleware/isLoggedIn")


//// NEW Comment ////
router.get("/new", isLoggedInMiddleware,function(req, res) {
    Campground.findById(req.params.id, function(err, campground){
       if(err){
           console.log(err);
       }
       else{
        console.log("Found Campground");
        res.render("comments/new",{campground:campground}) 
       };
    });

});

//// CREATE Comment ////
router.post("/", isLoggedInMiddleware ,function(req, res) {
    Campground.findById(req.params.id, function(err, campground){
       if(err){
           console.log(err);
           res.redirect("/campgrounds");
       }
       else{
        console.log("Found Campground");
        
        Comment.create(req.body.comment, function(err, comment){
            if(err){
                console.log(err);
            }
            else{
                comment.author.id = req.user._id;
                comment.author.username = req.user.username
                comment.save();
                campground.comments.push(comment);
                campground.save();
                console.log("Succesfully added comment:" + comment.author.username)
                res.redirect("/campgrounds/" + campground._id);
            };
        });
       };
    });
});

module.exports = router;