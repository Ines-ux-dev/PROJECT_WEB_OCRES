const bodyParser = require('body-parser');

const express = require('express');

const app = express();

require('./Models/dbConfig');



const eventsRoutes = require('./routes/eventsController');
const usersRoutes = require('./routes/usersController');
const citationsRoutes = require('./routes/citationsController');
const mongoose = require('mongoose');

const cors = require('cors');

//mongoose.set('useFindAndModify', false);

app.use(bodyParser.json());

app.use(cors());

app.use('/events', eventsRoutes);

app.use('/users', usersRoutes);
app.use('/citations', citationsRoutes);

app.listen(5500, () => console.log('server started: 5500'));

module.exports = app;