var bodyParser       = require("body-parser"),
    jsonparser      = bodyParser.json(),
    urlencodedParser = bodyParser.urlencoded({ extended: false });
        
module.exports = function(app){
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
};