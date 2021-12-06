import React, { Component } from 'react';
import axios from 'axios';
import '../circle.css'
import { Row, Col } from 'react-bootstrap';
import { SatelliteIcon } from 'evergreen-ui';
import { BsFillCalendarWeekFill } from "react-icons/bs";
import { MdChair } from "react-icons/md";
import LocalActivityIcon from '@mui/icons-material/LocalActivity';

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
                <h6>EXPOSITION AVEC NOMBRE DE PLACES LIMITE</h6>
                {this.state.events.map(events =>

                    <Row className="eventsAPII">

                        <Col xs={1} md={1} lg={1}>
                            <div className="testcercle">
                                {events.date_debut}<br />
                            </div>
                        </Col>
                        <Col xs={4} md={4} lg={4}>
                            <div className="titleAPI">
                                <LocalActivityIcon />{events.titre_event}<br />
                            </div>
                            <div className="startdateAPI">
                                De {events.heure_debut} à {events.heure_fin}
                            </div>
                            <div className="enddateAPI">
                                <BsFillCalendarWeekFill /> Du {events.date_debut} au {events.date_fin}
                            </div>
                            <div className="nbPlaces">
                                <MdChair /> {events.nbr_places}</div>
                            <br></br>
                        </Col>
                    </Row>

                )}
            </div>
        );

    }
}