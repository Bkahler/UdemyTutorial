var Comment = require('../models/comment');

var commentAuthorization = function(req, res, next){
    if(req.isAuthenticated()){
        Comment.findById(req.params.comment_id, function(err, foundComment){
            if(err){
              console.log("error finding comment...");    
              console.log(err);    
              res.redirect("back");
            }
            else{
              if(foundComment.author.id.equals(req.user._id)){
                next(); 
              }
              else{
                console.log("Unauthorized action on comment.");  
                res.redirect("back");
              }
            }
        });
    }
    else{
        console.log("Unauthorized action on comment.");
        res.redirect("back");
    }
};

module.exports = commentAuthorization;