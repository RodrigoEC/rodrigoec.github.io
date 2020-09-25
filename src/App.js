import React from 'react';
import Menu from './components/Menu'
import Cabecalho from './components/cabecalho'
import AboutMe from './components/AboutMe'

import './assets/App.css';
import Projects from './components/Projects/Projects';
import { projects } from './data/projects'


function App() {
  return (
    <div className="App">
      <Menu />
      <Cabecalho />
      <main>
        <div>

          <AboutMe />
          <Projects projects={projects} />
        </div>

      </main>
    </div>
  );
}

export default App;
