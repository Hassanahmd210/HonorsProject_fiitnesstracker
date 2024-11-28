import React, { createContext, useState } from "react";

const FitnessItems = createContext();

const FitnessContext = ({ children }) => {
  const [completed, setCompleted] = useState([]);
  const [workout, setWorkout] = useState(0);
  const [calories, setCalories] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [caloriesGoal, setCaloriesGoal] = useState(0);
  return (
    <FitnessItems.Provider
      value={{
        completed,
        setCompleted,
        workout,
        setWorkout,
        calories,
        setCalories,
        minutes,
        setMinutes,
        caloriesGoal,
        setCaloriesGoal
      }}
    >
      {children}
    </FitnessItems.Provider>
  );
};

export { FitnessContext, FitnessItems }