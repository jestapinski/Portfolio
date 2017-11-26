/*
  Jordan Stapinski (jstapins)
  CMU PUI A6 - Project Portfolio
  Semester_Card.js

  Renders an individual semester off of the Bulma CSS Card framework.
*/

import React, { Component } from 'react';
import './App.css';

class Semester_Card extends React.Component {
  constructor(props){
    super(props);
    console.log(props);
    // Reassign prop project for quicker access
    this.semester = this.props.semester;
    this.flip_handler = (function(){this.props.handler(this.semester)}).bind(this);
  }

/*
  Renders the semester card.
*/
  render(){
    return (
        <div className="card column animated fadeInUp" onClick={this.flip_handler}>
          <div className="card-image">
            <figure className="image is-square">
              <img src={this.semester.image_path} alt={this.semester.abbrev}/>
            </figure>
          </div>
          <div className="card-content">
            <div className="content columns">
            <div className="column bottomless">
              <p className="pname is-size-5"><b>{this.semester.name}</b></p>
              <br/>
            </div>
            <div className="column bottomless">
              <p className="pname is-size-5"><b>{this.semester.abbrev}</b></p>
              <br/>
            </div>
            </div>
          </div>
        </div>
      )
  }
}

export default Semester_Card;
