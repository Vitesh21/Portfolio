import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
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
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/skills' element={<Skills />} />

        <Route path='/contact' element={<Contact />} />
      </Routes>
      <ThemeToggle />
      <Footer />
    </div>
  );
}

export default App;
