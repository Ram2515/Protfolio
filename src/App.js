import React from 'react';
import Navbar from './components/navbar/navbar';
import Intro from './components/intro/intro';
import Skills from './components/skill/skill';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
// import './App.css'; // Ensure you have this CSS file if you're using it

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
