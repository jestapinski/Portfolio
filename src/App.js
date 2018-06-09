/*
  Jordan Stapinski (jstapins)
  Personal Portfolio
  App.js

  Renders the React.JS application.

  Defines program state and combines larger components of
  Header, Body, and Footer.
*/

import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import Header from './Header.js'
import Body from './Body.js'
import Footer from './Footer.js'

class App extends Component {
  constructor(props){
    super(props);
    // Keep the state of the website based on active footer tab
    this.state = {
      active: "About"
    };
    // On a click, change this state to be the new tab (bind to pass state up)
    this.handler = this.handle_click.bind(this);
  }

/* 
  Handles a click on the footer by updating the active tab to be the one
  selected.
*/
  handle_click(name){
    this.setState({active: name});
  }

/*
  Render the entire application, broken into Header, Body, and Footer
  components.

  Note we pass state to the body and footer to render differently
*/
  render() {
    return (
      <div className="App">
        <section className="hero is-fullheight">
          <Header active={this.state.active} handle_click={this.handler}/>
          <Body active={this.state.active}/>
          <Footer active={this.state.active} handle_click={this.handler} />
        </section>
      </div>
    );
  }
}

export default App;
