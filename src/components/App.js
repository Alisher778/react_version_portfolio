import React, { Component } from 'react';
import Navbar from './Navbar';
import Home from './pages/Home';
import Footer from './Footer';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';


export default class App extends Component {
  render() {
    return (
       <div>
        <Navbar />
        <Home/>
        <About/>
        <Projects/>
        <Skills />
        <Contact />
        <Footer />
       </div> 
    )
  } 
}