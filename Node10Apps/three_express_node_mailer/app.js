var express = require('express');
var path    = require('path');
var bodyParser = require('body-parser');
var nodeMailer = require('nodemailer');

var app = express();

//set the path to the view templates and set which view engine to use.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//sets the public folder as the location for the assets 
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, resp){
  resp.render('index', {title: 'Welcome'});
});

app.get('/about', function(req, resp){
  resp.render('about');
});

app.listen(3000);
console.log('server is listening on port 3000...');