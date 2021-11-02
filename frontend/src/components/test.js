import React, { Component } from 'react';

import '../index.css';

export default class Publication extends Component {
    render() {
        const { src } = this.props;

        return (
            <img class='img' src={src} alt='' />)
    }
}