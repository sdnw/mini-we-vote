// src/components/Endorsements.js
import React, { useState, useEffect } from 'react';
import { useEndorsements } from '../context/EndorsementsContext';

const Endorsements = () => {
  const { endorsed } = useEndorsements();
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    import('../data/candidates.json').then(data => setCandidates(data.default));
  }, []);

  const endorsedCandidates = candidates.filter(candidate => endorsed.includes(candidate.id));

  return (
    <main>
      <h2>Your Endorsements</h2>
      {endorsedCandidates.length > 0 ? (
        <ul>
          {endorsedCandidates.map(candidate => (
            <li key={candidate.id}>
              <p>{candidate.name} - {candidate.party}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>You have not endorsed any candidates yet.</p>
      )}
    </main>
  );
};

export default Endorsements;
