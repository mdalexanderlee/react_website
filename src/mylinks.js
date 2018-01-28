import React from 'react';
import IconButton from 'material-ui/IconButton';
import { Linkedin, GithubCircle, FileDocument, Twitter } from 'mdi-material-ui'
import {blue500, greenA700, white} from 'material-ui/styles/colors';

const MyLinks = () => (
  <div>
    <IconButton href="https://www.linkedin.com/in/mdalexanderlee/" target="_blank"><Linkedin hoverColor={blue500}/></IconButton>
    <IconButton href="https://github.com/mdalexanderlee" target="_blank"><GithubCircle hoverColor={white}/></IconButton>
    <IconButton href={require("./Alexander_Lee_CS.pdf")} target="_blank"><FileDocument hoverColor={greenA700}/></IconButton>
    <IconButton href="https://twitter.com/thisisalexlee" target="_blank"><Twitter hoverColor={blue500}/></IconButton>
  </div>
);

export default MyLinks;