const mongoose = require("mongoose");

const EventsModel = mongoose.model(
    "Dashboardbdd",
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
    "events"
);



module.exports = { EventsModel };

