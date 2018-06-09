/*
  Jordan Stapinski (jstapins)
  Personal Portfolio
  Experience.js

  Renders the Experience body component the user sees upon selecting
  the 'Experience' option in the footer. This shows several professional
  experiences had in column-card layout.
*/

import React from 'react';
import ExperienceCard from './Experience_Card.js';
import './App.css';

class Experience extends React.Component {

  constructor(props){
    super(props);

    //Define experience as two arrays of JavaScript objects to better handle rendering two rows of cards
    this.upper_experience = [
      { corp: "MongoDB", 
        position: "Software Engineering Intern", 
        dates: "May 2017 - August 2017",
        short_description: "Tools for Teaching CS",
        image_path: "exp_imgs/mongo.png",
        location: "New York, NY",
        skills: ["MongoDB", "Node.JS", "ReactJS", "Bulma CSS", "Product Management", "Teamwork", "Presentation Skills"],
        description: "At MongoDB, I served as a software engineeing intern as part of the Education Team, a group responsible for maintaining online code documentation and certification materials. My initial seven weeks at MongoDB were spent implementing an application which combined the studies of history and cryptography in an interactive web application, part of a partnership with the local CSNYC organization. I then worked to develop a centralized hub for such web applications for better distribution into local schools."
      },
      { corp: "Carnegie Mellon University", 
        position: "Teaching Assistant", 
        dates: "August 2015 - Present",
        short_description: "Computer Science, Web Applications",
        image_path: "exp_imgs/ta.png",
        location: "Pittsburgh, PA",
        skills: ["Python", "Communication", "Administration", "Work-Life Balance", "Teamwork", "Presentation Skills"],
        description: "Worked with students as a Teaching Assistant for multiple courses at Carnegie Mellon. Responsible for leading review and recitations as well as grading and office hours."   
    }];

    //Define experience as two arrays of JavaScript objects to better handle rendering two rows of cards
    this.lower_experience = [
      { corp: "Bank of America", 
        position: "Software Engineering Intern", 
        dates: "June 2016 - August 2016",
        short_description: "Valuation Control Automation",
        image_path: "exp_imgs/boa.png",
        location: "New York, NY",
        skills: ["Python", "Industrial Testing", "Agile Development", "Work-Life Balance", "Teamwork", "Presentation Skills"],
        description: "Worked in Global Markets division on application used for internal Valuation Control. Pioneered ‘Realtime Tables’ testing system and improved overall system functionality."   
      },
      { corp: "Carnegie Mellon University", 
        position: "Student Life", 
        dates: "August 2016 - Present",
        short_description: "Resident Assistant, Community Advisor",
        image_path: "exp_imgs/mudge.png",
        location: "Pittsburgh, PA",
        skills: ["Work-Life Balance", "Teamwork", "Presentation Skills", "Emergency Response", "Administration"],
        description: "Engaged with first-year students in transitioning to college life. Responsible for compiling events for residents, as well as maintaining administrative duties and looking for students’ well-being while leading a team of RAs as a Community Advisor."   
      }, 
    ];

    // Define the state to be whether an experience has been selected to expand or not
    this.state = {
      expanded: false
    };

    // Bind handlers to this class instance
    this.handler = this.flip_expanded.bind(this);
    this.clear = this.clear_expanded.bind(this);
  }

  // Set the expanded modal to be a specific object
  flip_expanded(experience){
    this.setState({expanded: experience});
  }

  // Clear the expanded object to return for another selection
  clear_expanded(){
    this.setState({expanded: false});
  }

  render_skill(skill, index){
    return (<p key={index}>{skill}</p>)
  }

  // Render a modal for the professional experience if one has been selected
  render_expanded(){
    let expanded = this.state.expanded;
    if (!expanded){
      return;
    }
    return (
      <div className="container modal animated fadeIn is-active">
        <div className="modal-background" onClick={this.clear}></div>

        <div className="modal-card mc-0 wide">
          <header className="modal-card-head">
            <p className="modal-card-title">{expanded.corp} - {expanded.position}</p>
            <button className="delete" aria-label="close" onClick={this.clear}></button>
          </header>

          <section className="modal-card-body">
            <div className="columns">
              <div className="column is-two-thirds">
                <figure className="image is-16x9 centered">
                  <img src={expanded.image_path} alt={expanded.corp}/>
                </figure>
                <br/>
                <p className="is-size-3">Description</p>
                <p className="is-size-6">{expanded.description}</p>
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
                {expanded.skills.map((skill, index) => this.render_skill(skill, index))}
              </div>
            </div>
          </section>

          <footer className="modal-card-foot">
          </footer>
        </div>

      </div>
    );
  }

/*
  Pass the project to be rendered to another component to handle the project
  object itself.
*/
  render_experience(experience){
    return (<ExperienceCard experience={experience} key={experience.dates} handler={this.handler}/>);
  }

  // Render the professional experience rows and modal, if necessary
  render(){
    let col_class = 'columns';
    if (this.state.expanded){
      col_class = 'columns semi-opaque';
    }
    return (
      <div className="container">

        <h2 className="animated title is-1 fadeInUp is-spaced is-snow-white">
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
    );
  }
}

export default Experience;
