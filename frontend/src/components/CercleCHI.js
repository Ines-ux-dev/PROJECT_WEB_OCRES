import React, { Component } from 'react';
import '../circle.css'
import { Row, Col } from 'react-bootstrap';
import { TestEndDate } from './TestEndDate';
import { TestStartDate } from './TestStartDate';
import { TestTitle } from './TestTitle';
import { StartHour } from './StartHour';
import { EndHour } from './EndHour';


//events from Art Chicago API && Our own API

export class CircleCHI extends Component {
    render() {
        return (
            <Row className="eventsCHI">
                <h6>EXPOSITION OUVERTE A TOUS</h6>
                <Col xs={1} md={1} lg={1}>
                    <div className="testcercle">
                        <TestStartDate />
                    </div>
                </Col>
                <Col xs={4} md={4} lg={4}>
                    <div className="testtitle">
                        <TestTitle />
                    </div>
                    <div className="teststartdate">
                        A partir de <StartHour />
                    </div>
                    <div className="testenddate">
                        Fin : <TestEndDate />
                    </div>
                    <br></br>
                </Col>
            </Row>

        );
    }


}


