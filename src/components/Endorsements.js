// src/components/Endorsements.js
import React, { useContext } from 'react';

const Endorsements = () => {
  const endorsedCandidates = [
    { id: 1, name: 'Candidate A', party: 'Party Democrat' },
  ];

  return (
    <main>
      <h2>Your Endorsements</h2>
      <ul>
        {endorsedCandidates.map(candidate => (
          <li key={candidate.id}>
            <p>{candidate.name} - {candidate.party}</p>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Endorsements;
