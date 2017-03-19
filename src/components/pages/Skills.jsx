import React, {Component} from 'react';
import '../../styles/skills.css';

export default class Skills extends Component {
  render() {
    return(
          <div id="skills">
            <h1>My Non-human Languages</h1>            
            <div className="skill-set">
              <li>
                  <i className="fa fa fa-desktop"></i>
                  <hr/>
                <h2>Front-End Expertise</h2>
                <ul className="skills-name">
                  <i className="devicon-react-original-wordmark colored"></i>
                  <i className="devicon-jquery-plain-wordmark colored"></i>
                  <i className="devicon-javascript-plain colored"></i>
                  <i className="devicon-html5-plain-wordmark colored"></i>
                  <i className="devicon-css3-plain-wordmark colored"></i>
                  <i className="devicon-chrome-plain-wordmark colored"></i>
                </ul>
              </li>
              <li>
                <i className="fa fa-code" aria-hidden="true"></i>
                <hr/>
                <h2>Back-End Expertise</h2>
                <ul className="skills-name">
                  <i className="devicon-nodejs-plain colored"></i>
                  <i className="devicon-ruby-plain-wordmark colored"></i>
                  <i className="devicon-postgresql-plain-wordmark colored"></i>
                  <i className="devicon"><img src="https://s3.amazonaws.com/my-web-storage/icons/expressjs.png" alt="express.js-icon" style={{width: '45px'}}/></i>
                </ul>
              </li>
              <li>
                <i className="fa fa-briefcase" aria-hidden="true"></i>
                <hr/>
                <h2>Essential Dev Tool Box</h2>
                <ul className="skills-name">
                  <i className="devicon-git-plain-wordmark colored"></i>
                  <i className="devicon-bootstrap-plain-wordmark colored"></i>
                  <i className="devicon-sass-original colored"></i>
                  <i className="devicon-amazonwebservices-plain-wordmark colored"></i>
                   <i className="devicon-heroku-line-wordmark colored"></i>
                  <i className="devicon-photoshop-plain"></i>
                </ul>
              </li>
            </div>
          </div>

      )
  }
}