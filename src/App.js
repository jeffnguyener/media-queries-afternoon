import React from 'react';
import './App.css';
import Portfolio from './Components/Portfolio';
import Services from './Components/Services';
import About from './Components/About';
import Team from './Components/Team';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Services />
      <Portfolio />
      <About />
      <Team />
      <Contact />
    </div>
  );
}

export default App;
