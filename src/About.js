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
          <h2 className="animated title is-1 fadeInUp is-spaced is-snow-white">
              I Live to Make an Impact.
          </h2>
          {/* Define the main body text for the About/Splash section */}
          <p className="animated subtitle fadeInUp is-5 is-white">
            I am a Master's Candidate at Carnegie Mellon University pursuing a Master of Science Human-Computer Interaction. Prior to my graduate work, I completed a Bachelor's of Science in Information Systems and Human-Computer Interaction with a minor in Computer Science from Carnegie Mellon University.
            <br/><br/>
            <span className="not-on-mobile">
              The focus of my work has been in technical education. 
              <b> What use is technology that is too convoluted for people to understand?</b>
              <br/><br/> 
            </span>
            Through several capstone consulting projects, independent study projects, teaching assistant positions, summer internship programs, and more, I have been seeking to utilize technology to meet the needs of people in a means that simply <b>makes sense.</b><br/><br/>
            Let’s bring people together.
            <br/>
            <a href="https://jestapinski.github.io/resume/docs/resume.pdf" target="_blank" className="top-nav-link">
              <p className='is-white'><b><u>My Resume</u></b></p>
            </a> 
          </p>
        </div>
      )
  }
}

export default About;
