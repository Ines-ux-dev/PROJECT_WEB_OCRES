import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Dashboard from './Dashboard';
import Api from './Api';
import Navigation from './Navigation';


function App() {


  return (
    <Router>
      <div className="App">
        <Navigation />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route path="/api">
              <Api />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

  )

}
export default App;
