import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import classnames from 'classnames'

class Body extends React.Component {
  render(){
    return (
      <div className="hero-body bg-img">
        <div class="container has-text-centered">
        <h1 className="animated title is-1 fadeInUp is-spaced is-deep-yellow" style={{textAlign: "center"}}>
              I Live to Make an Impact.
            </h1>
          <p className="animated subtitle fadeInUp is-5">The unfortunate truth is <span className="title is-5">over 1.1 million students in New York City do not have adequate access to computer science education</span>. <br/> What if, through a community of teachers and developers, that could change? <br/><br/> We have developed a library for teachers, open for developer contributions, which provides immediate access to interactive education ready to transform a classroom experience today. <br/><br/> <span className='title is-5'>Create an account or sign-in to get free access to our library of computer science units, ready for use in the classroom.</span> </p>
        </div>
      </div>)
  }
}

export default Body;
