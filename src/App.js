import React, { Component } from 'react';
import logo from './logo.svg';
import 'bulma/css/bulma.css';
import './App.css';
import Header from './Header.js'
import Body from './Body.js'
import Footer from './Footer.js'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      active: "About"
    }
    this.handler = this.handle_click.bind(this);
  }

  handle_click(name){
    this.setState({active: name});
  }

  render() {
    return (
      <div className="App">
        <section className="hero is-fullheight">
          <Header />
          <Body active={this.state.active}/>
          <Footer active={this.state.active} handle_click={this.handler} />
        </section>
      </div>
    );
  }
}

export default App;
