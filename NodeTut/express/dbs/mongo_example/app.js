'use strict';

var express          = require("express"),
    app              = express(),
    apiController    = require("./controllers/api_controller"),
    htmlController   = require("./controllers/html_controller");
                       

                       
        /// App Configuration ///    
    app.use('/assets', express.static(`${__dirname}/public`));
    app.set('view engine', 'ejs');
    app.use('/', function(req, res, next){
        console.log(`Request URL: ${req.url}`);
        next();
    });
        
    app.listen(process.env.PORT, process.env.IP, function(){
        console.log(`listening on: ${process.env.PORT}:${process.env.IP}`);
    });
    
    // exposing the api and html routes via controllers //
    apiController(app);
    htmlController(app);