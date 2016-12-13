function greet(callback){
    console.log("This is the greeting");
    var data = {
        name: "Bryan"
    }
    callback(data);
}

greet(function(data){
   console.log(`this call back was invoked by ${data.name}`) ;
});