var express = require("express");
var app = express();
 
//a seperate folder containing the html file was created and named as website. the html was saved as index.html
app.use(express.static('website'));

var server = app.listen(8081, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});