var bodyParser       = require("body-parser"),
    jsonparser       = bodyParser.json(),
    Person           = require("./../dbs/mongo"),
    urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app){
    /// Routes ///
    app.get('/', function(req, res){
        res.render('index');
    });
    
    app.post('/person', urlencodedParser, function(req, res){
        console.log(req.body.firstName);
        console.log(req.body.lastName);
        
        var bryan = Person({
            firstname: req.body.firstName,
            lastname: req.body.lastName,
            address: req.body.address
        });
        
        bryan.save(function(err){
            if (err){
              console.log(err);
              res.send('Person Failed to save');
            }
            else{
              res.send('Person Saved');
            }
        });
    });
    
    app.post('/personJson', jsonparser, function(req, res){
        console.log(req.body.firstName);
        console.log(req.body.lastName);
    });
    
    app.get('/person/:id', function(req, res){

    });
};

