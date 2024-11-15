// src/context/EndorsementsContext.js
import React, { createContext, useReducer, useContext } from 'react';

const EndorsementsContext = createContext();

const endorsementsReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ENDORSEMENT':
      return [...state, action.payload];
    case 'REMOVE_ENDORSEMENT':
      return state.filter(id => id !== action.payload);
    default:
      return state;
  }
};

export const EndorsementsProvider = ({ children }) => {
  const [endorsed, dispatch] = useReducer(endorsementsReducer, []);

  const addEndorsement = (id) => dispatch({ type: 'ADD_ENDORSEMENT', payload: id });
  const removeEndorsement = (id) => dispatch({ type: 'REMOVE_ENDORSEMENT', payload: id });

  return (
    <EndorsementsContext.Provider value={{ endorsed, addEndorsement, removeEndorsement }}>
      {children}
    </EndorsementsContext.Provider>
  );
};

export const useEndorsements = () => useContext(EndorsementsContext);
