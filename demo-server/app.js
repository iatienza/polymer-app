/**
 * Created by ibai on 1/03/16.
 */

var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/../app/index.html'));
});

app.use(express.static(path.join(__dirname, '../')));

//var http = require('http').Server(app);
//http.listen(8080);
var http = require('http');
http.createServer(app).listen(8080);


