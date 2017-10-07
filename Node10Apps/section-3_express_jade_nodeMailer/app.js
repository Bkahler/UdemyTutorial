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

app.get('/', function(res, resp){
  resp.render('index', {title: 'Welcome'});
});

app.get('/about', function(res, resp){
  resp.render('about');
});

app.get('/contact', function(res, resp){
  resp.render('contact');
});

app.post('/contact/send', function(res, resp){
  var transporter = nodeMailer.createTransport({
    service: 'Gmail',
    auth:{
      user: '------------------',
      pass: '------------------'
    }
  });

  var mailOptions = {
    from: 'Bryan Kahler <bkahler3@gmail.com>',
    to: 'Bryan <bryan.kahler@autodesk.com>',
    subject: 'Website Submission',
    text: 'You have a Submission with the following details... Name: ' +res.body.name+ 'Email: ' +res.body.email+ 'Message: ' +res.body.message,
    html: '<p>You have a Submission with the following details...</p><ul><li>Name: '+res.body.name+'</li><li>Email: '+res.body.email+'</li><li>Message: '+res.body.message+'</li></ul>'
  }

  transporter.sendMail(mailOptions, function(error, info){
    if (error){
      console.log(error);
      res.redirect('/');
    } else{
      console.log('Mail Sent Successfully: '+ info.response);
      resp.render('index', {title: 'Welcome'});
    };
  });

});

app.listen(3000);
console.log('server is listening on port 3000...');