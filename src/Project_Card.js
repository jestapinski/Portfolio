/*
  Jordan Stapinski (jstapins)
  CMU PUI A6 - Project Portfolio
  Project_Card.js

  Renders an individual project off of the Bulma CSS Card framework.
*/

import React, { Component } from 'react';
import './App.css';

class Project_Card extends React.Component {
  constructor(props){
    super(props);
    console.log(props);
    // Reassign prop project for quicker access
    this.project = this.props.project;
    this.flip_handler = this.props.handler;
  }

/*
  Renders the project card.
*/
  render(){
    return (
        <div className="card column animated fadeInUp" onClick={this.flip_handler}>
          <div className="card-image">
            <figure className="image is-square">
              <img src={this.project.image_path} alt={this.project.name}/>
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
            </div>
            <div className="content">
              <p className="pname is-size-6"><b>{this.project.name}</b></p>
              {this.project.short_description}
              <br/>
            </div>
          </div>
        </div>
      )
  }
}

export default Project_Card;
