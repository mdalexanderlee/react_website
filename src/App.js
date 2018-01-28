import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Desc from './desc'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <img src="https://i.imgur.com/5ceLN7x.jpg" alt="Calvin and Hobbes" id="backgroundImage"/>
        <Desc/>
      </MuiThemeProvider>
    );
  }
}

export default App;
