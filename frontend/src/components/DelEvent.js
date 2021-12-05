import React, { Component } from 'react';
import axios from 'axios';

export default class DelEvent extends Component {
    state = {
        id: '',
    }

    handleChange = event => {
        this.setState({ id: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        axios.delete(`http://localhost:5500/events/${this.state.id}`)
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
                        <input type="text" name="id" placeholder="Id de l'évènement" onChange={this.handleChange} />
                    </label>
                    <button type="submit">Supprimer</button>
                </form>
            </div>
        )
    }
}