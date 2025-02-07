import React, { useContext } from "react";
import { counterContext } from "../context/counterContext";

export const Footer = ({ children }) => {
  const { decrement } = useContext(counterContext);
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="header-bar">
          <h2>Footer</h2>
        </div>
        <div className="infocard-content">
          <div className="infocard">{children}</div>
          <button className="decrement" onClick={() => decrement()}>
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};
