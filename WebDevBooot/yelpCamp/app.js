//sets up express 
var express               = require("express"),
    app                   = express(),
    bodyParser            = require("body-parser"),
    mongoose              = require("mongoose"),
    seedDB                = require("./seeds"),
    passport              = require("passport"),
    bodyParser            = require('body-parser'),
    LocalStrategy         = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose");

var User                  = require('./models/user'),
    Campground            = require("./models/campground"),
    Comment               = require("./models/comment");

var campgroundRoutes      = require('./routes/campgrounds'),
    commentRoutes         = require('./routes/comments'),
    indexRoutes           = require('./routes/index');
    
    
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


app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
});

app.use("/campgrounds/:id/comments", commentRoutes);
app.use(indexRoutes);
app.use("/campgrounds", campgroundRoutes);




// seed the db //
// seedDB();




// Tells Express to Listen on a specified PORT and IP. Call back prints message to console.
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Has Started...")
});
