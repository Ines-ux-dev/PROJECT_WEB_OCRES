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

            <Row>
                <Col xs={1} md={1} lg={1}>
                    <div className="testcercle">
                        <TestStartDate />
                    </div>
                </Col>
                <Col xs={3} md={3} lg={3}>
                    <div className="testtitle">
                        <TestTitle />
                    </div>
                    <div className="teststartdate">
                        De <StartHour /> à <EndHour />
                    </div>
                    <div className="testenddate">
                        Du <TestStartDate /> au <TestEndDate />

                    </div>
                    <br></br>
                </Col>
            </Row>

        );
    }


}


