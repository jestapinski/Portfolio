/*
  Jordan Stapinski (jstapins)
  Personal Portfolio
  About.js

  Renders the About body component the user sees upon selecting
  the 'About' option in the footer. This is the default view for
  the website upon landing.
*/

import React from 'react';
import './App.css';

class About extends React.Component {

  // Renders the main body content for the 'About' portion of the website
  render(){
      return (
        <div className="container">
          <h2 className="animated title is-1 fadeInUp is-spaced is-deep-yellow">
              I Live to Make an Impact.
          </h2>
          {/* Define the main body text for the About/Splash section */}
          <p className="animated subtitle fadeInUp is-5 is-white not-on-mobile">
            I am a senior at Carnegie Mellon University pursuing a double-major in Information Systems and Human-Computer Interaction, with a minor in Computer Science.
            <br/><br/>
            The focus of my work has been in technical education. 
            <b> What use is technology that is too convoluted for people to understand?</b>
            <br/><br/> 
            Through several independent study projects, summer internship projects, teaching assistant positions, and more, I have been seeking to utilize technology to meet the needs of people in a means that makes sense.<br/><br/>
            Let’s bring people together. 
          </p>
        </div>
      )
  }
}

export default About;
