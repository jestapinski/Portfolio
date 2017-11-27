/*
  Jordan Stapinski (jstapins)
  Personal Portfolio
  Footer.js

  Outlines the hero footer for the portfolio website, passing the active body prop up to the App component.
*/

import React from 'react';
import './App.css';

class Footer extends React.Component {
  constructor(props){
    super(props);
    // Define the tabbed routes for the footer
    this.main_routes = ["About", "Projects", "Professional Experience", "Coursework"];
  }

  // Render one of the tabs in the footer
  render_tab(name){
    // Change background and text color if active for UX
    if (this.props.active === name){
      return (<li 
        className='is-active' 
        key={name} 
        onClick={() => this.props.handle_click(name)}>
        <a>{name}</a></li>);
    }
    return (<li 
              key={name} 
              onClick={() => this.props.handle_click(name)}>
              <a>{name}</a>
            </li>);
  }

  // Render the entire hero footer
  render(){
    return (
      <div className="hero-foot">
        <nav className="tabs is-boxed is-fullwidth">
          <div className="container">
            <ul>
              {this.main_routes.map(route => this.render_tab(route))}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Footer;
