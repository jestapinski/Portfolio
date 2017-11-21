/*
  Jordan Stapinski (jstapins)
  CMU PUI A6 - Project Portfolio
  Projects.js

  Renders the body if the "Projects" tab is selected.

  Defines the projects to be displayed and renders each one as a
  Project Card Component.
*/

import React, { Component } from 'react';
import logo from './logo.svg';
import Project_Card from './Project_Card.js';
import './App.css';

class Projects extends React.Component {
  constructor(props){
    super(props);
    // Define projects to be in the upper row of projects
    this.upper_projects = [
      { name: "Enigma Unit", short_description: "Deploying hybrid education." },
      { name: "67-495 Course Creation", short_description: "Teaching modern web apps." },
      { name: "Oppia Labeling Extension", short_description: "Improving online education." },
      { name: "Touchify iOS App", short_description: "Cross-Platform biometric security." }
    ];
    // Define projects to be in the lower row of projects
    this.lower_projects = [
      { name: "Mites Occupancy Sensing", short_description: "People sensing without video." },
      { name: "Radix Sort Exercise", short_description: "Interactive pedagogical content." },
      { name: "CSNYC Portal", short_description: "Scoping content distribution." },
      { name: "BlockTrader iOS App", short_description: "Localized food sharing economy." }
    ]
  }

/*
  Pass the project to be rendered to another component to handle the project
  object itself.
*/
  render_project(project){
    return (<Project_Card project={project}/>)
  }

/*
  Renders the projects main body, with a title and two rows of projects.
*/
  render(){
      return (
        <div className="container">
          <h1 className="animated title is-1 fadeInUp is-spaced is-deep-yellow">
              Significant Projects
          </h1>
          <div className="columns">
            {this.upper_projects.map(project => this.render_project(project))}
          </div>
          <br/>
          <div className="columns">
            {this.lower_projects.map(project => this.render_project(project))}
          </div>
        </div>
      )
  }
}

export default Projects;
