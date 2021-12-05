import React, { Component } from 'react';

import axios from 'axios';

export default class DisplayCitation extends Component {
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
            <div>
                {this.state.citations.map(citations =>
                    <ul>
                        <li>{citations.auteur} <p>à dit : "</p> {citations.citation} ", {citations.année}. <p><em>{citations._id}</em></p></li>
                    </ul>

                )}
            </div>
        )
    }
}