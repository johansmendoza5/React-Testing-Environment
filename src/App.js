import React from 'react';
import './App.css';
import MidiPlayerComponent from './Components/miditest';
import CloudTest from './Components/CloudTest';
import dotenv from 'dotenv';

dotenv.config();

          
const App = () => {
dotenv.config();

  return (
    <div>
      <MidiPlayerComponent /><br />
      <CloudTest />
    </div>
  );
};
export default App;
