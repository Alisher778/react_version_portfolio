import React, {Component} from 'react';
import '../../styles/contact.css';
import contactImage from './contact2.jpg';

export default class Contact extends Component {
  render() {
    return(
        <div id="contact">
          <div id="overlay">
            <img src={contactImage} alt="conatct page background" />
          </div>
          <div className="link">
            <a href="https://www.linkedin.com/in/alisher-musurmonov/"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
          </div>
          <div className="link">
            <a href="mailto:alisher.musurmonov89@gmail.com"><i className="fa fa-envelope-o" aria-hidden="true"></i></a>
          </div>
          <div className="link">
            <a href="https://github.com/Alisher778"><i className="fa fa-github" aria-hidden="true"></i></a>
          </div>
        </div>
      )
  }
}