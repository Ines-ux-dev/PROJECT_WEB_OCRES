import React, { Component } from 'react';


export class TestStartDate extends Component {
    state = {
        post: {

            data: [{

                start_date: ''

            }]


        }
    }

    componentDidMount() {
        fetch('https://api.artic.edu/api/v1/events?limit=2')
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                this.setState({ post: result })
                console.log(result)

            })
    }

    render() {
        console.log(this.state.post.data);
        return (
            <div className="testdate">

                {this.state.post.data[0].start_date}

            </div>

        );
    }

}



