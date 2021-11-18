import React from 'react';
import { useState, useEffect } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// load components
import { recherche } from './APIArtChicago';
import { NextDates } from './components/NextDates';
import { Rechercher } from "./components/Rechercher";
import { ResultatRecherche } from "./components/ResultatRecherche.js";
import { Event } from "./components/Event.js";
import { DisplayTitle } from "./components/DisplayTitle.js";

function Button() {
  return <button>Click Me!</button>
}

function App() {

  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);

  const [resultat, setResultat] = useState(null);

  useEffect(() => {
    // Deux cas où on ne renvoie rien

    // First : si le input est nul
    if (!(query || query.length)) {
      setResults(null);
      setResultat(null);
      return;
    }

    //Second : si moins de 3 caractères sont tapés dans la barre de recherche

    if (query.length < 3) {
      return;
    }

    recherche(query).then(results => {
      if (results && results.data) {
        setResults(results.data)
        setResultat(resultat.data);

      }

    }).catch(err => console.log(err));

  }, [query]);
  console.log(results)

  return (

    < div className="App" >
      <header className="App-header">
        <div className="Search">
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand>Navbar test</Navbar.Brand>
          </Navbar>
        </div>
        <Rechercher query={query} onChange={(e) => setQuery(e.target.value)} />
      </header>

      <main>
        <Container fluid>
          <ResultatRecherche results={results} />
        </Container>

      </main>

      <h1>Les prochaines dates</h1>
      <NextDates />
      <Button />
      <Event />
      <DisplayTitle resultat={resultat} />

    </div >
  );
}

export default App;
