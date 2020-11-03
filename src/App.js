import React from 'react';
import './App.css';
import NavBar from './Components/Navigation/NavBar';
import Dest from './Components/Destination/Dest';
import Team from './Components/Team/Team';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Dest />
      <Team/>
    </div>
  );
}

export default App;
