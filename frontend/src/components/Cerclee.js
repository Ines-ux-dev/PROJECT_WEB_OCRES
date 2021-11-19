import React, { Component } from 'react';
import '../cerclee.css'
import { Row, Col, Card } from 'react-bootstrap';

export class Cerclee extends Component {

    render() {

        return (
            <Card >
                <Row>
                    <Col xs={2} md={2} lg={1}>
                        <div className="testcercle">
                            14/11/2021
                        </div>
                    </Col>
                    <Col xs={4} md={4} lg={3}>

                        <div className="testtitle">

                            Title

                        </div>

                        <div className="teststartdate">

                            debut

                        </div>

                        <div className="testenddate">

                            fin

                        </div>

                        <br></br>

                    </Col>
                </Row >
            </Card>

        );

    }

}