/*
  Jordan Stapinski (jstapins)
  CMU PUI A6 - Project Portfolio
  Body.js

  Renders the webpage body based on the state of the application.
*/

import React, { Component } from 'react';
import logo from './logo.svg';
import About from './About.js';
import Projects from './Projects.js';
import Experience from './Experience.js';
import Coursework from './Coursework.js';
import './App.css';

class Body extends React.Component {

  constructor(props){
    super(props)
  }

/*
  Choose the body content component to use based on which section
  of the website the user has requested to see.
*/
  render_content(){
    switch (this.props.active){
      case 'About':
        return (<About />);
      case 'Projects':
        return (<Projects />);
      case 'Project Experience':
        return (<Experience />);
      case 'Coursework':
        return (<Coursework />);
      default:
        return (<div></div>);
    }
  }

/*
  Render the body content. Note that this simply invokes the
  render_content function above in order to change the central
  content on the website.

  Note the id also changes to change the background image displayed
  (see App.css for more on background image switching).
*/
  render(){
    return (
      <div className="hero-body bg-img" id={this.props.active}>
        {this.render_content()}
      </div>)
  }
}

export default Body;
