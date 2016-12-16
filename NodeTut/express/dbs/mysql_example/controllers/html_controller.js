var bodyParser       = require("body-parser"),
    jsonparser       = bodyParser.json(),
    connection       = require("./../dbs/mysql"),
    urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app){
    /// Routes ///
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
        connection.query(
            `SELECT * FROM Persons WHERE PersonID=${req.params.id}`,
            function(err, rows){
               if(err){ 
                    throw err;
               }
               else{
                   console.log("---------------------------------------------");
                   console.log(rows);
                   console.log("---------------------------------------------");
                   if (rows.length > 0){ 
                       res.render(
                           'person', 
                           { 
                             id: req.params.id,   
                             firstName: rows[0].FirstName, 
                             lastName: rows[0].LastName
                           }
                       );
                   }
                   else{
                       res.render(
                           'person', 
                           { 
                             id: "not found",   
                             firstName: "not found", 
                             lastName: "not found"
                           }
                       );
                   }
               }
            }
        );
        
    });
};

