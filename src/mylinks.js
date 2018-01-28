import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import Linkedin from 'mdi-material-ui/Linkedin'
import GithubCircle from 'mdi-material-ui/GithubCircle'
import FileDocument from 'mdi-material-ui/FileDocument'
import Twitter from 'mdi-material-ui/Twitter'
import { blue500, greenA700, white } from 'material-ui/styles/colors';

class MyLinks extends Component {
  render() {
  	return (
	  <div>
	    <IconButton href="https://www.linkedin.com/in/mdalexanderlee/" target="_blank"><Linkedin hoverColor={blue500}/></IconButton>
	    <IconButton href="https://github.com/mdalexanderlee" target="_blank"><GithubCircle hoverColor={white}/></IconButton>
	    <IconButton href={require("./Alexander_Lee_CS.pdf")} target="_blank"><FileDocument hoverColor={greenA700}/></IconButton>
	    <IconButton href="https://twitter.com/thisisalexlee" target="_blank"><Twitter hoverColor={blue500}/></IconButton>
	  </div>
    );
  }
}

export default MyLinks;