/*
  Jordan Stapinski (jstapins)
  Personal Portfolio
  Semester_Card.js

  Renders an individual semester off of the Bulma CSS Card framework.
*/

import React from 'react';
import './App.css';

class SemesterCard extends React.Component {
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
            <div className="content bottomless">
              <p className="pname is-size-4">{this.semester.name}</p>
              <span className="pname is-size-6"><i>{this.props.courses.length} Course{(this.props.courses.length > 1) ? 's': ''}</i></span>
            </div>
          </div>
        </div>
      )
  }
}

export default SemesterCard;
