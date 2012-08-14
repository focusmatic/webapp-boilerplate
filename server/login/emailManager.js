var settings = require('./email-settings'),
    server = require('emailjs/email').server.connect({
        host: settings.host,
        user: settings.user,
        password: settings.password,
        ssl: true
    });

exports.send = function(credentials, callback) {
    console.log(credentials);
    server.send({
        from: settings.sender,
        to: credentials.email,
        subject: 'Password Reset',
        text: 'i hope this work'
        // attachment: drawContent(credentials)
    }, function(err, msg){
        callback(err, msg);
    });
};

function drawContent(credentials){
    var link = 'http://www.focusmatic.com';
    var content ="<html><body>";
        content += "Your username is :: <b>"+credentials.email+"</b><br><br>";
        content += "<a href='"+link+"'>Please click here to reset your password</a>";
        content += "</body></html>";
    return [{data: content, alternative: true}];
}