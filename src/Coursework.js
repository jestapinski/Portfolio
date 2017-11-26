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
import DepartmentExpanded from './DepartmentExpanded.js'
import SemesterExpanded from './SemesterExpanded.js'
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
      {abbrev: 'CS',  name: 'Computer Science', description: 'CMU 15-XXX', image_path: "dept_imgs/CS.png"},
      {abbrev: 'IS', name: 'Information Systems', description: 'CMU 67-XXX', image_path: "dept_imgs/IS.png"},
      {abbrev: 'HCI', name: 'Human-Computer Interaction', description: 'CMU 05-XXX', image_path: "dept_imgs/HCI.png"},
      {abbrev: 'STA', name: 'Statistics', description: 'CMU 36-XXX', image_path: "dept_imgs/STA.png"},
      {abbrev: 'ISR', name: 'Institute for Software Research', description: 'CMU 08-XXX', image_path: "dept_imgs/ISR.png"},
      {abbrev: 'PHY', name: 'Physics', description: 'CMU 33-XXX', image_path: "dept_imgs/PHY.png"},
      {abbrev: 'MAT', name: 'Mathematical Sciences', description: 'CMU 21-XXX', image_path: "dept_imgs/MAT.png"},
      {abbrev: 'PSY', name: 'Psychology', description: 'CMU 85-XXX', image_path: "dept_imgs/PSY.png"},
      {abbrev: 'DES', name: 'Design', description: 'CMU 51-XXX', image_path: "dept_imgs/DES.png"},
      {abbrev: 'HIS', name: 'History', description: 'CMU 79-XXX', image_path: "dept_imgs/HIS.png"},
      {abbrev: 'SDS', name: 'Social and Decision Sciences', description: 'CMU 88-XXX', image_path: "dept_imgs/SDS.png"},
      {abbrev: 'ENG', name: 'English', description: 'CMU 76-XXX', image_path: "dept_imgs/ENG.png"},
      {abbrev: 'MUS', name: 'Music', description: 'CMU 57-XXX', image_path: "dept_imgs/MUS.png"},
      {abbrev: 'PHI', name: 'Philosophy', description: 'CMU 80-XXX', image_path: "dept_imgs/PHI.png"},
    ];

    this.mapped_departments = {};
    for (var i=0; i<this.departments.length; i++) {
      this.mapped_departments[this.departments[i].abbrev] = {name: this.departments[i].name, description: this.departments[i].description};
    }

    this.semesters = [
      {abbrev: "F14", name: "Fall 2014", image_path: "sem_imgs/F14.png"},
      {abbrev: "S15", name: "Spring 2015", image_path: "sem_imgs/S15.png"},
      {abbrev: "F15", name: "Fall 2015", image_path: "sem_imgs/F15.png"},
      {abbrev: "S16", name: "Spring 2016", image_path: "sem_imgs/S16.png"},
      {abbrev: "F16", name: "Fall 2016", image_path: "sem_imgs/F16.png"},
      {abbrev: "S17", name: "Spring 2017", image_path: "sem_imgs/S17.png"},
      {abbrev: "F17", name: "Fall 2017", image_path: "sem_imgs/F17.png"},
      {abbrev: "S18", name: "Spring 2018", image_path: "sem_imgs/S18.png"},
    ]

    this.display_courses = {};

    this.mapped_semesters = {};
    for (var k = 0; k < this.semesters.length; k++){
      this.mapped_semesters[this.semesters[k].abbrev] = {name: this.semesters[k].name, description: this.semesters[k].description};
    }

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
    return (<Department_Card department={dept} key={dept.name} handler={this.handler} courses={this.display_courses[dept['abbrev']]} />)
  }

  render_semester_card(sem){
    // If the sort is by semester, render semester cards
    return (<Semester_Card semester={sem} key={sem.abbrev} handler={this.handler} courses={this.display_courses[sem['abbrev']]} />)
  }  

  handle_change(event) {
    this.setState({sorted: event.target.value.toLowerCase()});
    this.group_courses();
  }

  render_expanded(){
    if (this.state.expanded){
      switch (this.state.sorted){
        case 'department':
          return (<DepartmentExpanded expanded={this.state.expanded} clear={this.clear} courses={this.display_courses[this.state.expanded['abbrev']]} sems={this.mapped_semesters} />);
        case 'semester':
          return (<SemesterExpanded expanded={this.state.expanded} clear={this.clear} courses={this.display_courses[this.state.expanded['abbrev']]} depts={this.mapped_departments} />);
        default:
          return;
      }      
    }
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
            {this.departments.slice(4, 9).map(dept => this.render_department_card(dept))}
          </div>
          <br/>
          <div className={col_class}>
            {this.departments.slice(9, 15).map(dept => this.render_department_card(dept))}
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
