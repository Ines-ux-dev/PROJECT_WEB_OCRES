import React, { Component } from 'react';

var falseDate;
var trueDate = new Date(falseDate);
var dateMDY = `${trueDate.getDate()}-${trueDate.getMonth() + 1}-${trueDate.getFullYear()}`;
var hour = `${trueDate.getHours()}`;
var minutes = `${trueDate.getMinutes()}`;
var hours;

export class EndHour extends Component {
    state = {
        post: {
            data: [{
                end_date: ''
            }]
        }
    }

    componentDidMount() {
        fetch('https://api.artic.edu/api/v1/events?limit=1')
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                this.setState({ post: result })
                console.log(result)

            })
    }

    render() {
        if (this.state.post.data) {
            falseDate = this.state.post.data[0].end_date;
            trueDate = new Date(falseDate);
            hour = `${trueDate.getHours()}`;
            minutes = `${trueDate.getMinutes()}`;
            if (hour < 10 && minutes > 10) {
                hours = "0" + hour + ":" + minutes;
                return hours
            }
            if (hour < 10 && minutes < 10) {
                hours = "0" + hour + ":" + "0" + minutes;
                return hours;
            }
            if (hour > 10 && minutes < 10) {
                hours = hour + ":" + "0" + minutes;
                return hours;
            }
            else {
                hours = hour + ":" + minutes;
                return hours;
            }
        }
    }

}





