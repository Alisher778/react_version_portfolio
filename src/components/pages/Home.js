import React, {Component} from 'react';
import '../../styles/navbar.css';

import '../../styles/home.css';

class Home extends Component{
  render() {
    return(
      <div id="home-page">
        <link href="https://fonts.googleapis.com/css?family=Roboto:900" rel="stylesheet" />
        <div id="intro">Alisher Musurmonov</div>
        <p>Hi, I am a creative Full-stack Web Developer</p>
        <i className="fa fa-angle-double-down animated bounce infinite" aria-hidden="true"></i>
      </div>
    )
  }
}

export default Home;