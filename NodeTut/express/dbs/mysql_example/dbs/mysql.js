var  mysql            = require("mysql"),
     connection       = mysql.createConnection({
                        host: "localhost",
                        user: "bkahler",
                        database: "node_tests"
                    });
                        
connection.connect(function(err){
    if(!err) {
        console.log("Database is connected ... \n\n");  
    } else {
        console.log("Error connecting database ... \n\n");  
    }
}); 
    
module.exports = connection
    
    