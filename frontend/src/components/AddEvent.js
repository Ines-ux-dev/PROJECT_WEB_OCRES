import React, { useState } from "react";

import axios from 'axios';

function AddEvent() {

    const [data, setData] = useState({

        date_debut: "",

        date_fin: "",

        heure_debut: "",
        heure_fin: "",

        titre_event: "",

        nbr_places: ""

    })
    function submit(e) {
        e.preventDefault();
        axios.post(`http://localhost:5500/events`, {
            date_debut: data.date_debut,
            date_fin: data.date_fin,
            heure_debut: data.heure_debut,
            heure_fin: data.heure_fin,
            titre_event: data.titre_event,
            nbr_places: data.nbr_places
        })

            .then(res => res.data)
    }
    function handle(e) {
        const newData = { ...data }
        newData[e.target.id] = e.target.value
        setData(newData)

        console.log(newData)
    }
    return (
        <div className="add">
            <form onSubmit={(e) => submit(e)}>
                <input onChange={(e) => handle(e)} id="titre_event" value={data.titre_event} placeholder="Titre de l'évènement" type="text"></input>
                <input onChange={(e) => handle(e)} id="date_debut" value={data.date_debut} placeholder="Date de début" type="text"></input>
                <input onChange={(e) => handle(e)} id="date_fin" value={data.date_fin} placeholder="Date de fin" type="text"></input>
                <input onChange={(e) => handle(e)} id="heure_debut" value={data.heure_debut} placeholder="Heure de début" type="text"></input>
                <input onChange={(e) => handle(e)} id="heure_fin" value={data.heure_fin} placeholder="Heure de fin" type="text"></input>
                <input onChange={(e) => handle(e)} id="nbr_places" value={data.nbr_places} placeholder="Nombre de place" type="text"></input>
                <br></br><button>Ajouter l'évènement</button>
            </form>
        </div>
    )
}

export default AddEvent;

