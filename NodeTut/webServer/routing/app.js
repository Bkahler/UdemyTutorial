"use strict";
let http = require("http");
let fs   = require("fs");

http.createServer(function(req, resp){
    
    
    if (req.url === '/api'){
        console.log("Rendering JSON");
        var jsonResp = {
            firstName:"Bryan",
            lastName:"Kahler"
        };
    
        resp.writeHead(200, {'Content-Type':'application/json'});
        resp.end(JSON.stringify(jsonResp)); 
    }
    else if  (req.url === "/"){
        console.log("Rendering HTML");
        resp.writeHead(200, {'Content-Type':'text/html'});
        fs.createReadStream(__dirname + '/index.htm').pipe(resp);
    }
    else {
        console.log('Rendering Not Found');
        resp.writeHead(404, {'Content-Type':'text/html'});
        fs.createReadStream(__dirname + '/notFound.htm').pipe(resp);
    }

    
}).listen(process.env.PORT, process.env.IP);



console.log("Server listening on:" + process.env.IP + ":" + process.env.PORT);