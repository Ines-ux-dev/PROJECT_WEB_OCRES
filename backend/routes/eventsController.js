const express = require('express');

const router = express.Router();

const ObjectID = require('mongoose').Types.ObjectId;

const { EventsModel } = require('../models/eventsModel');

//obtenir et afficher les évènements

router.get('/', (req, res, next) => {

  EventsModel.find()
    .then(things => res.status(200).json(things))
    .catch(error => res.status(400).json({ error }));

})

//obtenir et afficher un évènement

router.get('/:id', (req, res, next) => {
  EventsModel.findOne({ _id: req.params.id })
    .then(things => res.status(200).json(things))
    .catch(error => res.status(400).json({ error }));
})

//ajouter un évènement

router.post('/', (req, res, next) => {

  //delete req.body._id;
  const event = new EventsModel({
    ...req.body
  });

  event.save()

    .then(() => res.status(201).json({ message: 'Evènement enregistré !' }))

    .catch(error => res.status(400).json({ error }));

});



//modifier un évènement

router.put("/:id", (req, res, next) => {

  EventsModel.updateOne({ _id: req.params.id }, {

    ...req.body, _id: req.params.useUnifiedTopology

  })

    .then(() => res.status(200).json({ message: 'Evènement modifié !' }))

    .catch(error => res.status(400).json({ error }));

});

//supprimer un évènement

router.delete("/:id", (req, res, next) => {

  EventsModel.deleteOne({ _id: req.params.id })

    .then(() => res.status(200).json({ message: 'Evènement supprimé !' }))

    .catch(error => res.status(400).json({ error }));

});




module.exports = router;