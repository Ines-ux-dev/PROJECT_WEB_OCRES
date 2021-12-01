import React, { Component } from 'react';

export class HourandDate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleString(),
            hour: new Date().getHours(),
            minutes: new Date().getMinutes(),
            secondes: new Date().getSeconds(),
            jour: new Date().setDate(),
            mois: new Date().toDateString(),


        };
    }
    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
    tick() {
        this.setState({
            //time: new Date().toLocaleString(),
            hour: new Date().getHours(),
            minutes: new Date().getMinutes(),
            secondes: new Date().getSeconds(),
            jour: new Date().setDate(),
            mois: new Date().toLocaleDateString(),

        });
    }
    render() {

        return (
            <p className="App-clock">

                {this.state.hour}:
                {this.state.minutes}:
                {this.state.secondes}<br></br>
                {this.state.mois}<br></br>

            </p>
        );
    }
}

//{this.state.time}

