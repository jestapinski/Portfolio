/*
  Jordan Stapinski (jstapins)
  Personal Portfolio
  DepartmentExpanded.js

  Renders an individual department expanded modal.
*/

import React from 'react';
import './App.css';

class DepartmentExpanded extends React.Component {

  // Renders an individual course as a table row
  render_course(course, index){
    return (
      <tr key={index}>
        <th>{course.num}</th>
        <td>{this.props.sems[course.sem].name}</td>
        <td>{course.title}</td>
      </tr>
    );
  }

  // Render the table of courses to be shown in the modal
  render_table(){
    let headers = Object.keys(this.props.courses[0]);
    headers.splice(2, 1); //Get rid of 'Department'
    return (
      <table className="table is-striped">
        <thead>
          <tr>
            <th>Course Number</th>
            <th>Semester</th>
            <th>Course Title</th>
          </tr>
        </thead>
        <tfoot></tfoot>
        <tbody>
          {this.props.courses.map((course, index) => (this.render_course(course, index)))}
        </tbody>
      </table>
    )
  }

/*
  Renders the department modal.
*/
  render(){
    let expanded = this.props.expanded;
    return (
      <div className="container modal animated fadeIn is-active">
        <div className="modal-background" onClick={this.props.clear}></div>

        <div className="modal-card wide tall">
          <header className="modal-card-head">
            <p className="modal-card-title">{expanded.name}</p>
            <button className="delete" aria-label="close" onClick={this.props.clear}></button>
          </header>

          <section className="modal-card-body">
            <div className="columns">
              <div className="column is-one-third">
                <figure className="image is-square centered">
                  <img src={expanded.image_path} alt={expanded.abbrev}/>
                </figure>
              </div>
              <div className="column">
                <p className="is-size-3">{expanded.name}</p>
                <p><i>{expanded.abbrev} - {expanded.description}</i></p>
                <br/>
                {this.render_table()}
              </div>
            </div>
          </section>
          
          <footer className="modal-card-foot">
          </footer>
        </div>

      </div>
    )
  }
}

export default DepartmentExpanded;
