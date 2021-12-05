const express = require('express');
const router = express.Router();
const ObjectID = require('mongoose').Types.ObjectId;

//const { citationSchema } = require('../Models/citation');

//obternir et afficher toutes les citations
/*router.get('/', (req, res, next) => {
    CitationsModel.find()
        .then(things => res.status(200).json(things))
        .catch(error => res.status(400).json({ error }));
})*/

/*//obtenir et afficher une citation
router.get('/:id', (req, res, next) => {
    CitationsModel.findOne({ _id: req.params.id })
        .then(things => res.status(200).json(things))
        .catch(error => res.status(400).json({ error }));
})

//ajouter une citation
router.post('/', (req, res, next) => {
    delete req.body._id;
    const event = new CitationsModel({
        ...req.body
    });
    event.save()
        .then(() => res.status(201).json({ message: 'Citation enregistré !' }))
        .catch(error => res.status(400).json({ error }));
});

//modifier une citation
router.put("/:id", (req, res, next) => {
    CitationsModel.updateOne({ _id: req.params.id }, {
        ...req.body, _id: req.params.useUnifiedTopology
    })
        .then(() => res.status(200).json({ message: 'Citation modifié !' }))
        .catch(error => res.status(400).json({ error }));
});

//supprimer une sitation
router.delete("/:id", (req, res, next) => {
    CitationsModel.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Citation supprimé !' }))
        .catch(error => res.status(400).json({ error }));
});*/


module.exports = router;