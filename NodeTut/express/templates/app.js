'use strict';

var express          = require('express'),
    app              = express(),
    bodyParser       = require('body-parser'),
    urlencodedParser = bodyParser.urlencoded({ extended: false }),
    jsonparser       = bodyParser.json();
    
app.use('/assets', express.static(__dirname + '/public') );
app.set('view engine', 'ejs');

//middleware that runs before any route. 
app.use('/', function(req, res, next){
    console.log(`Request URL: ${req.url}`);
    next();
});


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

app.listen(process.env.PORT, process.env.IP, function(){
    console.log(`listening on: ${process.env.PORT}:${process.env.IP}`);
})