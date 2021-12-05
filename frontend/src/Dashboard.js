import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// load components
import { recherche } from './APIArtChicago';
import { Rechercher } from "./components/Rechercher";
import { ResultatRecherche } from "./components/ResultatRecherche.js";
import { CircleCHI } from "./components/CercleCHI.js";
import { Caroutest } from './components/Caroutest';
import { Graphe } from './components/Graphe';
import { Citation } from './components/Citation';
import { AccountIcone } from './components/AccountIcone';
import { ClockandDate } from './components/ClockandDate';
import { CercleAPI } from './components/CercleAPI';
import { Sidebar } from './components/Sidebar';

function Dashboard() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState(null);

    useEffect(() => {
        // Deux cas où on ne renvoie rien

        // First : si le input est nul
        if (!(query || query.length)) {
            setResults(null);
            return;
        }

        //Second : si moins de 3 caractères sont tapés dans la barre de recherche
        if (query.length < 3) {
            return;
        }

        recherche(query).then(results => {
            if (results && results.data) {
                setResults(results.data)
            }

        }).catch(err => console.log(err));

    }, [query]);

    return (

        < div className="App" >
            <div className="container">
                <Sidebar className="sidebar" />
                <div className="others">
                    <header>
                        <Row>
                            <Col xs={4} md={4} lg={4}>
                                <div className="research">
                                    <Rechercher query={query} onChange={(e) => setQuery(e.target.value)} />
                                </div>
                            </Col>
                            <Col xs={4} md={4} lg={4}>

                            </Col>
                            <Col xs={1} md={1} lg={1}>
                                <ClockandDate />
                            </Col>
                            <Col className="columIcon" xs={3} md={3} lg={3}>
                                <AccountIcone />
                            </Col>
                        </Row>
                        <Container fluid>
                            <ResultatRecherche results={results} className="resultss" />
                        </Container>
                        <br></br>
                    </header>

                    <main>
                        <div className="container">
                            <Row>
                                <Col xs={7} md={7} lg={7}>
                                    <div>
                                        <CircleCHI />
                                    </div>
                                    <div>
                                        <CercleAPI />
                                    </div>
                                </Col>
                                <Col xs={4} md={4} lg={4}>
                                    <div>
                                        <p className="grapheTitle">Horaires d'affluence a l'Art Institute of Chicago</p><br></br>
                                        <Graphe />
                                    </div >
                                </Col>
                            </Row>
                        </div>

                        <Caroutest /><br></br>

                    </main>
                    <Citation />

                </div>


            </div >




        </div >



    );
}
export default Dashboard;