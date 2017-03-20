import React, { Component } from 'react';
import { Link } from 'react-router';
import '../styles/navbar.css';

class Navbar extends Component {
  render() {
    return(
      <nav>
        <ul>
          <li id="logo"><Link to="/"><h1>Ali</h1></Link></li>
        </ul>
        
        <i className="fa fa-bars" aria-hidden="true" id="menu-bar"></i>

        <ul className="nav-list">
          <i className="fa fa-times-circle" aria-hidden="true" id="close-btn"></i>
          <li><a href="#home-page" id="homeLink" className="active">HOME</a></li>
          <li><a href="#about" id="aboutLink">ABOUT</a></li>
          <li><a href="#projects" id="projectsLink">PROJECTS</a></li>
          <li><a href="#skills" id="skillsLink">SKILLS</a></li>
          <li><a href="#contact" id="contactLink">CONTACT</a></li>
          {this.props.children}
        </ul>
      </nav> 
    )
  }
}

export default Navbar;