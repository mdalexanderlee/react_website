import React, { Component } from 'react';
import MyLinks from './mylinks'
import Typist from 'react-typist';
import '../node_modules/react-typist/dist/Typist.css';
import FadeIn from 'react-fade-in';

var style = {
  show: true,
  blink: true,
  element: '|',
  hideWhenDone: true,
  hideWhenDoneDelay: 3000,
}

class desc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show_links: false,
    };
    this.onTypingIsDone = this.onTypingIsDone.bind(this);
  }

  onTypingIsDone(){
    this.setState({
      show_links: true,
    });
  }
  render() {
    return (
      <div id="desc">
        <div id="desc_text">
          <Typist cursor={style} avgTypingDelay={35} onTypingDone={this.onTypingIsDone}>
            <h1 id="desc_header">Hey, I'm Alex!</h1>
            <br/>
            <Typist.Delay ms={2500} />
            <span>
              I am a Junior @ UIUC studying Computer Engineering with a minor in Statistics.&nbsp;
              <Typist.Delay ms={1000} />
              I will be at Jump Trading this summer writing highly performant C++ code for their algorithmic trading systems.&nbsp;
              <Typist.Delay ms={1000} />
              Previously, I've interned at JHU-APL, CME Group, CapitalOne, and Leidos.&nbsp;
              <Typist.Delay ms={1000} />
              Check out my social media and portfolio!
              <Typist.Delay ms={1000} /> 
            </span>
          </Typist>
        </div>
        {this.state.show_links ? <FadeIn><div id="links"><MyLinks/></div></FadeIn> : <p>&nbsp;</p>}
      </div>
    );
  }
}

export default desc;
