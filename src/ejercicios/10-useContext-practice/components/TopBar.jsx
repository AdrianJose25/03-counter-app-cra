import React, { useContext } from "react";
import { counterContext } from "../context/counterContext";

export const TopBar = () => {
  const { reset } = useContext(counterContext);
  return (
    <div>
      <h4 style={{ textAlign: "center" }}>TopBar</h4>
      <button className="reset" onClick={() => reset()}>
        Reset
      </button>
    </div>
  );
};
