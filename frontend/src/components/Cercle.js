import React, { Component } from 'react';
import '../circle.css'
import { Row, Col, Container, Image } from 'react-bootstrap';


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
            </Row>
        );
    }
}


