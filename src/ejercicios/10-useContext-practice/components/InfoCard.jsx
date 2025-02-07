import React, { useContext } from "react";
import { counterContext } from "../context/counterContext";

export const InfoCard = () => {
  const { counter } = useContext(counterContext);
  return <div>{counter}</div>;
};
