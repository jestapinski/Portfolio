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
            <figure className="image is-square">
              <img src={this.department.image_path} alt={this.department.abbrev}/>
            </figure>
          </div>
          <div className="card-content">
            <div className="content bottomless">
              <p className="pname is-size-5">{this.department.name}</p>
              <span className="pname is-size-6"><i>{this.props.courses.length} Course{(this.props.courses.length > 1) ? 's': ''}</i></span>
            </div>
          </div>
        </div>
      )
  }
}

export default Department_Card;
