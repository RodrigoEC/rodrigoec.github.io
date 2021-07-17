import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect, } from "react-router-dom";

import { Header } from './components/Header';

import { Experiences } from './views/Experiences';
import { Contact } from './views/Contact';
import { About } from './views/About';

import './styles/reset.css';
import './styles/App.css';
import ThemeProvider from './context/theme.context';

function App() {
  const pages = [
    { name: 'about', component: About, path: '/' },
    { name: 'exp', component: Experiences, path: '/exp' },
    { name: 'contact', component: Contact, path: '/contact' },
  ]


  return (
    <div className="App">
      <ThemeProvider>
        <Router>
          <Header />
          <Switch>
            {pages.map((page) => <Route path={page.path} exact component={page.component} />)}
            <Route path='*' > <Redirect to='/' /> </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
