var express = require('express');
const _ = require('lodash');
var router = express.Router();

/* GET events listing. */
EventsModel.find((err, docs) => {
  if (!err) res.send(docs);
  else console.log("Error to get data : " + err);

  console.log(docs);
})

router.put('/', (req, res) => {
  // Get the data from request from request
  const { date_debut } = req.body;
  // Create new unique id
  const id = _.uniqueId();
  // Insert it in array (normaly with connect the data with the database)
  users.push({ date_debut, id });
  // Return message
  res.json({

  });
});

router.put('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.delete('/', function (req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
