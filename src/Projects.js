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
      { 
        name: "Enigma Unit", 
        short_description: "Deploying hybrid education.",
        image_path: "project_imgs/enigma.png" 
      },
      { 
        name: "67-495 Course Creation", 
        short_description: "Teaching modern web apps.",
        image_path: "project_imgs/cmuis.png"
      },
      { 
        name: "Oppia Labeling Extension", 
        short_description: "Improving online education.",
        image_path: "project_imgs/Oppia_logo.png" 
      },
      { 
        name: "Touchify iOS App", 
        short_description: "Cross-Platform security.",
        image_path: "project_imgs/TouchifyAppicon.png" 
      }
    ];
    // Define projects to be in the lower row of projects
    this.lower_projects = [
      { 
        name: "Mites Occupancy Sensing", 
        short_description: "People sensing without video.",
        image_path: "project_imgs/synth_sensor.jpeg"
      },
      { 
        name: "Radix Sort Exercise", 
        short_description: "Interactive pedagogical content.",
        image_path: "project_imgs/radix_sort.png" 
      },
      { 
        name: "CSNYC Portal", 
        short_description: "Scoping content distribution.",
        image_path: "project_imgs/cstoall_hub.png" 
      },
      { 
        name: "BlockTrader iOS App", 
        short_description: "Localized food sharing economy.",
        image_path: "project_imgs/BlocktraderAppicon.png" 
      }
    ];
    this.state = {
      expanded: false
    };
    this.handler = this.flip_expanded.bind(this);
    this.clear = this.clear_expanded.bind(this);
  }

  flip_expanded(){
    this.setState({expanded: !(this.state.expanded)});
  }

  clear_expanded(){
    console.log('clear');
    this.setState({expanded: false});
  }

/*
  Pass the project to be rendered to another component to handle the project
  object itself.
*/
  render_project(project){
    return (<Project_Card project={project} key={project.name} handler={this.handler}/>)
  }

  render_expanded(){
    let cname;
    let expanded = this.state.expanded;
    if (expanded){
      cname = "modal is-active";
    } else {
      cname = "modal hidden";
    }
    return (
      <div className={cname}>
        <div className="modal-background" onClick={this.clear}></div>
        <div className="modal-card mc-1">
          <header className="modal-card-head">
            <p className="modal-card-title">Modal title</p>
            <button className="delete" aria-label="close" onClick={this.clear}></button>
          </header>
          <section className="modal-card-body">
          </section>
          <footer className="modal-card-foot">
            <button className="button is-success">Save changes</button>
            <button className="button">Cancel</button>
          </footer>
        </div>
      </div>
    )
  }

/*
  Renders the projects main body, with a title and two rows of projects.
*/
  render(){
    let col_class = 'columns';
    if (this.state.expanded){
      col_class = 'columns semi-opaque';
    }
    return (
      <div className="container">
        <h2 className="animated title is-1 fadeInUp is-spaced is-deep-yellow">
            Significant Projects
        </h2>
        <div className={col_class}>
          {this.upper_projects.map(project => this.render_project(project))}
        </div>
        <br/>
        <div className={col_class}>
          {this.lower_projects.map(project => this.render_project(project))}
        </div>
        {this.render_expanded()}
      </div>
    )
  }
}

export default Projects;
