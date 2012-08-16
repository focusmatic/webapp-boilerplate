// Copyright © Focusmatic SAS
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

/*jshint node:true*/
'use strict';
(function(){
// Modules dependencies
var express     = require('express'),
    connect     = require('connect'),
    https       = require('https'),
    // app         = express.createServer(),
    path        = require('path'),
    mongo       = require('mongodb'),
    mongoose    = require('mongoose'),
    MongoStore  = require('connect-mongodb'),
    jade        = require('jade'),
    fs          = require('fs'),
    options     = {
        key: fs.readFileSync(__dirname+'/key.pem'),
        cert: fs.readFileSync(__dirname+'/cert.pem'),
        ca: fs.readFileSync(__dirname+'/cert.csr')
    };
    // models = require('./models');

// Configuration
var port          = 443,
    User,
    app,
    serverapp,
    // LoginToken,
    Server        = mongo.Server,
    Db            = mongo.Db,
    server_config = new Server('localhost', 27017, {auto_reconnect: true, native_parser: true}),
    db            = new Db('focusmatic', server_config, {});
    
app = express();
serverapp = https.createServer(options, app);
app.configure('development', function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
    app.use(express.errorHandler());
});

app.configure(function(){
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.logger({ format: '\x1b[1m:method\x1b[0m \x1b[33m:url\x1b[0m \x1b[34m:status\x1b[0m :response-time ms' }));

    app.use(express.cookieParser('focusmatic'));
    app.use(express.session({
        cookie : {maxAge: 60000 * 60}, // 1 minute
        store: new MongoStore({db : db})
    }));


    app.use(app.router);
    app.use('/shared', express.static(__dirname + '/../shared'));
    app.use(express.static(__dirname +'/../client'));
});

// load login module

var LM = require('./login');


// Routes

app.get('/login', LM.routes.loginGET );
app.post('/login', LM.routes.loginPOST);
app.get('/', LM.routes.loadUser);

app.get('/users',LM.routes.loadUser , LM.routes.list);
app.get('/user', LM.routes.loadUser, LM.routes.user);
app.get('/user/:id', LM.routes.loadUser, LM.routes.user);
app.get('/users/add', LM.routes.signin);
app.post('/users/add', LM.routes.add);
app.get('/logout', LM.routes.loadUser, LM.routes.logout);


app.get('/test', function(req, res){
    res.sendfile(path.normalize(__dirname+'/../client/index_test.html'));
});

/////////////////////////////////////////////////////////

serverapp.listen(port, function() {
    console.log("Listening on " + port);
});
console.log("Express server listening on port %d in %s mode", port, app.settings.env);
})();