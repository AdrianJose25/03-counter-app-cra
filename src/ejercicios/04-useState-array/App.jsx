import React, { useState } from "react";

export const App = () => {
  const initialstate = [1, 2, 3];
  const otherArr = ["A", "B", "C"];
  const [arr, setArr] = useState(initialstate);
  const change = () => {
    setArr((prevState) => [prevState, otherArr]);
  };
  const change2 = () => {
    setArr([...arr.slice(0, arr.length - 1)]);
  };
  return (
    <div className="container">
      <div className="card">
        <p>{arr}</p>

        <div>
          <button className="add" onClick={change}>
            Add
          </button>
          <button className="del" onClick={change2}>
            Del
          </button>
        </div>
      </div>
    </div>
  );
};
