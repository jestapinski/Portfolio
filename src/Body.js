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

  render(){
    return (
      <div className="hero-body bg-img" id={this.props.active}>
        {this.render_content()}
      </div>)
  }
}

export default Body;
