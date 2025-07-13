import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Nav from './components/Nav';
import Landing from './components/Landing';

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
    </div>
  );
}

export default App;
