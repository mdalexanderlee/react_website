import React from 'react';
import MyLinks from './mylinks'

const desc = () => (
  <div id="desc">
    <div id="desc_text">
      <h1 id="desc_header">
        Hey, I'm Alex!
      </h1>
      <div>
        I am a Junior @ UIUC studying Computer Engineering with a minor in Statistics. I will be at Jump Trading this summer writing highly performant C++ code for their algorithmic trading systems. I was previously at JHU-APL, CME Group, CapitalOne, and Leidos. Check out my social media and portfolio!
      </div>
    </div>
    <div id="links">
      <MyLinks/>
    </div>
  </div>
);

export default desc;