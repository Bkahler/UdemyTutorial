var express               = require('express'),
    app                   = express(),
    mongoose              = require('mongoose'),
    passport              = require('passport'),
    User                  = require('./models/user'),
    bodyParser            = require('body-parser'),
    LocalStrategy         = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose");
    
app.use(require("express-session")({
    secret: "this is a text demo app",
    resave: false,
    saveUninitialized: false
}));

mongoose.connect("mongodb://localhost/auth_app");
app.set('view engine', 'ejs');
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({extended:true}));

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


var loginRedirect = { successRedirect: '/secret', failureRedirect: '/login'} ;

////////////////////////////////
//////////Routes///////////////
//////////////////////////////

app.get('/', function(req, res){
    console.log('redering home...')
    res.render('home');
});

app.get('/secret', isLoggedIn,function(req, res) {
    console.log('rendering secret...')
    res.render('secret');
});


//////////////////////////////////////
////////// Auth Routes///////////////
////////////////////////////////////
app.get('/register', function(req, res) {
    console.log('rendering register page ...')
    res.render('register');
});

app.post('/register', function(req, res) {
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render('register');
        };
        
        passport.authenticate('local')(req, res, function(){
            console.log('successfully registered...')
            res.redirect('/secret');
        });
    });
});

app.get('/login', function(req, res) {
    console.log('routeing to login page...')
    res.render('login');
});

app.post('/login', passport.authenticate('local', loginRedirect ), function(req, res) {
    console.log('logged in successfully...')
    res.render('login');
});

app.get('/logout', function(req, res) {
    req.logout();
    console.log('successfully logged out..')
    res.redirect('/');
})



/////////////////////
/////middle ware////
///////////////////
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    };
    res.redirect('/login');
};


// Tells Express to Listen on a specified PORT and IP. Call back prints message to console.
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Has Started...")
});
