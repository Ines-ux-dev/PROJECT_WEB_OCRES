import React, { Component } from 'react';
import axios from 'axios';
import '../circleAPI.css'
import { Row, Col } from 'react-bootstrap';
import { SatelliteIcon } from 'evergreen-ui';
import { BsFillCalendarWeekFill } from "react-icons/bs";
import { MdChair } from "react-icons/md";



export class CercleAPI extends Component {
    state = {
        events: []
    }
    componentDidMount() {
        axios.get('http://localhost:5500/events')
            .then(res => {
                const events = res.data;
                this.setState({ events });
            })
    }

    render() {

        return (
            <div className="eventsAPI">
                {this.state.events.map(events =>


                    <Row className="eventsAPII">
                        <Col xs={1} md={1} lg={1}>
                            <div className="testcercle">
                                {events.date_debut}<br />

                            </div>
                        </Col>
                        <Col xs={3} md={3} lg={3}>
                            <div className="testtitle">
                                {events.titre_event}<br />

                            </div>
                            <div className="teststartdate">
                                De {events.heure_debut} à {events.heure_fin}
                            </div>
                            <div className="testenddate">
                                <BsFillCalendarWeekFill /> Du {events.date_debut} au {events.date_fin}


                            </div>
                            <div>
                                <MdChair /> {events.nbr_places}</div>
                            <br></br>
                        </Col>
                    </Row>



                )}
            </div>
        );

    }
}