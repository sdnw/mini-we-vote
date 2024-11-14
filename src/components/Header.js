// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <h1>We Vote</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/ballot">My Ballot</Link></li>
          <li><Link to="/endorsements">Endorsements</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
