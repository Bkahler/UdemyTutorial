'use strict';
var express          = require("express"),
    app              = express(),
    bodyParser       = require("body-parser"),
    urlencodedParser = bodyParser.urlencoded({ extended: false }),
    jsonparser       = bodyParser.json();

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
    
/// Routes ///
app.get('/api/person/:id', function(req, res){
    ///get specific person from the database
    res.json({firstName: "Bryan", lastName: "Kahler"});
    
});

app.post('/api/person', jsonparser, function(req, res){
    // saves or creates an object in the database
});

app.delete('/api/person/:id', function(req, res){
   // delete a specific person from the database 
});
    
