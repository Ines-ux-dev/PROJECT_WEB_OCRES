import React, { Component } from 'react';

import axios from 'axios';



export default class DelCitation extends Component {

    state = {

        id: '',

    }

    handleChange = citation => {

        this.setState({ id: citation.target.value });

    }

    handleSubmit = citation => {

        citation.preventDefault();



        axios.delete(`http://localhost:5500/citations/${this.state.id}`)

            .then(res => {

                console.log(res);

                console.log(res.data);

            })

    }
    render() {

        return (

            <div>

                <form onSubmit={this.handleSubmit}>

                    <label>

                        <input type="text" name="id" placeholder="Id de la citation" onChange={this.handleChange} />

                    </label>

                    <button type="submit">Supprimer</button>

                </form>

            </div>

        )

    }

}
