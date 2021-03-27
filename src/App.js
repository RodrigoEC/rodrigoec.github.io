import React from 'react';

import Menu from './components/Menu'

import Cabecalho from './components/cabecalho'

import AboutMe from './components/AboutMe'

import ThingsILove from './components/ThingsILove'

import Footer from './components/Footer'


import Projects from './components/Projects/Projects';

import { projects } from './data/projects'

import './assets/App.css';

function App() {
  return (
    <div className="App">
      <Menu />
      <header>

        <Cabecalho />
      </header>
      <main>
        <div>
          <AboutMe />
          <div className='bottom-line'></div>
          <Projects projects={projects} />
          <div className='bottom-line'></div>
          <ThingsILove />
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
