/*
  Jordan Stapinski (jstapins)
  Personal Portfolio
  Header.js

  Outlines the hero header for the portfolio website, including links.
*/

import React from 'react';
import './App.css';

class Header extends React.Component {

  constructor(props){
    super(props);
    // Define the tabbed routes for the footer
    this.main_routes = ["About", "Projects", "Professional Experience", "Coursework"];
    this.mobile_width = 850;
  }

  close_burger_menu(){
      // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      // Get the target from the "data-target" attribute
      var target = $el.dataset.target;
      var $target = document.getElementById(target);

      // Toggle the class on both the "navbar-burger" and the "navbar-menu"
      $el.classList.toggle('is-active');
      $target.classList.toggle('is-active');
    });
  }

  handle_close(name){
    this.close_burger_menu();
    this.props.handle_click(name);
  }

  render_tab(name){
    console.log(this.props.active);
    if (this.props.active === name){
      return (<li 
        className={'is-active' + ((name === "About") ? ' not-on-mobile' : '')} 
        key={name} 
        onClick={() => this.handle_close(name)}>
        <a>{name}</a></li>);
    }
    return (<li 
              className={(name === "About") ? ' not-on-mobile' : ''}
              key={name} 
              onClick={() => this.handle_close(name)}>
              <a>{name}</a>
            </li>);
  }

  // Render based on Bulma CSS Hero-Head class for easy layout
  render(){
    return (
      <div className="hero-head">
        <div className="navbar">
          <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="">
              <a className="is-teal-text is-size-3 not-on-mobile" href="">Jordan Stapinski</a>
              <a className="is-teal-text is-size-4 only-on-mobile" href="">Jordan Stapinski</a>
            </a>

            <a role="button" className="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div className="navbar-menu" id="navMenu">
            <div className="menu only-on-mobile">
              <ul className="menu-list">
                {this.main_routes.map(route => this.render_tab(route))}
              </ul>
            </div>
            <div className="navbar-start">



              {/* Leaving href blank allows for auto-redirect to index page regardless of subdomain */}
            </div>
            {/* Place Picture Links on the right side of the navbar */}
            <div className="navbar-end">
              <a href="https://jestapinski.github.io/resume/docs/resume.pdf" target="_blank" className="top-nav-link">
                <img src="resume.png" className="github-logo" alt="Resume" />
              </a>

              <a href="https://www.github.com/jestapinski" className="top-nav-link" target="_blank">
                <img src="github.png" className="github-logo" alt="GitHub" />
              </a>

              <a href="https://www.linkedin.com/in/jordanstapinski/" className="top-nav-link" target="_blank">
                <img src="linkedin.png" className="github-logo" alt="LinkedIn" />
              </a>

              <a href="mailto:jestapinski@yahoo.com" className="top-nav-link" target="_blank">
                <img src="email.png" className="github-logo" alt="Email" />
              </a>
            </div>
          </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Header;

document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});
