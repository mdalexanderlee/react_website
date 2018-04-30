import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AnimateDesc from './desc'
import Desc from './noanimatedesc'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show_animation: true,
    };
    this.HandleClick = this.HandleClick.bind(this)
  }

  HandleClick(){
    this.setState({show_animation: false,});
  }

  render() {
    return (
      <MuiThemeProvider>
          <div onClick={this.HandleClick}>
            <img src="https://i.imgur.com/5ceLN7x.jpg" alt="Calvin and Hobbes" id="backgroundImage"/>
            {this.state.show_animation ? <AnimateDesc/> : <Desc/>}
          </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
