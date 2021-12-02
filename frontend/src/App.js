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

import './houranddate.css'
import { ClockandDate } from './components/ClockandDate';



function App() {

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
      <header /*className="App-header"*/>

        <div /*className="Search"*/>
          <Row >
            <Col xs={5} md={5} lg={5}>
              <Rechercher query={query} onChange={(e) => setQuery(e.target.value)} />
            </Col>
            <Col xs={2} md={2} lg={2}>
              <Citation />
            </Col>
            <Col xs={2} md={2} lg={2}>
              <ClockandDate />
            </Col>
            <Col className="columIcon" xs={1} md={1} lg={1}>
              <AccountIcone />

            </Col>
          </Row>

          <Rechercher query={query} onChange={(e) => setQuery(e.target.value)} />
          <Container fluid>
            <ResultatRecherche results={results} className="resultss" />
          </Container>
          <br></br>
        </div>
      </header>
      <main>
        <div>
          <CircleCHI />
        </div><br></br>
        <Caroutest /><br></br>
        <div>
          <p className="grapheTitle">Horaires d'affluence a l'Art Institute of Chicago</p><br></br>
          <Graphe />
        </div >



      </main>

    </div >
  );
}

export default App;
