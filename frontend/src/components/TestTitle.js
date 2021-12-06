import React, { Component } from 'react';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';


export class TestTitle extends Component {
    state = {
        post: {

            data: [{
                title: ''
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
        console.log(this.state.post.data);
        return (
            <div className="testtitle">
                <LocalActivityIcon />{this.state.post.data[0].title}
            </div>
        );
    }
}



