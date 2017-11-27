import React from 'react';
import './App.css';

class Footer extends React.Component {
  constructor(props){
    super(props);
    console.log(props);
    this.main_routes = [
      { path: "/",           name: "About",            btnType: "primary"},
      { path: "/projects",      name: "Projects",           btnType: "info"},
      { path: "/experience",  name: "Professional Experience", btnType: "info"},
      { path: "/coursework",  name: "Coursework", btnType: "info"}      
    ]
  }

  render_tab(route){
    const name = route.name
    if (this.props.active === name){
      return <li 
        className='is-active' 
        key={name} 
        onClick={() => this.props.handle_click(name)}>
        <a>{name}</a></li>
    }
    return <li key={name} onClick={() => this.props.handle_click(name)}><a>{name}</a></li>;
  }

  render(){
    return (
      <div className="hero-foot">
        <nav className="tabs is-boxed is-fullwidth">
          <div className="container">
            <ul>
              {this.main_routes.map(route => 
                this.render_tab(route)
                )
              }
            </ul>
          </div>
        </nav>
      </div>
      )
  }
}

export default Footer;
