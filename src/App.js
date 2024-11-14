// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import MyBallot from './components/MyBallot';
import Endorsements from './components/Endorsements';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ballot" element={<MyBallot />} />
        <Route path="/endorsements" element={<Endorsements />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
