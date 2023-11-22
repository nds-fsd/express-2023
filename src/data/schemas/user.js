const { Schema, model }  = require('mongoose');

const userSchema = new Schema({
    name:  {type: String, required: true}, 
    email: {type: String},
    password:   String // String is shorthand for {type: String}
});

const User = model('user', userSchema);

module.exports = User;