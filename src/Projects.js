import React, { Component } from 'react';
import logo from './logo.svg';
import Project_Card from './Project_Card.js';
import './App.css';

class Projects extends React.Component {

  render(){
  	// Set below to -20% margin
      return (
        <div className="container">
          <h1 className="animated title is-1 fadeInUp is-spaced is-deep-yellow">
              Significant Projects
          </h1>
          <p className="animated subtitle fadeInUp is-5 is-white">I am a <span className="title is-5 is-white">senior at Carnegie Mellon University pursuing a double-major in Information Systems and Human-Computer Interaction, with a minor in Computer Science.</span><br/><br/>
            The focus of my work has been in technical education. What use is technology that is too convoluted for people to understand?<br/><br/> 
            Through several independent study projects, summer internship projects, teaching assistant positions, and more, I have been seeking to utilize technology to meet the needs of people in a means that makes sense.<br/><br/>
            Let’s bring people together. 
          </p>
          <div className="columns">
            <Project_Card />
            <Project_Card />
            <Project_Card />
            <Project_Card />
          </div>
          <br/>
          <div className="columns">
            <Project_Card />
            <Project_Card />
            <Project_Card />
            <Project_Card />
          </div>
        </div>
      )
  }
}

export default Projects;
