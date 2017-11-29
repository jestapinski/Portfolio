/*
  Jordan Stapinski (jstapins)
  Personal Portfolio
  Projects.js

  Renders the body if the "Projects" tab is selected.

  Defines the projects to be displayed and renders each one as a
  Project Card Component.
*/

import React from 'react';
import ProjectCard from './Project_Card.js';
import './App.css';

class Projects extends React.Component {
  constructor(props){
    super(props);

    // Define projects to be in the upper row of projects
    this.upper_projects = [
      { 
        name: "Enigma Unit", 
        short_description: "Deploying hybrid education.",
        image_path: "project_imgs/enigma.png",
        dates: "May 2017 - August 2017",
        description: "The Enigma Unit is an interactive look into the study of cryptography, and is designed to be used by high school students. The unit involves an in- depth but digestible look at several common cryptographic algorithms including: Caesar Shift, Vigenere Cipher, and Enigma Machine. Developed tool with the aid of EdTech experts at MongoDB and CS4ALL.",
        index: 0,
        resources: [
          {name: 'Github Repository', link: 'https://github.com/jestapinski/enigma_unit_csnyc'},
          {name: 'Heroku Hosted Version', link: 'enigma-unit.herokuapp.com'},
          {name: 'Supplemental Blog Article', link: 'https://www.mongodb.com/blog/post/the-mongodb-intern-series-computer-science-for-all'}
        ],
        soft_stack: [
          'Node.JS',
          'Materialize CSS',
          'Heroku',
          'HTML/CSS',
          'jQuery'
        ] 
      },
      { 
        name: "67-495 Course Creation", 
        short_description: "Teaching modern web apps.",
        image_path: "project_imgs/cmuis.png",
        dates: "August 2017 - December 2017",
        description: "Worked with Professor Larry Heimann at Carnegie Mellon University to construct a new Information Systems course around building modern web applications using a Django/React.JS/MongoDB/GraphQL stack. Developed labs and course instructional content.",
        index: 1,
        resources: [],
        soft_stack: [
          'Python/Django',
          'MongoDB',
          'GraphQL',
          'React.JS'
        ] 
      },
      { 
        name: "Oppia Labeling Extension", 
        short_description: "Improving online education.",
        image_path: "project_imgs/Oppia_logo.png",
        dates: "February 2017 - August 2017",
        description: "Interacted with the Blue Sky Fund, a nonprofit in Richmond, VA, to implement new features into Oppia, an open-source educational framework. Worked with open-source community to build new methods of providing quizzing content to students in Angular.JS.",
        index: 2,
        resources: [
          {name: 'Github Repository', link: 'https://github.com/oppia'},
          {name: 'Hosted Website', link: 'https://blueskyoppia.appspot.com'}
        ],
        soft_stack: [
          'Angular.JS',
          'Bootstrap CSS',
          'HTML/CSS',
          'Google Cloud Services',
        ]  
      },
      { 
        name: "Touchify iOS App", 
        short_description: "Cross-Platform security.",
        image_path: "project_imgs/TouchifyAppicon.png",
        dates: "October 2016 - December 2016",
        description: "Created an application to authenticate users on a desktop client using the TouchID on an iOS device. Implemented an iOS application to process biometric security and a Node.JS web framework to process authentication requests using Socket.IO.",
        index: 3,
        resources: [
          {name: 'Combined Github Repository', link: 'https://github.com/jestapinski/Touch-ID-Web-Authentication/tree/master/ExpressLab'}
        ],
        soft_stack: [
          'Swift 3',
          'Node.JS',
        ]  
      }
    ];

    // Define projects to be in the lower row of projects
    this.lower_projects = [
      { 
        name: "Mites Occupancy Sensing", 
        short_description: "People sensing without video.",
        image_path: "project_imgs/synth_sensor.jpeg",
        dates: "March 2017 - May 2017",
        description: "Worked with doctoral students at Carnegie Mellon’s Institute for Software Research to construct a means by which occupancy in a room (including binary occupancy and exact numeric occupancy counts) could be generated without the use of video feeds. Worked with the ISR SuperSensor IoT device to pull and analyze raw data to find occupancy information in real-time.",
        index: 4,
        resources: [],
        soft_stack: [
          'Python 3',
          'AWS RDB',
        ] 
      },
      { 
        name: "Radix Sort Exercise", 
        short_description: "Interactive pedagogical content.",
        image_path: "project_imgs/radix_sort.png",
        dates: "October 2015 - December 2015",
        description: "Partnered with Professor David Kosbie at Carnegie Mellon University to implement pedagogical web exercises for introductory computer science students. Performed user testing in order to refine front-end content will building off of a custom javascript API.",
        index: 5,
        resources: [
          {name: 'Github Repository', link: 'https://github.com/jestapinski/RadixSortExercise'}
        ],
        soft_stack: [
          'Custom Javascript Library',
          'HTML/CSS',
        ]  
      },
      { 
        name: "CSNYC Portal", 
        short_description: "Scoping content distribution.",
        image_path: "project_imgs/cstoall_hub.png",
        dates: "July 2017 - August 2017",
        description: "Forged a means of distributing customized, online pedagogical content to New York City public school students. Implemented prototype registration and activity upload pages for portal website for teachers to access CS4ALL online content.",
        index: 6,
        resources: [
          {name: 'Github Repository', link: 'https://github.com/jestapinski/csnyc_portal'}
        ],
        soft_stack: [
          'React.JS',
          'Bulma CSS',
          'MongoDB',
          'MongoDB Stitch',
        ]  
      },
      { 
        name: "BlockTrader iOS App", 
        short_description: "Localized food sharing economy.",
        image_path: "project_imgs/BlocktraderAppicon.png",
        dates: "October 2016 - December 2016",
        description: "Implemented an UberEats clone on iOS devices integrating Stripe API with two custom-built backend servers to create a comprehensive ecommerce mobile application. Worked with mentors from Captial One’s mobile development team to understand use cases and implement user interface and experience improvements through iterating.",
        index: 7,
        resources: [
          {name: 'Github Repository', link: 'https://github.com/jestapinski/FinalBlockTrader442'}
        ],
        soft_stack: [
          'Swift 3',
          'Stripe API',
          'Ruby (for Stripe server)',
          'Heroku'
        ]  
      }
    ];

    // Define the state to be whether a project has been selected to expand or not
    this.state = {
      expanded: false
    };

    // Bind handlers to this class instance
    this.handler = this.flip_expanded.bind(this);
    this.clear = this.clear_expanded.bind(this);
  }

  // Set the expanded modal to be a specific object
  flip_expanded(project){
    this.setState({expanded: project});
  }

  // Clear the expanded object to return for another selection
  clear_expanded(){
    this.setState({expanded: false});
  }

/*
  Pass the project to be rendered to another component to handle the project
  object itself.
*/
  render_project(project){
    return (<ProjectCard project={project} key={project.name} handler={this.handler}/>);
  }

  // Render a resource as a link
  render_resource(resource, index){
    return (<p><a href={resource.link} target="_blank" key={index}>{resource.name}</a></p>);
  }

  // Render a software stack element as a list element
  render_stack(software, index){
    return (<li key={index}>{software}</li>);
  }

  render_expanded(){
    let cname, c_pos;
    let expanded = this.state.expanded;
    if (expanded){
      cname = "container animated fadeIn modal is-active";
      c_pos = "modal-card mc-" + (expanded.index % 4).toString();
    } else {
      return;
    }
    return (
      <div className={cname}>
        <div className="modal-background" onClick={this.clear}></div>

        <div className={c_pos}>
        
          <header className="modal-card-head">
            <p className="modal-card-title">{expanded.name}</p>
            <button className="delete" aria-label="close" onClick={this.clear}></button>
          </header>

          <section className="modal-card-body">
            <div className="columns">

              <div className="column is-one-third">
                <figure className="image is-128x128 centered">
                  <img src={expanded.image_path} alt={expanded.name}/>
                </figure>
                <p className="is-size-4">Resources</p>
                {(expanded.resources.length === 0) ? "No Resources for this Project" : ""}
                {expanded.resources.map((resource, index) => this.render_resource(resource, index))}
              </div>

              <div className="column">
                <p className="is-size-3">{expanded.name}</p>
                <p><i>{expanded.short_description}</i></p>
                <p><i>{expanded.dates}</i></p>
                <br/>
                <p className="is-size-4">Description</p>
                <p>{expanded.description}</p>
                <br/>
                <p className="is-size-4">Software Stack</p>
                <ol>
                  {expanded.soft_stack.map((soft, index) => this.render_stack(soft, index))}
                </ol>
              </div>

            </div>
          </section>
          <footer className="modal-card-foot">
          </footer>
        </div>

      </div>
    )
  }

  // Renders the projects main body, with a title and two rows of projects.
  render(){
    // If there is a modal being shown, opaque out the cards for emphasis
    let col_class = 'columns';
    if (this.state.expanded){
      col_class = 'columns semi-opaque';
    }
    return (
      <div className="container">
        <h2 className="animated title is-1 fadeInUp is-spaced is-deep-yellow">
            Significant Projects
        </h2>
        <div className={col_class}>
          {this.upper_projects.map(project => this.render_project(project))}
        </div>
        <br/>
        <div className={col_class}>
          {this.lower_projects.map(project => this.render_project(project))}
        </div>
        {this.render_expanded()}
      </div>
    );
  }
}

export default Projects;
