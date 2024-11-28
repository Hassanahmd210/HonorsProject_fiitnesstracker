import React, { createContext, useState, useContext } from 'react';

// Create context
const ChallengeContext = createContext();

// Provider component
export const ChallengeProvider = ({ children }) => {
  const [challenges, setChallenges] = useState([]);  // State to store created challenges

  const addChallenge = (challenge) => {
    setChallenges((prevChallenges) => [...prevChallenges, challenge]);
  };

  return (
    <ChallengeContext.Provider value={{ challenges, addChallenge }}>
      {children}
    </ChallengeContext.Provider>
  );
};

// Custom hook to use challenge context
export const useChallenges = () => useContext(ChallengeContext);
