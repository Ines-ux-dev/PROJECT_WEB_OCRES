import React, { Component } from 'react';
import '../circle.css'
import { Row, Col } from 'react-bootstrap';

import { TestEndDate } from './TestEndDate';
import { TestStartDate } from './TestStartDate';
import { TestTitle } from './TestTitle';



export class Circle extends Component {
    render() {

        return (
            <Row>
                <Col xs={1} md={1} lg={1}>
                    <div className="testcercle">
                        14/11/2021
                    </div>
                </Col>
                <Col xs={3} md={3} lg={3}>
                    <div className="testtitle">
                        <TestTitle />

                    </div>
                    <div className="teststartdate">
                        <TestStartDate />

                    </div>
                    <div className="testenddate">
                        <TestEndDate />

                    </div>
                    <br></br>
                </Col>
            </Row>
        );
    }

    
}


