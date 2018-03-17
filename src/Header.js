/*
  Jordan Stapinski (jstapins)
  Personal Portfolio
  Header.js

  Outlines the hero header for the portfolio website, including links.
*/

import React from 'react';
import './App.css';

class Header extends React.Component {

  // Render based on Bulma CSS Hero-Head class for easy layout
  render(){
    return (
      <div className="hero-head">
        <div className="navbar">
          <div className="container">
            <div className="navbar-start">
              {/* Leaving href blank allows for auto-redirect to index page regardless of subdomain */}
              <a className="is-teal-text is-size-3 not-on-mobile" href="">Jordan Stapinski</a>
              <a className="is-teal-text is-size-4 only-on-mobile" href="">Jordan Stapinski</a>
            </div>
            {/* Place Picture Links on the right side of the navbar */}
            <div className="navbar-end">
              <a href="resume.pdf" target="_blank" className="top-nav-link">
                <img src="resume.png" className="github-logo" alt="Resume" />
              </a>

              <a href="https://www.github.com/jestapinski" className="top-nav-link">
                <img src="github.png" className="github-logo" alt="GitHub" />
              </a>

              <a href="https://www.linkedin.com/in/jordanstapinski/" className="top-nav-link">
                <img src="linkedin.png" className="github-logo" alt="LinkedIn" />
              </a>

              <a href="mailto:jestapinski@yahoo.com" className="top-nav-link">
                <img src="email.png" className="github-logo" alt="Email" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
