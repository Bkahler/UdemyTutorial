'use strict';
var express = require('express'),
    app     = express();
    
app.use(express.static(__dirname + '/public'));
    
app.get('/',function(req, res){
    console.log('rending get'+ req.url);
    
    res.send(`<html>
                <head>
                    <link href=assets/style.css type=text/css rel=stylesheet />
                </head>
                    <body>
                        <h1>Hello World...</h1>
                    </body>
            </html>`);
}); 

app.get('/person/:id', function(req, res) {
    console.log('rending get'+ req.url);
    res.send(`<html>
                <head>
                    <link href=assets/style.css type=text/css rel=stylesheet />
                </head>
                <body>
                    <h1>Person ID: ${req.params.id}</h1>
                </body>
             </html>`
            );
});

app.get('/.json', function(req,res){
    console.log('rending get'+ req.url);
    let json = {title:"Hello World"};
    res.json(json);
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Listening on:" + process.env.PORT + ":" + process.env.IP);
});