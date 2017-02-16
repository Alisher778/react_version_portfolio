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
          <li><Link to="/">HOME</Link></li>
          <li><Link to="about">ABOUT</Link></li>
          <li><Link to="">PROJECTS</Link></li>
          <li><Link to="">SKILLS</Link></li>
          <li><Link to="">CONTACT</Link></li>
          {this.props.children}
        </ul>
      </nav> 
    )
  }
}

export default Navbar;