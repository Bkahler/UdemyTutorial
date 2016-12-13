"use strict";
let http = require('http'); // http module 
let fs   = require('fs'); // file module require to read in html template



//Built in http server which takes an event listener as a callback.
//Request and response objects are passed to the call back by http.
http.createServer(function(req, resp){

    //write head takes the http code and headers as an object 
    resp.writeHead(200, {'Content-Type':'text/html'});
    
    //Grab the html as a stream and pipe to the resp (which is a writeable stream)
    fs.createReadStream(__dirname + '/index.htm').pipe(resp);
    
}).listen(process.env.PORT, process.env.IP);  //listen takea a port and IP (values here are how cloud9 exposes the post and IP)

console.log("Server listening on:" + process.env.IP + ":" + process.env.PORT);


// Lesson here is that steams are built into NODE and the web at large. The browser is already set up
// to deal with streams and node lets you take advantage of that fact. In general using a steam lets the
// program utilize less memory and it serves the content to the html as its available. In general it is 
// best to utilize streams whenever you can, and if you are not, it should be on purpose or for a specific
// reason.