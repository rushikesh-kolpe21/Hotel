const mongoose = require('mongoose');
// schema object from mongoose
const Schema = mongoose.Schema;

// schema creation
const UserSchema = new Schema({
    name:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
    },
    password:{
        type: String,
        require: true,
    },
    
});
// model creation
const UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel;