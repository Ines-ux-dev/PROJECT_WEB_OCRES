import React, { Component } from 'react';

fetch('https://api.artic.edu/api/v1/artworks/27992?fields=id,title,image_id')
    .then((response) => {
        return response.json()
    })
    .then((result) => {
        console.log(result)
    })

export class TestTitle extends Component {
    state = {
        post: {}
    }
    //https://api.artic.edu/api/v1/artworks/27992?fields=id,title,image_id
    //https://api.artic.edu/api/v1/artworks/27992?fields=title

    //https://jsonplaceholder.typicode.com/todos/1
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                this.setState({ post: result })
                console.table(result)

            })
    }

    render() {
        return (
            <div className="TestTitle">
                <h1>Ce qui doit être afficher : </h1>
                {this.state.post.title}
            </div>
            /*{this.state.post.title[0]}*/
        );
    }

}



