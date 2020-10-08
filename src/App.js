import React, { Component } from 'react';
import './App.css';
import './Bulma.sass'
import { starsConfig } from "./data/particlesConfig.js"
import Particles from 'react-particles-js';
import Card from './components/Card'

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
      backgroundPosition: "center center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      overflow: "hidden", 
      //width: "100%", 
      //height: "100%"      
    }
    return (
      <div>
        <section className="hero is-fullheight" style={bgStyles}> 
          <Particles params={starsConfig} style={particlesStyles}/>}      
          
          <div className="hero-body">          
            <Card/>
          </div>
        </section> 
      </div> 
    );
  }
}

export default App;
