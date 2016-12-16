"use strict";
let http = require('http'); // http module 
let fs   = require('fs'); // file module require to read in html template



//Built in http server which takes an event listener as a callback.
//Request and response objects are passed to the call back by http.
http.createServer(function(req, resp){
    
    //Grab the html template and load into var
    let html = fs.readFileSync(__dirname + '/index.htm', 'utf8');
    //create some content to then inject into the template
    let message = 'Hello World... :)';
    //replace the specific text with the generated message
    html = html.replace('{Message}', message);
    
    //write head takes the http code and headers as an object 
    resp.writeHead(200, {'Content-Type':'text/html'});
    
    //end is where the data is transmitted back to the client.
    resp.end(html);
    
}).listen(process.env.PORT, process.env.IP);  //listen takea a port and IP (values here are how cloud9 exposes the post and IP)

console.log("Server listening on:" + process.env.IP + ":" + process.env.PORT);
