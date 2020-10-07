import React, { Component } from 'react';
import './App.css';
import './Bulma.sass'
import { starsConfig } from "./data/particlesConfig.js"
import Particles from 'react-particles-js';

class App extends Component {
  render() {
    const particlesStyles = {
      position:"absolute",
      left:"0",
      top:"0",
      width:"100%",
      height:"100%"
    }
    const bgStyles = {
      backgroundColor: "black", 
      width: "100%", 
      height: "100%"      
    }
    return (
      <div style={bgStyles}>
        <Particles params={starsConfig} style={particlesStyles}/>
      </div>
    );
  }
}

export default App;
