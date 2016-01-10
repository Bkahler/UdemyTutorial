//App Config 
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blog_app");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

//Mongoose Config
var blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created:{type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);

//Routes

app.get("/", function(req, res) {
  res.redirect("/blogs")    
});

app.get("/blogs", function(req, res){
  Blog.find({}, function(err,blogs){
    if(err){
      console.log(err);  
    }
    else{
      res.render('index',{blogs:blogs});
    };
  });
});

app.get("blogs/new", function(req, res) {
    
});

app.listen(process.env.PORT, process.env.IP, function(){
console.log("Blog App server started...");
});