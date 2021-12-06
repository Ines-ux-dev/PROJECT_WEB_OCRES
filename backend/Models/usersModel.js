const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.Promise = global.Promise;
const UsersModel = new Schema(


    {
        firstname: {
            type: String,
            require: true
        },
        lastname: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        }
    },

);

module.exports = mongoose.models.Users || mongoose.model('Users', UsersModel);