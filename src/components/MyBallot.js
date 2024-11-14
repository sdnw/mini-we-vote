// src/components/MyBallot.js
import React, { useState } from 'react';

const mockCandidates = [
  { id: 1, name: 'Candidate A', party: 'Party Democrat' },
  { id: 2, name: 'Candidate B', party: 'Party Republican' },
];

const MyBallot = () => {
  const [endorsed, setEndorsed] = useState([]);

  const handleEndorse = (id) => {
    if (!endorsed.includes(id)) {
      setEndorsed([...endorsed, id]);
    }
  };

  return (
    <main>
      <h2>My Ballot</h2>
      <ul>
        {mockCandidates.map(candidate => (
          <li key={candidate.id}>
            <p>{candidate.name} - {candidate.party}</p>
            <button onClick={() => handleEndorse(candidate.id)}>
              {endorsed.includes(candidate.id) ? 'Endorsed' : 'Endorse'}
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default MyBallot;
