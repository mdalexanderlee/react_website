import React, { Component } from 'react';
import MyLinks from './mylinks'

class desc extends Component {
  render() {
    return (
      <div id="desc">
        <div id="desc_text">
            <h1 id="desc_header">Hey, I'm Alex!</h1>
            <br/>
            <span>
              I am a Junior @ UIUC studying Computer Engineering with a minor in Statistics.&nbsp;
              I will be at Jump Trading this summer writing highly performant C++ code for their algorithmic trading systems.&nbsp;
              Previously, I've interned at JHU-APL, CME Group, CapitalOne, and Leidos.&nbsp;
              Check out my social media and portfolio!
            </span>
        </div>
        <div id="links"><MyLinks/></div>
      </div>
    );
  }
}

export default desc;
