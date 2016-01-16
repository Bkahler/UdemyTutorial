var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment")

var data = [
    {name:"Salt Point", image: "http://bit.ly/1Rsko9A", description: "Greate Place"},
    {name:"Pepper Ridge", image: "http://bit.ly/1npU4jO", description: "Greate Place"},
    {name:"Rosemary Creek", image: "http://bit.ly/1OVGgIk", description: "Greate Place"},
    {name:"Sage Cavern", image: "http://bit.ly/1QdzHBC", description: "Greate Place"},
    {name:"Thyme Lake", image: "http://bit.ly/1UXpCYR", description: "Greate Place"},
    {name:"Seasoning Salt Trail", image: "http://bit.ly/1PxTTJP", description: "Greate Place"}
  ]


function seedDB(){
  Comment.remove({}, function(err,response){
    if(err){
      console.log(err);
    }
    else{
      console.log("Deleted All Comments");
    }
  });
  
  Campground.remove({}, function(err,response){
    if(err){
      console.log(err);
    }
    else{
      console.log("All Campgrounds removed from DB");
      for(var i = 0 ; i < data.length; i++){
        Campground.create(data[i], function(err,campground){
          if(err){
            console.log("Failed to add Campground to DB");
            console.log(err);
          }
          else{
            console.log("Succesfully Added Campground to DB");
            Comment.create(
              {
                text:"Camped here a few times.",
                author:"Bryan"
              }, 
              function(err, comment){
                if(err){
                  console.log(err);
                }
                else{
                  console.log("Succesfully Added Comment to DB");
                  campground.comments.push(comment);
                  campground.save();
                  console.log("added comment to campground");
                }
              });
          };
        });
      };
    }
  });
}

module.exports = seedDB;