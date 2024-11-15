// src/components/MyBallot.js
import React, { useState, useEffect } from 'react';
import { useEndorsements } from '../context/EndorsementsContext';

const MyBallot = () => {
  const { endorsed, addEndorsement, removeEndorsement } = useEndorsements();
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    import('../data/candidates.json').then(data => setCandidates(data.default));
  }, []);

  return (
    <main>
      <h2>My Ballot</h2>
      <ul>
        {candidates.map(candidate => (
          <li key={candidate.id}>
            <p>{candidate.name} - {candidate.party}</p>
            <button onClick={() =>
              endorsed.includes(candidate.id)
                ? removeEndorsement(candidate.id)
                : addEndorsement(candidate.id)
            }>
              {endorsed.includes(candidate.id) ? 'Remove Endorsement' : 'Endorse'}
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default MyBallot;
