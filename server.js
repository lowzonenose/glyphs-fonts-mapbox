/* eslint-disable no-undef */

var express = require('express');
var path = require('path');
var app = express();

app.use(express.static('./test'));

// accueil -> index.html
app.get('/', function(req, res){
    res.sendFile('./index.html', { root: path.join(__dirname, './') });
});

var server = app.listen(9001, function() {
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});
