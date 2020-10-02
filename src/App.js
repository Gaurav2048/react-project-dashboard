import React from 'react';
import './App.scss';
import { Router } from '@reach/router';
import Project from './Components/Project';
import Actors from './Components/Actors';

function App(props) {
  return (
    <Router>
      <Project path="/projects" />
      <Actors path="/actors" />
    </Router>
  );
}

export default App;
