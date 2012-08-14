/*jshint node:true*/
"use strict";
var mongoose = require('mongoose'),
    models = require('./models'),
    User,
    conn;

models.defineModels(mongoose, function(){
    User = mongoose.model('User');
    conn = mongoose.connect('mongodb://localhost:27017/focusmatic');
});

exports.loginManual = function(email, password,callback){
    User.findOne({ email: email}, function(err,user){
            if(user.authentificate(password)){
            callback(err, user);
        } else {
            console.log('authentication failed !');
            callback(err, null);
        }
    });
};

exports.getUser = function(user_id, callback){
    User.findOne({_id: user_id}, {_id:1, email:1, company:1, perimeter:1}, function(err, user){
            callback(err, user);
    });
};

exports.getUserByEmail = function(email, callback){
    User.findOne({email: email}, {_id:1,email:1, company:1, perimeter:1}, function(err, user){
            callback(err, user);
    });
};

exports.allUsers = function(callback){
    User.find({}, function(err, users){
            callback(err, users);
    });
};

exports.addUser = function(usr, callback){
    var user = new User();
    user.email = usr.email;
    user.salt = user.makeSalt();
    user.company = usr.company;
    user.perimeter = usr.perimeter;
    user.hashed_password = user.encryptPassword(usr.password);
    user.save(function(err, usr){
        callback(err, usr);
    });
};