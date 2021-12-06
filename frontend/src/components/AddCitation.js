import React, { Component, useState } from "react";
import axios from 'axios';
function AddCitation() {
    const [data, setData] = useState({
        auteur: "",
        citation: "",
        année: ""
    })
    function submit(e) {

        e.preventDefault();

        axios.post(`http://localhost:5500/citations`, {

            auteur: data.auteur,

            citation: data.citation,

            année: data.année

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

        <div>

            <form onSubmit={(e) => submit(e)}>

                <input onChange={(e) => handle(e)} id="auteur" value={data.auteur} placeholder="Auteur de la citation" type="text"></input>

                <input onChange={(e) => handle(e)} id="citation" value={data.citation} placeholder="Citation" type="text"></input>

                <input onChange={(e) => handle(e)} id="année" value={data.année} placeholder="Année" type="number"></input>

                <button>Ajouter la citation</button>

            </form>

        </div>

    )

}

export default AddCitation;

