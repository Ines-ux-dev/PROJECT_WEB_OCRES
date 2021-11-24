import React, { Component } from 'react';
import '../event.css'

export class Event extends Component {

    componentDidMount() {
        //retourner une promesse : récuperer les données depuis l'API
        fetch(`https://api.artic.edu/api/v1/events?limit=1&fields=title,start_date,end_date`)
            .then(response => response.json())
            .then(title => console.log(title))

    }

    render() {
        return (

            <div className="line-event">
            </div>
        )
    }

}

