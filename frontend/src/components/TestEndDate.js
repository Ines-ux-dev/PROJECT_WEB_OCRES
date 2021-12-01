import { Component } from 'react';

var falseDate;
var trueDate;
var dateMDY;


export class TestEndDate extends Component {
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

            if (trueDate.getDate() < 10 && trueDate.getMonth() < 9) {
                dateMDY = "0" + trueDate.getDate() + "/" + "0" + (trueDate.getMonth() + 1) + "/" + trueDate.getFullYear();
                //dateMDY = `${trueDate.getDate()}-${trueDate.getMonth() + 1}-${trueDate.getFullYear()}`;
                return dateMDY;
            }

            if (trueDate.getDate() < 10 && trueDate.getMonth() > 9) {
                dateMDY = "0" + trueDate.getDate() + "/" + (trueDate.getMonth() + 1) + "/" + trueDate.getFullYear();
                //dateMDY = `${trueDate.getDate()}-${trueDate.getMonth() + 1}-${trueDate.getFullYear()}`;
                return dateMDY;
            }

            if (trueDate.getDate() > 10 && trueDate.getMonth() < 9) {
                dateMDY = trueDate.getDate() + "/" + "0" + (trueDate.getMonth() + 1) + "/" + trueDate.getFullYear();
                //dateMDY = `${trueDate.getDate()}-${trueDate.getMonth() + 1}-${trueDate.getFullYear()}`;
                return dateMDY;
            }
            else {
                dateMDY = `${trueDate.getDate()}/${trueDate.getMonth() + 1}/${trueDate.getFullYear()}`;
                return dateMDY;
            }
        }

    }

}



