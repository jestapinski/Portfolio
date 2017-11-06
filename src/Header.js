import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import classnames from 'classnames'

class Header extends React.Component {
  render(){
    return (
      <div className={classnames("hero-head")}>
        <div className="navbar">
        <div className="container">
          <div className={"navbar-start"}>
            <p className={classnames("is-teal-text", "is-size-3")}>Jordan Stapinski</p>
          </div>
          <div className={"navbar-end"}>
          
            <a href="https://www.github.com/jestapinski" className="top-nav-link">
              <img src="github.png" className="github-logo" />
            </a>

            <a href="https://www.linkedin.com/in/jordanstapinski/" className="top-nav-link">
              <img src="linkedin.png" className="github-logo" />
            </a>

            <a href="mailto:jestapinski@yahoo.com" className="top-nav-link">
              <img src="email.png" className="github-logo" />
            </a>

          </div>
        </div>
        </div>
      </div>)
  }
}

export default Header;
