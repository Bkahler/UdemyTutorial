//App Config 
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var methodOverride = require("method-override");
var expressSanitizer = require("express-sanitizer")

mongoose.connect("mongodb://localhost/blog_app");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(expressSanitizer());
app.set("view engine", "ejs");
app.use(methodOverride("_method"));

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

app.get("/blogs/new", function(req, res) {
  res.render("new")
});

app.post('/blogs' , function(req, res){
  req.body.blog.body = expressSanitizer(req.body.blog.body)
  Blog.create(req.body.blog, function(err,blog){
    if (err){
      console.log("Failed to save new blog entry...");
      console.log(err);
      res.render("new");
    }
    else{
      console.log("New blog saved successfully")
      res.redirect("/blogs");
    };
  });
});

app.get("/blogs/:id", function(req, res) {
   Blog.findById(req.params.id, function(err, blog) {
       if(err){
         console.log(err)
       }
       else{
         console.log("found blog entry: " + blog.title);
         res.render("show", {blog: blog})
       }
   }); 
});

app.get("/blogs/:id/edit",function(req, res) {
  Blog.findById(req.params.id, function(err, blog) {
       if(err){
         console.log(err)
       }
       else{
         console.log("found blog entry: " + blog.title);
         res.render("edit", {blog: blog})
       }
   }); 
})

app.put("/blogs/:id", function(req, res){
    req.body.blog.body = expressSanitizer(req.body.blog.body)
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, blog){
      if(err){
        console.log("Failed to update Blog entry:");
        console.log(err);
      }
      else{
        console.log("Successfully Updated Blog");
        res.redirect("/blogs/" + blog._id);
      };
    });
});

app.delete("/blogs/:id", function(req, res){
  Blog.findByIdAndRemove(req.params.id, function(err, blog){
    if(err){
      console.log("Failed to delete blog entry:")
      console.log(err);
      res.redirect("/blogs")
    }
    else{
      console.log("Successfully deleted blog entry")
      res.redirect("/blogs")
    };
  });
});



app.listen(process.env.PORT, process.env.IP, function(){
console.log("Blog App server started...");
});