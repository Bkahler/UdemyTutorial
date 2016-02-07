//sets up express 
var express               = require("express"),
    app                   = express(),
    bodyParser            = require("body-parser"),
    mongoose              = require("mongoose"),
    seedDB                = require("./seeds"),
    passport              = require("passport"),
    bodyParser            = require('body-parser'),
    LocalStrategy         = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose"),
    //models//
    User                  = require('./models/user'),
    Campground            = require("./models/campground"),
    Comment               = require("./models/comment");

// app plugins & etc //
mongoose.connect("mongodb://localhost/yelp_camp");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

// passport setup //
app.use(require('express-session')({
    secret:"coltsClass",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser()) ;
passport.deserializeUser(User.deserializeUser());

//// Middleware code ////
var authMiddleware = passport.authenticate('local',{successRedirect:'/campgrounds', failureRedirect:'/login'})
var isLoggedInMiddleware = function (req, res, next){
    if(req.isAuthenticated()){
        return next();
    };
    console.log('User is not logged in...')
   res.redirect('/login');
};

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
});

// seed the db //
seedDB();


/////////ROUTES//////////

///// HOME /////
app.get("/", function(req, res) {
    res.render("landing")
});

//// INDEX ////
app.get("/campgrounds", function(req, res){
    Campground.find({}, function(err,campgrounds){
       if(err){
         console.log(err);  
       }
       else{
         res.render("campgrounds/index", {campgrounds:campgrounds} ) 
       };
    });
});

//// CREATE Campground////
app.post("/campgrounds", isLoggedInMiddleware ,function(req, res){
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

//// NEW Campground /////
app.get("/campgrounds/new", isLoggedInMiddleware ,function(req, res){
    res.render("campgrounds/new") 
});

//// SHOW Campground ////
app.get("/campgrounds/:id", function(req, res) {
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

//// NEW Comment ////
app.get("/campgrounds/:id/comments/new", isLoggedInMiddleware,function(req, res) {
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
app.post("/campgrounds/:id/comments", isLoggedInMiddleware ,function(req, res) {
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
                campground.comments.push(comment);
                campground.save();
                res.redirect("/campgrounds/" + campground._id);
            };
        });
       };
    });
});


/////AUTH Routes///

app.get('/register', function(req, res) {
    res.render('auth/register')
});

app.post('/register', function(req, res) {
    var newUser  = new User({username:req.body.username}),
        password = req.body.password;
        
    User.register(newUser, password, function(err,user){
        if(err){
            console.log('Failed to register user...')
            console.log(err);
            return res.render('auth/register');
        }
        else{
            passport.authenticate('local')(req, res, function(){
                console.log('user registered successfully...')
                res.redirect('/campgrounds');
            })
        };
    })
});


app.get('/login', function(req, res) {
    res.render('auth/login');
})

app.post('/login', authMiddleware, function(req, res) { });

app.get('/logout', function(req, res) {
    req.logout();
    console.log('User has been logged out...')
    res.redirect('/campgrounds');
})

// Tells Express to Listen on a specified PORT and IP. Call back prints message to console.
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Has Started...")
});
