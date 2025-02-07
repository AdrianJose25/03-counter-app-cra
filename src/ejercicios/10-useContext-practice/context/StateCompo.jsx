import React, { useState } from "react";
import { counterContext } from "./counterContext";

export const StateCompo = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };
  const decrement = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };
  const reset = () => {
    setCounter(0);
  };
  return (
    <counterContext.Provider value={{ counter, increment, decrement, reset }}>
      {children}
    </counterContext.Provider>
  );
};
