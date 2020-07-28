import React, { Component } from 'react';
import classes from './App.module.css';
import BasicInfo from './components/BasicInfo/BasicInfo';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

class App extends Component {
  render() {
  return (
    <div className={classes.Container}>
      <BasicInfo />
      <Skills />
      <Projects />
    </div>
  );
  };
};

export default App; 
