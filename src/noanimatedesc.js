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
              I'm a Senior @ UIUC studying Computer Engineering.&nbsp;
              In June 2019, I'll be joining Jump Trading as a Software Engineer writing highly performant code for their algorithmic trading systems.&nbsp;
              Check out my social media and portfolio!
            </span>
        </div>
        <div id="links"><MyLinks/></div>
      </div>
    );
  }
}

export default desc;
