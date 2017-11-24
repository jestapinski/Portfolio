import React, { Component } from 'react';
import logo from './logo.svg';
import Experience_Card from './Experience_Card.js';
import './App.css';

class Experience extends React.Component {

  constructor(props){
    super(props);
    this.upper_experience = [
      { corp: "MongoDB", 
        position: "Software Engineering Intern", 
        dates: "May 2017 - August 2017",
        short_description: "Tools for Teaching CS",
        image_path: "exp_imgs/mongo.png",
        location: "New York, NY",
        skills: ["MongoDB", "Node.JS", "ReactJS", "Bulma CSS", "Materialize CSS", "Product Management", "Teamwork", "Presentation Skills"],
        description: "At MongoDB, I served as a software engineeing intern as part of the Education Team, a group responsible for maintaining online code documentation and certification materials. My initial seven weeks at MongoDB were spent implementing an application which combined the studies of history and cryptography in an interactive web application, part of a partnership with the local CSNYC organization. I then worked to develop a centralized hub for such web applications for better distribution into local schools."
      },
      { corp: "Carnegie Mellon University", 
        position: "Teaching Assistant", 
        dates: "August 2015 - Present",
        short_description: "Computer Science, Web Applications",
        image_path: "exp_imgs/ta.png",
        location: "Pittsburgh, PA",
        skills: ["MongoDB", "Node.JS", "ReactJS", "Bulma CSS", "Materialize CSS", "Product Management", "Teamwork", "Presentation Skills"],
        description: "At MongoDB, I served as a software engineeing intern as part of the Education Team, a group responsible for maintaining online code documentation and certification materials. My initial seven weeks at MongoDB were spent implementing an application which combined the studies of history and cryptography in an interactive web application, part of a partnership with the local CSNYC organization. I then worked to develop a centralized hub for such web applications for better distribution into local schools."   
    }];
    this.lower_experience = [
      { corp: "Bank of America", 
        position: "Software Engineering Intern", 
        dates: "June 2016 - August 2016",
        short_description: "Valuation Control Automation",
        image_path: "exp_imgs/boa.png",
        location: "New York, NY",
        skills: ["MongoDB", "Node.JS", "ReactJS", "Bulma CSS", "Materialize CSS", "Product Management", "Teamwork", "Presentation Skills"],
        description: "At MongoDB, I served as a software engineeing intern as part of the Education Team, a group responsible for maintaining online code documentation and certification materials. My initial seven weeks at MongoDB were spent implementing an application which combined the studies of history and cryptography in an interactive web application, part of a partnership with the local CSNYC organization. I then worked to develop a centralized hub for such web applications for better distribution into local schools."   
      },
      { corp: "Carnegie Mellon University", 
        position: "Student Life", 
        dates: "August 2016 - Present",
        short_description: "Resident Assistant, Community Advisor",
        image_path: "exp_imgs/mudge.png",
        location: "Pittsburgh, PA",
        skills: ["MongoDB", "Node.JS", "ReactJS", "Bulma CSS", "Materialize CSS", "Product Management", "Teamwork", "Presentation Skills"],
        description: "At MongoDB, I served as a software engineeing intern as part of the Education Team, a group responsible for maintaining online code documentation and certification materials. My initial seven weeks at MongoDB were spent implementing an application which combined the studies of history and cryptography in an interactive web application, part of a partnership with the local CSNYC organization. I then worked to develop a centralized hub for such web applications for better distribution into local schools."   
      }, 
    ];
    this.state = {
      expanded: false
    };
    this.handler = this.flip_expanded.bind(this);
    this.clear = this.clear_expanded.bind(this);
  }

  flip_expanded(experience){
    this.setState({expanded: experience});
  }

  clear_expanded(){
    this.setState({expanded: false});
  }

render_expanded(){
    let cname, c_pos;
    let expanded = this.state.expanded;
    if (expanded){
      cname = "modal is-active";
      c_pos = "modal-card wide";
    } else {
      return;
    }
    return (
      <div className={cname}>
        <div className="modal-background" onClick={this.clear}></div>
        <div className={c_pos}>
          <header className="modal-card-head">
            <p className="modal-card-title">{expanded.corp} - {expanded.position}</p>
            <button className="delete" aria-label="close" onClick={this.clear}></button>
          </header>
          <section className="modal-card-body">
            <div className="columns">
              <div className="column is-two-thirds">
                <figure className="image is-4x3 centered">
                  <img src={expanded.image_path} alt={expanded.corp}/>
                </figure>
              </div>
              <div className="column">
                <p className="is-size-3">{expanded.corp}</p>
                <p><i>{expanded.location}</i></p>
                <p><i>{expanded.dates}</i></p>
                <br/>
                <p className="is-size-4">{expanded.position}</p>
                <p><i>{expanded.short_description}</i></p>
                <br/>
                <p className="is-size-4">Skills Obtained</p>
                <p>{expanded.skills}</p>
                <br/>
              </div>
            </div>
            <p className="is-size-3">Description</p>
            <p className="is-size-6">{expanded.description}</p>
          </section>
          <footer className="modal-card-foot">
          </footer>
        </div>
      </div>
    )
  }

/*
  Pass the project to be rendered to another component to handle the project
  object itself.
*/
  render_experience(experience){
    return (<Experience_Card experience={experience} key={experience.dates} handler={this.handler}/>)
  }

  render(){
    let col_class = 'columns';
    if (this.state.expanded){
      col_class = 'columns semi-opaque';
    }
    return (
      <div className="container">
        <h2 className="animated title is-1 fadeInUp is-spaced is-deep-yellow">
            Professional Experience
        </h2>
        <div className={col_class}>
          {this.upper_experience.map(experience => this.render_experience(experience))}
        </div>
        <br/>
        <div className={col_class}>
          {this.lower_experience.map(experience => this.render_experience(experience))}
        </div>
        {this.render_expanded()}
      </div>
    )
  }
}

export default Experience;
