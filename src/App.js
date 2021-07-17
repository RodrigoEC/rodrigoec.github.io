import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Experiences } from './views/Experiences';
import { Contact } from './views/Contact';
import { About } from './views/About';

import './styles/reset.css';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={About}/>
          <Route path='/exp' component={Experiences}/>
          <Route path='/contact' component={Contact}/>
          <Route path='*' > <Redirect to='/'/> </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
