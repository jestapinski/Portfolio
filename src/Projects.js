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
        image_path: "project_imgs/enigma.png",
        index: 0 
      },
      { 
        name: "67-495 Course Creation", 
        short_description: "Teaching modern web apps.",
        image_path: "project_imgs/cmuis.png",
        index: 1
      },
      { 
        name: "Oppia Labeling Extension", 
        short_description: "Improving online education.",
        image_path: "project_imgs/Oppia_logo.png",
        index: 2 
      },
      { 
        name: "Touchify iOS App", 
        short_description: "Cross-Platform security.",
        image_path: "project_imgs/TouchifyAppicon.png",
        index: 3 
      }
    ];
    // Define projects to be in the lower row of projects
    this.lower_projects = [
      { 
        name: "Mites Occupancy Sensing", 
        short_description: "People sensing without video.",
        image_path: "project_imgs/synth_sensor.jpeg",
        index: 4
      },
      { 
        name: "Radix Sort Exercise", 
        short_description: "Interactive pedagogical content.",
        image_path: "project_imgs/radix_sort.png",
        index: 5 
      },
      { 
        name: "CSNYC Portal", 
        short_description: "Scoping content distribution.",
        image_path: "project_imgs/cstoall_hub.png",
        index: 6 
      },
      { 
        name: "BlockTrader iOS App", 
        short_description: "Localized food sharing economy.",
        image_path: "project_imgs/BlocktraderAppicon.png",
        index: 7 
      }
    ];
    this.state = {
      expanded: false
    };
    this.handler = this.flip_expanded.bind(this);
    this.clear = this.clear_expanded.bind(this);
  }

  flip_expanded(project){
    this.setState({expanded: project});
  }

  clear_expanded(){
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
    let cname, c_pos;
    let expanded = this.state.expanded;
    if (expanded){
      cname = "modal is-active";
      c_pos = "modal-card is-half mc-" + expanded.index.toString();
    } else {
      return;
    }
    return (
      <div className={cname}>
        <div className="modal-background" onClick={this.clear}></div>
        <div className={c_pos}>
          <header className="modal-card-head">
            <p className="modal-card-title">{expanded.name}</p>
            <button className="delete" aria-label="close" onClick={this.clear}></button>
          </header>
          <section className="modal-card-body">
            <div className="columns">
              <div className="column is-one-third">
                <figure className="image is-128x128 centered">
                  <img src={expanded.image_path} alt={expanded.name}/>
                </figure>
              </div>
              <div className="column">
                {expanded.short_description}
              </div>
            </div>
          </section>
          <footer className="modal-card-foot">
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
