import React, { Component } from 'react';
import Navbar from './Navbar';
import Home from './pages/Home';
import Footer from './Footer';
import About from './pages/About';


export default class App extends Component {
  render() {
    return (
       <div>
        <Navbar />
        <Home/>
        <About />
        <Footer />
       </div> 
    )
  } 
}