import React from "react";
import { Show } from "./Show";

export const Circle = ({ id, show, hide }) => {
  return (
    <div className="circles-container">
      {hide === 1 && <Show />}
      {hide === 0 && (
        <div
          className={
            show === 1
              ? "item1"
              : show === 2
              ? "item2"
              : show === 3
              ? "item3"
              : "item"
          }
        ></div>
      )}
      {hide === 0 && (
        <div
          className={
            show === 1
              ? "item1"
              : show === 2
              ? "item2"
              : show === 3
              ? "item3"
              : "item"
          }
        ></div>
      )}
      {hide === 0 && (
        <div
          className={
            show === 1
              ? "item1"
              : show === 2
              ? "item2"
              : show === 3
              ? "item3"
              : "item"
          }
        ></div>
      )}
    </div>
  );
};
