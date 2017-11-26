import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class About extends React.Component {

  render(){
      return (
        <div className="container">
          <h2 className="animated title is-1 fadeInUp is-spaced is-deep-yellow">
              I Live to Make an Impact.
          </h2>
          <p className="animated subtitle fadeInUp is-5 is-white">I am a <span className="title is-5 is-white">senior at Carnegie Mellon University pursuing a double-major in Information Systems and Human-Computer Interaction, with a minor in Computer Science.</span><br/><br/>
            The focus of my work has been in technical education. <b>What use is technology that is too convoluted for people to understand?</b><br/><br/> 
            Through several independent study projects, summer internship projects, teaching assistant positions, and more, I have been seeking to utilize technology to meet the needs of people in a means that makes sense.<br/><br/>
            Let’s bring people together. 
          </p>
        </div>
      )
  }
}

export default About;
