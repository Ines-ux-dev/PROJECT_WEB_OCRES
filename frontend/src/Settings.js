import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import AddEvent from './components/AddEvent';
import DelEvent from './components/DelEvent';
import DisplayEvent from './components/DisplayEvent';
import AddCitation from './components/AddCitation';
import DelCitation from './components/DelCitation';
import DisplayCitation from './components/DisplayCitation';
import { Sidebar } from './components/Sidebar';
import './App.css';


function Settings() {
    return (
        <div>

            <div className="container1">
                <Sidebar className="sidebar1" />
                <div className="others1">
                    <h1>Settings</h1>
                    <Row >
                        <Col xs={9} md={9} lg={9} >
                            <AddEvent />
                        </Col>
                        <Col xs={3} md={3} lg={3} >
                            <DelEvent />
                        </Col>
                    </Row>
                    <Row>

                        <Col xs={12} md={12} lg={12}>
                            <DisplayEvent />
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={9} md={9} lg={9} >
                            <AddCitation />
                        </Col>
                        <Col xs={3} md={3} lg={3} >
                            <DelCitation />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12} lg={12}>
                            <DisplayCitation />
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Settings;