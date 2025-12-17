import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Home from './containers/home';
import About from './containers/about';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Contact from './containers/contact';
import Footer from "./components/footer";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="resume">
        <Resume />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <ThemeToggle />
      <Footer />
    </div>
  );
}

export default App;
