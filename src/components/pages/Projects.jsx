import React, {Component} from 'react';
import '../../styles/projects.css';

class Projects extends Component {
  render() {
    return(
        <div className="projects">
          <h1>Projects</h1>
          <ul className="all-projects">
            <li>
              <a href="">
                  <link rel="stylesheet" href="https://cdn.rawgit.com/konpa/devicon/master/devicon.min.css" />

              <img src="https://s3.amazonaws.com/my-web-storage/images/portfolio-rstore-app.jpg" alt=""/>
              
              <div className="project-details">
              <h3>React Store</h3>
                <p>Simple e-commerce web app with unique custom-made, hard-coded features: search,
                 pagination, shopping-cart, admin-accessible and mobile-friendly.</p>
                 <div className="languages">
                    <i className="devicon-react-original-wordmark colored"></i><i className="devicon-nodejs-plain colored"></i>
                    <i className="devicon-amazonwebservices-plain-wordmark colored"></i><i className="devicon-heroku-line-wordmark colored"></i>
                    <i className="devicon-postgresql-plain-wordmark colored"></i><i className="devicon-photoshop-plain"></i>
                    <i className="devicon-jquery-plain-wordmark colored"></i><i className="devicon-javascript-plain colored"></i>
                    <i className="devicon-html5-plain-wordmark colored"></i><i className="devicon-css3-plain-wordmark colored"></i>
                </div>
                 <p><strong>User name:</strong><i> admin@example.com</i>, <br/><strong>Password:</strong><i> password</i></p>
                <a href="https://rstore.herokuapp.com/" className="view-btn">View</a>
              </div>
              </a>
            </li>
            <li>
              <a href="">
              <img src="https://s3.amazonaws.com/my-web-storage/images/portfolio-instagram-app.jpg" alt=""/>
              
              <div className="project-details">
              <h3>Instagram-Clone</h3>
                <p>This is a social media app inspired by Instagram with user authentication, uploading images/videos, leaving comments and user editable features.</p>
                <div className="languages">
                  <i className="devicon-nodejs-plain colored"></i>
                  <i className="devicon-amazonwebservices-plain-wordmark colored"></i><i className="devicon-heroku-line-wordmark colored"></i>
                  <i className="devicon-postgresql-plain-wordmark colored"></i>
                  <i className="devicon-jquery-plain-wordmark colored"></i><i className="devicon-javascript-plain colored"></i>
                  <i className="devicon-html5-plain-wordmark colored"></i><i className="devicon-css3-plain-wordmark colored"></i>
                  <i className="devicon-bootstrap-plain-wordmark colored"></i>

                </div>
                <p><strong>User name:</strong><i> admin@example.com</i>,<br /> <strong>Password:</strong><i> password</i></p>
                <a href="https://instagram-nycda.herokuapp.com/" className="view-btn">View</a>
              </div>
              </a>
            </li>
            <li>
              <a href="">
              <img src="https://s3.amazonaws.com/my-web-storage/images/portfolio-ielts-app.jpg" alt=""/>
              
              <div className="project-details">
              <h3>IELTS-APP</h3>
                <p>Informative website for ESL students where students can sign-up, create topics and leave comments, read news and
                 scientific articles and watch variouse educational videos.</p>
                <div className="languages">
                  <i className="devicon-nodejs-plain colored"></i>
                  <i className="devicon-amazonwebservices-plain-wordmark colored"></i><i className="devicon-heroku-line-wordmark colored"></i>
                  <i className="devicon-postgresql-plain-wordmark colored"></i><i className="devicon-ruby-plain-wordmark colored"></i>
                  <i className="devicon-jquery-plain-wordmark colored"></i><i className="devicon-javascript-plain colored"></i>
                  <i className="devicon-html5-plain-wordmark colored"></i><i className="devicon-css3-plain-wordmark colored"></i>
                  <i className="devicon-bootstrap-plain-wordmark colored"></i>

                </div>
                 <p><strong>User name:</strong> <i>admin@example.com</i>,<br/> <strong>Password:</strong> <i>admin123</i></p>
                <a href="https://ieltsapp.herokuapp.com/" className="view-btn">View</a>
              </div>
              </a>
            </li>
          </ul>
        </div>
      )
  } 
}

export default Projects;