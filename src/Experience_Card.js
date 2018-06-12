/*
  Jordan Stapinski (jstapins)
  Personal Portfolio
  Experience_Card.js

  Renders an individual experience off of the Bulma CSS Card framework.
*/

import React from 'react';
import './App.css';

class ExperienceCard extends React.Component {
  constructor(props){
    super(props);
    // Reassign prop project for quicker access
    this.experience = this.props.experience;
    this.flip_handler = (function(){this.props.handler(this.experience)}).bind(this);
  }


  // Renders the experience card.
  render(){
    return (
        <div className="card column animated fadeInUp post-card" onClick={this.flip_handler}>
        <a>
          <div className="card-image">
            <figure className="image is-4x3">
              <img src={this.experience.image_path} alt={this.experience.corp}/>
            </figure>
          </div>
          </a>
          <div className="card-content">
            <div className="content columns">
              <div className="column bottomless">
                <p className="pname is-size-5"><b>{this.experience.corp}</b></p>
                {this.experience.dates}
                <br/>
              </div>
              <div className="column bottomless">
                <p className="pname is-size-5"><b>{this.experience.position}</b></p>
                {this.experience.short_description}
                <br/>
              </div>
            </div>
          </div>
        
        </div>
      )
  }
}

export default ExperienceCard;
