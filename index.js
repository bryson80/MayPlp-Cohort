var express = require('express');
var path = require('path')

var app = express();

app.get('/hello', function(req, res){
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(3050, function(){
    console.log('Another server running on port 3050');
});