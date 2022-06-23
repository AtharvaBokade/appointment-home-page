import React, { } from 'react'
import "./App.css";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles";
//import ScrollAnimation from "react-animate-on-scroll"
import particleconfig from "./config/partcleconfig";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Typical from 'react-typical'
import logo from './index.png'
//import Animation from './components/about';
//import animation from './components/about';


export default function App() {
  

  return (
    
    <div className="App">
      
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" />
        <Route path="/home" />
        <Route path="/option 2" />
        <Route path="/option 3" />
      </Routes>
    </Router>
    <Particles params={particleconfig}/>
    
    
      <img className='imag' src={logo} alt="a" />
      
     
       
  
    
    
    <h1 className='b'>
      BOOK YOUR
    </h1>
    <h1 className='a'>
      APPOINTMENT
    </h1>
    <div class='button'>
      <button type="button" class="btn">BOOK HERE</button>
    </div>

    
    
    

    </div>
    
  );
}