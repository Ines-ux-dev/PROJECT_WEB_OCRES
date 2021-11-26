import React, { Component } from 'react';


export class TestTitle extends Component {
    state = {
        post: {

            data: [{
                title: ''
            }]


        }
    }

    componentDidMount() {
        fetch('https://api.artic.edu/api/v1/events?limit=3')
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
            <div className="testtitle">
                {this.state.post.data[0].title}

            </div>

        );
    }

}



