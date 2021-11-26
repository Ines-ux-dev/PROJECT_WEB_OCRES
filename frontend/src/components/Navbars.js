import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../navbars.css'


export class Navbars extends Component {
    render() {
        return (
            <Row>
                <Col xs={2} md={2} lg={2}>
                    <div className="dateheurelieu">
                        Paris<br></br>
                        5:29<br></br>
                        26/11/2021<br></br>
                    </div>
                </Col>
                <Col xs={9} md={9} lg={9}>
                    <div className="citation">
                        <p>Marie Claude Pietragalla, danseuse étoile française : « Danser c’est s’interroger, aller au plus profond de soi. »</p>

                    </div>
                </Col>
                <Col className="columIcon" xs={1} md={1} lg={1}>
                    <div class="buttonAccount">
                        <button className="accountData">
                            <img class="initial" src="https://lh3.googleusercontent.com/ogw/ADea4I7MODyPj5JDi34tINSyblaAsRaU6iskYSs4A_E1=s32-c-mo" alt=" ">
                            </img>
                        </button>

                    </div>
                    <span className="dataAccount">
                        <div className="compte">Compte DANSE</div>
                        <div>Nathalie OUCOR</div>
                        <p>nathalie.oucor@danse.fr</p>

                    </span>

                </Col>
            </Row>

        )
    }
}