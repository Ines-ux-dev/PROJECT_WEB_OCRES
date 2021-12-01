import { Component } from 'react';

var falseDate;
var trueDate = new Date(falseDate);
var hour = `${trueDate.getHours()}`;
var minutes = `${trueDate.getMinutes()}`;
var hours;

export class StartHour extends Component {
    state = {
        post: {
            data: [{
                start_date: ''
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
            falseDate = this.state.post.data[0].start_date;
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





