const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const EventsModel = new Schema(

    {
        date_debut: {

            type: String,

            require: true

        },

        date_fin: {

            type: String,

            require: true

        },

        heure_debut: {

            type: String,

            require: true

        },

        heure_fin: {

            type: String,

            require: true

        },

        titre_event: {

            type: String,

            require: true

        },

        nbr_places: {

            type: Number,

            require: true

        }

    },

);

module.exports = mongoose.models.Event || mongoose.model('Event', EventsModel);