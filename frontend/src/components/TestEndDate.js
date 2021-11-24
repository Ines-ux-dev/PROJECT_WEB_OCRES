import React, { Component } from 'react';


export class TestEndDate extends Component {
    state = {
        post: {

            data: [{

                end_date: ''
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
            <div className="enddate">


                {this.state.post.data[0].end_date}


            </div>

        );
    }

}
