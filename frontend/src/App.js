import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Dashboard from './Dashboard';
import Settings from './Settings';
//import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <Router>
      <div className="App">

        <div className="content">
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route path="/Settings">
              <Settings />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )

}

export default App;

