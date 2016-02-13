var isLoggedIn = function (req, res, next){
    if(req.isAuthenticated()){
        return next();
    };
    console.log('Unauthorized. User is not logged in...')
   res.redirect('/login');
};


module.exports = isLoggedIn;