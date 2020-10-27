import React from 'react';
import './App.css';
import Search from './search';
import Nav from './nav';
import Paper from './paper';
import { Container } from '@material-ui/core';
import Card from './card';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Search/>
      <Paper/>
      {/* <Card/> */}


    </div>
  );
}

export default App;
