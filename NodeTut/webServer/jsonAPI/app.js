"use strict";

var http = require("http");
    
http.createServer(function(req, resp){
    let jsonResp = {
            firstName: "Bryan",
            lastName: "Kahler"
        };
        
    resp.writeHead(200,{"Content-Type":"application/json"});
    resp.end(JSON.stringify(jsonResp));
    
}).listen(process.env.PORT, process.env.IP);

console.log("Server listening on:" + process.env.IP + ":" + process.env.PORT);
