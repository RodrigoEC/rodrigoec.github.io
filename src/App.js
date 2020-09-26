import React from 'react';
import Menu from './components/Menu'
import Cabecalho from './components/cabecalho'
import AboutMe from './components/AboutMe'
import ThingsILove from './components/ThingsILove'

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
          <ThingsILove />
        </div>

      </main>
    </div>
  );
}

export default App;
