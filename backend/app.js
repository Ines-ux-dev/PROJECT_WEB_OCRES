const bodyParser = require('body-parser');
const express = require('express');
const app = express();
require('./models/dbConfig');

const eventsRoutes = require('./routes/eventsContrtoller');
const citationsRoutes = require('./routes/citationsControllers')

const mongoose = require('mongoose');
const cors = require('cors');


//mongoose.set('useFindAndModify', false);

app.use(bodyParser.json());
app.use(cors());
app.use('/events', eventsRoutes);
app.use('/citations', citationsRoutes);


app.listen(5500, () => console.log('server started: 5500'));
module.exports = app;