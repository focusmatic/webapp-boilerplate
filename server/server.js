/*jshint node:true*/
'use strict';
(function(){

// Modules dependencies
var express = require('express');
var app = express.createServer();
var path = require('path');

// Configuration
var port = 8888;
app.configure(function(){
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(__dirname +'/..'));
});
app.configure('development', function(){

    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});
app.configure('production', function(){
    app.use(express.errorHandler());
});

// Routes
app.get('/', function(req, res){

    res.sendfile(path.normalize(__dirname+'/../client/index.html'));
});

app.listen(port, function() {
    console.log("Listening on " + port);
});
console.log("Express server listening on port %d in %s mode", port, app.settings.env);

// some test using shared modules
var add = require('../shared/sharedModule');
console.log('add function : '+add(1,1));

})();