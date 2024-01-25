const mongoose = require('mongoose');
const { Schema } = mongoose;
const UserSchema = new Schema({
    name:String,
    Team:String,
    Age:String,
});
const User = mongoose.model('User', UserSchema, 'user');
module.exports = {
    User: User,
};