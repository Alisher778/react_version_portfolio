import React, { Component } from 'react';
import avatar from './avatar.jpg';
import '../../styles/about.css';

export default class About extends Component {
  render() {
    return(
    <div id="about">
    <link href="https://fonts.googleapis.com/css?family=Roboto+Mono|Rubik" rel="stylesheet" />
      <div className="photo">
        <img src={avatar} alt="avatar"/>
      </div>
      <div className="info">
        <h1>ABOUT ME</h1>
        <div id="devider"></div>
        <div id="text">
          <p>
          Hi, My name is <b>Alisher Musurmonov</b> and I am a <b>full-stack web-developer</b> based in Brooklyn, New York.
          I love creating amazing web applications using best practice <b>in</b> the web development <b>industry</b>.
        </p>
        <p>
          I am coding and creating web applications professionally for 2 years. I graduated from <a href="www.nycda.com">NYCDA</a> coding bootcamp. I am <b>reliable</b>, trustworthy, professional, <b>creative</b> and love what I do. 
        </p>
        <div className="hobby">
          <h1>HOBBIES & INTERESTS</h1>
          <div className="hobby-wrapper">
            <div className="hobby-items">
              <i className="fa fa-gamepad" aria-hidden="true"></i>
              <span> Games</span>
            </div>

            <div className="hobby-items">
              <i className="fa fa-cutlery" aria-hidden="true"></i>
              <span>Cooking</span>
            </div>

            <div className="hobby-items">
              <i className="fa fa-code" aria-hidden="true"></i>
              <span>Coding</span>
            </div>

            <div className="hobby-items">
              <i className="fa fa-music" aria-hidden="true"></i>
              <span>Music</span>
            </div>

            <div className="hobby-items">
              <i className="fa fa-film" aria-hidden="true"></i>
              <span>Movies</span>
            </div>

            <div className="hobby-items">
              <i className="fa fa-futbol-o" aria-hidden="true"></i>
              <span>Football</span>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    )
  }
}