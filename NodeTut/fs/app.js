var fs = require('fs');

var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet);

fs.readFile(__dirname + '/greet.txt', 'utf8', 
                function(err, data){
                    if(err){
                       console.log(err) ;
                    } else{
                      logAsync(data);
                    }
             });
             
var logAsync = function(data){
                console.log(data);
                console.log("Done");
};