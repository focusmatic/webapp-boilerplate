/*jshint node:true*/
"use strict";

var loginManager = require('./loginManager'),
    emailManager = require('./emailManager'),
    path = require('path');

exports.loginGET = function(req, res, next){
    if(req.session.user_id){
        console.log('session detected: '+req.session.email);

        res.redirect('/');
    } else {
        res.sendfile(path.normalize(__dirname+'/../../client/login.html'));
    }
};

exports.loginPOST = function(req, res, next){
    if(req.body.email) {
        loginManager.loginManual(req.body.email, req.body.password, function(err, user){
            if(user!==null){
                req.session.user_id = user._id;
                res.send(200);
            } else {
                res.send(401);
            }
        });
    } else if (req.body.emailForgotPassword){
        console.log('forgot password');
        loginManager.getUserByEmail(req.body.emailForgotPassword, function(err, user){
            emailManager.send(user, function(err, msg){
                res.send(err);
            });
        });
    } else {
        res.redirect('/login');
    }
};

exports.list = function(req, res, next){
    loginManager.allUsers(function(err, users){
        if(err===null){
            res.json(users);
        } else {
            console.log(err);
            res.redirect('/');
        }
    });
};

exports.add = function(req, res, next){
    console.log(req.body);
    if(req.body.email){
        loginManager.addUser(req.body, function(err, user){
            if(err===null){
                res.json(user);
            }else{
                console.log(err);
                res.redirect('/');
            }
        });
    } else {
        console.log('req.body.email undefined');
    }
};

exports.loadUser = function(req, res, next){
    console.log('Session user_id:'+req.session.user_id);
    if (req.session.user_id){
        loginManager.getUser(req.session.user_id ,function(err,user){
            if(user!==null){
                next();
            } else {
                res.redirect('/login');
            }
        });
    } else {
        res.redirect('/login');
    }
};

exports.logout = function(req, res, next){
    if(req.session){
        req.session.destroy(function(){});
        res.redirect('/');
    } else {
        res.redirect('/');
    }
};

exports.user = function(req, res, next){
    loginManager.getUser(req.session.user_id, function(err, user){
        if(err===null){
            res.json(user);
        } else {
            console.log(err);
            res.redirect('/');
        }
    });
};

exports.signin = function(req, res, next){
    res.sendfile(path.normalize(__dirname+'/../../client/modules/login/signin.html'));
};