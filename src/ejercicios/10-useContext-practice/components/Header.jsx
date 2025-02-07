import React, { useContext } from "react";
import { counterContext } from "../context/counterContext";

export const Header = ({ children }) => {
  const { counter, increment } = useContext(counterContext);
  return (
    <div className="header">
      <div className="header-content">
        <div className="topbar">
          <div>{children}</div>
        </div>
        <div className="header-bar">
          <div>
            <h2 style={{ textAlign: "center" }}>Header</h2>
            <h4 style={{ textAlign: "center" }}>{counter}</h4>
            <button className="increment" onClick={() => increment()}>
              Increment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
