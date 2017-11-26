/*
  Jordan Stapinski (jstapins)
  CMU PUI A6 - Project Portfolio
  Department_Card.js

  Renders an individual department off of the Bulma CSS Card framework.
*/

import React, { Component } from 'react';
import './App.css';

class Department_Card extends React.Component {
  constructor(props){
    super(props);
    console.log(props);
    // Reassign prop project for quicker access
    this.department = this.props.department;
    this.flip_handler = (function(){this.props.handler(this.department)}).bind(this);
  }

/*
  Renders the department card.
*/
  render(){
    return (
        <div className="card column animated fadeInUp" onClick={this.flip_handler}>
          <div className="card-image">
            <figure className="image is-4x3">
            </figure>
          </div>
          <div className="card-content">
            <div className="content columns">
            <div className="column bottomless">
              <p className="pname is-size-5"><b>{this.department.name}</b></p>
              <br/>
            </div>
            <div className="column bottomless">
              <p className="pname is-size-5"><b>{this.department.abbrev}</b></p>
              {this.department.description}
              <br/>
            </div>
            </div>
          </div>
        </div>
      )
  }
}

export default Department_Card;
