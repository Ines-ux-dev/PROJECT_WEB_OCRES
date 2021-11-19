import React, { Component } from 'react';

/*fetch('https://api.artic.edu/api/v1/artworks/27992?fields=id,title,image_id')
    .then((response) => {
        return response.json()
    })
    .then((result) => {
        console.log(result)
    })*/

export class TestImage extends Component {
    state = {
        post: {
            data: {
                image_id: ''
            }
        }
    }
    //https://api.artic.edu/api/v1/artworks/27992?fields=id,title,image_id
    //https://api.artic.edu/api/v1/artworks/27992?fields=title

    //https://jsonplaceholder.typicode.com/todos/1
    componentDidMount() {
        fetch('https://api.artic.edu/api/v1/artworks/27992?fields=id,title,image_id')
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
            <div className="TestTitle">
                <h1>Ce qui doit être afficher : </h1>

                <img src={`https://www.artic.edu/iiif/2/${this.state.post.data.image_id}/full/843,/0/default.jpg`}></img>
            </div>

        );
    }

}

