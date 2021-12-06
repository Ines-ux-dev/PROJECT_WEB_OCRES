import React, { Component } from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';
import '../citations.css'

export class Citation extends Component {
    state = {
        citations: []
    }
    componentDidMount() {
        axios.get('http://localhost:5500/citations')
            .then(res => {
                const citations = res.data;
                this.setState({ citations });
            })
    }
    render() {
        return (

            <Carousel>
                {this.state.citations.map(citations => (

                    <Carousel.Item >
                        <div className="carouCitations">
                            {citations.citation} ___<br></br>
                            <em>{citations.auteur}, {citations.année}</em>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>

        )
    }
}