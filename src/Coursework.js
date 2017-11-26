/*
  Jordan Stapinski (jstapins)
  CMU PUI A6 - Project Portfolio
  Coursework.js

  Renders the list of courses taken to the user.
*/

import React, { Component } from 'react';
import logo from './logo.svg';
import Department_Card from './Department_Card.js'
import Semester_Card from './Semester_Card.js'
import './App.css';

class Coursework extends React.Component {

  constructor(props){
    super(props);
    this.courses = [
      {num: "15-110", dept: "CS",  sem: "F14", title: "Principles of Computing"},
      {num: "33-106", dept: "PHY", sem: "F14", title: "Physics I for Engineering Students"},
      {num: "36-201", dept: "STA", sem: "F14", title: "Statistical Reasoning and Practice"},
      {num: "76-101", dept: "ENG", sem: "F14", title: "Interpretation and Argument"},
      {num: "85-211", dept: "PSY", sem: "F14", title: "Cognitive Psychology"},
      {num: "15-112", dept: "CS",  sem: "S15", title: "Fundamentals of Programming and Computer Science"},
      {num: "51-262", dept: "DES", sem: "S15", title: "Communication Design Fundamentals"},
      {num: "79-104", dept: "HIS", sem: "S15", title: "Global Histories"},
      {num: "67-250", dept: "IS",  sem: "S15", title: "Information Systems Milieux"},
      {num: "88-118", dept: "SDS", sem: "S15", title: "Social Simulation"},
      {num: "15-122", dept: "CS",  sem: "F15", title: "Principles of Imperitive Computation"},
      {num: "15-539", dept: "CS",  sem: "F15", title: "Independent Study in Computer Science Pedagogy"},
      {num: "21-127", dept: "MAT", sem: "F15", title: "Concepts of Mathematics"},
      {num: "57-173", dept: "MUS", sem: "F15", title: "Survey of Western Music History"},
      {num: "67-262", dept: "IS",  sem: "F15", title: "Database Design and Development"},
      {num: "15-150", dept: "CS",  sem: "S16", title: "Principles of Functional Programming"},
      {num: "15-251", dept: "CS",  sem: "S16", title: "Great Theoretical Ideas in Computer Science"},
      {num: "36-202", dept: "STA", sem: "S16", title: "Stastical Methods"},
      {num: "67-272", dept: "IS",  sem: "S16", title: "Application Design and Development"},
      {num: "15-210", dept: "CS",  sem: "F16", title: "Parallel and Sequential Data Structures and Algorithms"},
      {num: "15-322", dept: "CS",  sem: "F16", title: "Introduction to Computer Music"},
      {num: "15-421", dept: "CS",  sem: "F16", title: "Information Security and Privacy"},
      {num: "67-442", dept: "IS",  sem: "F16", title: "Mobile Application Development in iOS"},
      {num: "05-650", dept: "HCI", sem: "S17", title: "Interaction Design Studio II"},
      {num: "08-421", dept: "ISR", sem: "S17", title: "Building User-Focused Sensing Systems"},
      {num: "15-213", dept: "CS",  sem: "S17", title: "Introduction to Computer Systems"},
      {num: "67-373", dept: "IS",  sem: "S17", title: "Software Development Project"},
      {num: "05-410", dept: "HCI", sem: "F17", title: "User-Centered Research and Evaluation"},
      {num: "05-430", dept: "HCI", sem: "F17", title: "Programming Usable Interfaces"},
      {num: "67-276", dept: "IS",  sem: "F17", title: "Building Better Web Apps"},
      {num: "67-344", dept: "IS",  sem: "F17", title: "Organizational Intelligence in the Information Age"},
      {num: "67-495", dept: "IS",  sem: "F17", title: "Advanced Projects in Information Systems"},
      {num: "05-571", dept: "HCI", sem: "S18", title: "Undergraduate Project in Human-Computer Interaction"},
      {num: "67-364", dept: "IS",  sem: "S18", title: "Practical Data Science"},
      {num: "79-213", dept: "HIS", sem: "S18", title: "The American Railroad"},
      {num: "80-180", dept: "PHI", sem: "S18", title: "The Nature of Language"},
    ];

    this.departments = [
      {abbrev: 'CS',  name: 'Computer Science', description: 'CMU 15-XXX'},
      {abbrev: 'PHY', name: 'Physics', description: 'CMU 33-XXX'},
      {abbrev: 'STA', name: 'Statistics', description: 'CMU 36-XXX'},
      {abbrev: 'ENG', name: 'English', description: 'CMU 76-XXX'},
      {abbrev: 'PSY', name: 'Psychology', description: 'CMU 85-XXX'},
      {abbrev: 'DES', name: 'Design', description: 'CMU 51-XXX'},
      {abbrev: 'HIS', name: 'History', description: 'CMU 79-XXX'},
      {abbrev: 'IS', name: 'Information Systems', description: 'CMU 67-XXX'},
      {abbrev: 'SDS', name: 'Social and Decision Science', description: 'CMU 88-XXX'},
      {abbrev: 'MAT', name: 'Mathematical Sciences', description: 'CMU 21-XXX'},
      {abbrev: 'MUS', name: 'Music', description: 'CMU 57-XXX'},
      {abbrev: 'HCI', name: 'Human-Computer Interaction', description: 'CMU 05-XXX'},
      {abbrev: 'ISR', name: 'Institute for Software Research', description: 'CMU 08-XXX'},
      {abbrev: 'PHI', name: 'Philosophy', description: 'CMU 80-XXX'},
    ];

    this.semesters = [
      {abbrev: "F14", name: "Fall 2014", image_path: "sem_imgs/F14.png"},
      {abbrev: "S15", name: "Spring 2015", image_path: "sem_imgs/S15.png"},
      {abbrev: "F15", name: "Fall 2015", image_path: "sem_imgs/F15.png"},
      {abbrev: "S16", name: "Spring 2016", image_path: "sem_imgs/S16.png"},
      {abbrev: "F16", name: "Fall 2016", image_path: "sem_imgs/F14.png"},
      {abbrev: "S17", name: "Spring 2017", image_path: "sem_imgs/F14.png"},
      {abbrev: "F17", name: "Fall 2017", image_path: "sem_imgs/F14.png"},
      {abbrev: "S18", name: "Spring 2018", image_path: "sem_imgs/F14.png"},
    ]

    this.display_courses = {};

    this.state = {
      sorted: 'department',
      expanded: false
    };

    this.display_courses = this.group_courses();

    this.toggle_sorted = this.handle_change.bind(this);
    this.handler = this.flip_expanded.bind(this);
    this.clear = this.clear_expanded.bind(this);
  }

  flip_expanded(category){
    this.setState({expanded: category});
  }

  clear_expanded(){
    this.setState({expanded: false});
  }

  reduce_courses(prop){
    return this.courses.reduce(function(groups, item) {
          var val = item[prop];
          groups[val] = groups[val] || [];
          groups[val].push(item);
          return groups;
        }, {});
  }

  group_courses(){
    // Case on sorted state (department, semester)
    switch (this.state.sorted){
      case 'department':
        this.display_courses = this.reduce_courses('dept');
        console.log(this.display_courses);
        return;
      case 'semester':
        this.display_courses = this.reduce_courses('sem');
        console.log(this.display_courses);
        return;
      default:
        return;
    }
  }

  render_department_card(dept){
    // If the sort is by department, render department cards
    return (<Department_Card department={dept} key={dept.name} handler={this.handler} />)
  }

  render_semester_card(sem){
    // If the sort is by semester, render semester cards
    return (<Semester_Card semester={sem} key={sem.abbrev} handler={this.handler} />)
  }  

  render_table(){
    return (
      <table className="table is-striped">
        <thead>
          <tr>
            <th><abbr title="Position">Pos</abbr></th>
            <th>Team</th>
            <th><abbr title="Played">Pld</abbr></th>
            <th><abbr title="Won">W</abbr></th>
            <th><abbr title="Drawn">D</abbr></th>
            <th><abbr title="Lost">L</abbr></th>
            <th><abbr title="Goals for">GF</abbr></th>
            <th><abbr title="Goals against">GA</abbr></th>
            <th><abbr title="Goal difference">GD</abbr></th>
            <th><abbr title="Points">Pts</abbr></th>
            <th>Qualification or relegation</th>
          </tr>
        </thead>
        <tfoot>
        </tfoot>
        <tbody>
          <tr>
            <th>1</th>
            <td><a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">Leicester City</a> <strong>(C)</strong>
            </td>
            <td>38</td>
            <td>23</td>
            <td>12</td>
            <td>3</td>
            <td>68</td>
            <td>36</td>
            <td>+32</td>
            <td>81</td>
            <td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a></td>
          </tr>
          <tr>
            <th>1</th>
            <td><a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">Leicester City</a> <strong>(C)</strong>
            </td>
            <td>38</td>
            <td>23</td>
            <td>12</td>
            <td>3</td>
            <td>68</td>
            <td>36</td>
            <td>+32</td>
            <td>81</td>
            <td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a></td>
          </tr>
        </tbody>
      </table>
    )
  }

  handle_change(event) {
    this.setState({sorted: event.target.value.toLowerCase()});
    this.group_courses();
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
            <p className="modal-card-title">{expanded.name}</p>
            <button className="delete" aria-label="close" onClick={this.clear}></button>
          </header>
          <section className="modal-card-body">
            <div className="columns">
              <div className="column is-two-thirds">
                <figure className="image is-4x3 centered">
                </figure>
              </div>
              <div className="column">
                <p className="is-size-3">{expanded.name}</p>
                <p><i>{expanded.abbrev}</i></p>
                <p><i>{expanded.description}</i></p>
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

  render(){
    let col_class = 'columns';
    if (this.state.expanded){
      col_class = 'columns semi-opaque';
    }
    this.group_courses();
    if (this.state.sorted === 'department'){
      return (
        <div className="container">
          <h2 className="animated title is-1 fadeInUp is-spaced is-deep-yellow">
              Coursework
          </h2>
          <label className="label is-size-5">Group By:</label>
          <div className="select">
            <select onChange={this.toggle_sorted}>
              <option>Department</option>
              <option>Semester</option>
            </select>
          </div>
          <div className={col_class}>
            {this.departments.slice(0, 4).map(dept => this.render_department_card(dept))}
          </div>
          <br/>
          <div className={col_class}>
            {this.departments.slice(4, 8).map(dept => this.render_department_card(dept))}
          </div>
          <br/>
          <div className={col_class}>
            {this.departments.slice(8, 12).map(dept => this.render_department_card(dept))}
          </div>
          <br/>
          <div className={col_class}>
            {this.departments.slice(12, 16).map(dept => this.render_department_card(dept))}
          </div>
          {this.render_expanded()}
        </div>
      );
    }
      return (
        <div className="container">
          <h2 className="animated title is-1 fadeInUp is-spaced is-deep-yellow">
              Coursework
          </h2>
          <label className="label is-size-5">Group By:</label>
          <div className="select">
            <select onChange={this.toggle_sorted}>
              <option>Department</option>
              <option>Semester</option>
            </select>
          </div>
          <div className={col_class}>
            {this.semesters.slice(0, 4).map(sem => this.render_semester_card(sem))}
          </div>
          <br/>
          <div className={col_class}>
            {this.semesters.slice(4, 8).map(sem => this.render_semester_card(sem))}
          </div>
          {this.render_expanded()}
        </div>
      )
  }
}

export default Coursework;
