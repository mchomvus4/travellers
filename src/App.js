import React from 'react';
import './App.css';
import NavBar from './Components/Navigation/NavBar';
import Dest from './Components/Destination/Dest';
import Team from './Components/Team/Team';
import Activity from './Components/Activities/Activity';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Dest />
      <Team />
      <Activity/>
    </div>
  );
}

export default App;
