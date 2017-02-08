import React, { Component } from 'react';
import '../styles/navbar.css';

class Navbar extends Component {
  render() {
    return(
      <nav>
        <ul>
          <li id="logo"><a href="#"><h1>Ali</h1></a></li>
        </ul>
        
        <i className="fa fa-bars" aria-hidden="true" id="menu-bar"></i>
        
        <ul className="nav-list">
          <li><a href="">HOME</a></li>
          <li><a href="">ABOUT</a></li>
          <li><a href="">PROJECTS</a></li>
          <li><a href="">SKILLS</a></li>
          <li><a href="">CONTACT</a></li>
        </ul>
      </nav> 
    )
  }
}

export default Navbar;