import React from 'react';
import './App.css';
import NavBar from './Components/Navigation/NavBar';
import Dest from './Components/Destination/Dest';
import Team from './Components/Team/Team';
import Activity from './Components/Activities/Activity';
import Testimonial from './Components/Testimonial/Testimonial';
import Contact from './Components/Contacts/Contact';
import Feedback from './Components/Feedback/Feedback';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Dest />
      <Team />
      <Activity />
      <Testimonial />
      <Contact />
      <Feedback />
      <Footer />
    
    </div>
  );
}

export default App;
