import React, { Component } from 'react';

import axios from 'axios';

export default class DisplayEvent extends Component {
    state = {
        events: []
    }
    componentDidMount() {
        axios.get('http://localhost:5500/events')
            .then(res => {
                const events = res.data;
                this.setState({ events });
            })
    }
    render() {
        return (
            <div>
                {this.state.events.map(events =>
                    <ul>
                        <li>Titre : {events.titre_event}</li>

                        <ul>
                            <li>Date de début : {events.date_debut}</li>
                            <li>Date de fin : {events.date_fin}</li>
                            <li>Heure de début : {events.heure_debut}</li>
                            <li>Heure de fin : {events.heure_fin}</li>
                            <li>Nombre de places : {events.nbr_places}</li>
                            <li>Id : {events._id}</li>
                        </ul>
                    </ul>

                )}
            </div>
        )
    }
}