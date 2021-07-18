import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect, } from "react-router-dom";

import { Header } from './components/Header';

import { Experiences } from './views/Experiences';
import { Contact } from './views/Contact';
import { About } from './views/About';

import './styles/reset.css';
import './styles/App.css';
import { useTheme } from './context/theme.context';

function App() {
  const { theme } = useTheme()
  const pages = [
    { name: 'about', component: About, path: '/' },
    { name: 'exp', component: Experiences, path: '/exp' },
    { name: 'contact', component: Contact, path: '/contact' },
  ]


  return (
    <div 
      className="App"
      style={{'background-color': theme.background}}>
        <Router>
          <Header />
          <div
            className="body"
            style={{'color': theme.font}}>
            <Switch>
              {pages.map((page) => <Route path={page.path} exact component={page.component} />)}
              <Route path='*' > <Redirect to='/' /> </Route>
            </Switch>
          </div>
        </Router>
    </div>
  );
}

export default App;
