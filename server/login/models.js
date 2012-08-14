var crypto = require('crypto'),
    User;

function defineModels(mongoose, callback){
    var Schema = mongoose.Schema,
        ObjectId = Schema.ObjectId;

    /* User model */

    User = new Schema({
        'email': {type : String, index: {unique: true} },
        'hashed_password' : String,
        'salt': String,
        'company': {type: String, default : 'company name'},
        'perimeter': {type: String, default: 'perimeter'}
    });

    User.method('encryptPassword', function(password){
        return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
    });

    User.method('makeSalt', function(){
        return Math.round((new Date().valueOf() * Math.random())) + '';
    });

    User.method('authentificate', function(password){
        return this.hashed_password === this.encryptPassword(password);
    });

    mongoose.model('User', User);
    callback();
}

exports.defineModels = defineModels;