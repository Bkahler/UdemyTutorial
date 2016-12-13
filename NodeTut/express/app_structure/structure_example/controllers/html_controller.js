var bodyParser       = require("body-parser"),
    jsonparser = bodyParser.json(),
    urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app){
    /// Routes ///
    app.get('/', function(req, res){
        res.render('index');
    });
    
    app.post('/person', urlencodedParser, function(req, res){
        res.send("Thanks");
        console.log(req.body.firstName);
        console.log(req.body.lastName);
    });
    
    app.post('/personJson', jsonparser, function(req, res){
        res.send('Thanks for your json');
        console.log(req.body.firstName);
        console.log(req.body.lastName);
    });
    
    app.get('/person/:id', function(req, res){
        res.render('person', { ID: req.params.id, Qstr: req.query.qstr});
    });
};