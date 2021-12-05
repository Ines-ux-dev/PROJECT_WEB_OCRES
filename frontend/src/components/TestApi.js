/*import React, { Component } from 'react';

export class TestApi extends Component {

    state = {
        events: {
            date_debut: ''
        }

    }

    componentDidMount() {
        fetch('http://localhost:5500/events/61a9f293dd8ef048e3dd5669')
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                this.setState({ events: result })
                console.log(result)


            })
    }

    render() {
        console.log(this.state.events.date_debut);
        return (
            <div>
                <h4>affichage : </h4>
                <p>{this.state.events.date_debut}</p>

            </div>

        );
    }
}*/
