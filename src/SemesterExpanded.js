/*
  Jordan Stapinski (jstapins)
  Personal Portfolio
  SemesterExpanded.js

  Renders an individual semester expanded modal off of the Bulma CSS Card framework.
*/

import React from 'react';
import './App.css';

class SemesterExpanded extends React.Component {
  constructor(props){
    super(props);
    console.log(props);
    // Reassign prop project for quicker access
    this.clear = this.props.clear;
  }

  render_course(course){
    return (
      <tr>
        <th>{course.num}</th>
        <td>{this.props.depts[course.dept].name}</td>
        <td>{course.title}</td>
      </tr>
    )
  }

  render_table(){
    let headers = Object.keys(this.props.courses[0]);
    headers.splice(2, 1);
    return (
      <table className="table is-striped">
        <thead>
          <tr>
            <th>Course Number</th>
            <th>Department</th>
            <th>Course Title</th>
          </tr>
        </thead>
        <tfoot>
        </tfoot>
        <tbody>
          {this.props.courses.map(course => (this.render_course(course)))}
        </tbody>
      </table>
    )
  }

/*
  Renders the semester card.
*/
  render(){
    let expanded = this.props.expanded;
    let cname = "container modal animated fadeIn is-active";
    let c_pos = "modal-card wide";
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
                <figure className="image is-square centered">
                  <img src={expanded.image_path} alt={expanded.abbrev}/>
                </figure>
              </div>
              <div className="column">
                <p className="is-size-3">{expanded.name}</p>
                <p><i>{expanded.abbrev}</i></p>
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

export default SemesterExpanded;
