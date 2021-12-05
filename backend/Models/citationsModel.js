const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.Promise = global.Promise;
const CitationsModel = new Schema(
    {
        auteur: {
            type: String,
            require: true
        },
        citation: {
            type: String,
            require: true
        },
        année: {
            type: Number,
            require: true
        }
    },


);
module.exports = mongoose.models.Citations || mongoose.model('Citations', CitationsModel);