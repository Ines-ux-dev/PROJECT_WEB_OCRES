import React, { Component } from 'react';
import axios from 'axios';
import '../settings.css';
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
            <div className="citationdisp">
                {this.state.citations.map(citations =>
                    <ul>
                        <li>{citations.auteur} a dit : "{citations.citation} ", {citations.année}. <em><br></br>ID: {citations._id}</em></li>
                    </ul>
                )}
            </div>
        )
    }
}