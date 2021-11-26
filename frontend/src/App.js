import React from 'react';
import { useState, useEffect } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// load components
import { recherche } from './APIArtChicago';

import { Rechercher } from "./components/Rechercher";
import { ResultatRecherche } from "./components/ResultatRecherche.js";
import { Event } from "./components/Event.js";
import { Circle } from "./components/Cercle.js";
import { TestImage } from './components/TestImage';
import { Navbars } from './components/Navbars';

//fetch('https://api.artic.edu/api/v1/artworks/27992?fields=id,title,image_id')


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
  console.log(results)
  return (

    < div className="App" >

      <header className="App-header">

        <div className="Search">
          <Navbars />
          <Navbar>

          </Navbar>
        </div>
        <Rechercher query={query} onChange={(e) => setQuery(e.target.value)} />
      </header>

      <main>
        <Container fluid>
          <p className="result">Results:</p>
          <ResultatRecherche results={results} />
        </Container>

      </main>

      <Event />
      <TestImage />
      <Circle />
      <Circle />
      <Circle />
    </div >
  );
}

export default App;
