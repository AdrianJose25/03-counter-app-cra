import React, { useState } from "react";

export const LikeCompo = () => {
  const initialState = {
    like: false,
    likeCount: 0,
    save: false,
  };
  const [state, setState] = useState(initialState);
  const changeLikeState = () => {
    setState((obj) => {
      const count = obj.like === false ? obj.likeCount + 1 : obj.likeCount - 1;
      return {
        ...obj,
        likeCount: count,
        like: !obj.like,
      };
    });
  };
  const changeSaveState = () => {
    setState((obj) => ({
      ...obj,
      save: !obj.save,
    }));
  };
  const likeState = state.like === false ? "corazon" : "corazon_active";
  const saveState = state.save === false ? "guardar" : "guardar_active";
  return (
    <div>
      <div className="footer">
        <div className="footer-icons">
          <span
            className={likeState}
            onClick={changeLikeState}
            id="corazon"
          ></span>
          <span className="burbuja" id=""></span>
          <span className="enviar" id=""></span>
          <div className="guardar-icon-container">
            <span
              className={saveState}
              onClick={changeSaveState}
              id="guardar"
            ></span>
          </div>
        </div>
        <div className="caption-container">
          <h4>
            <span>{state.likeCount}</span> Likes
          </h4>
          <div className="caption">
            <h4>Mono_felix</h4>
            <span>Hola Estoy muy feliz!!! aprediendo React Js</span>
          </div>
        </div>
      </div>
    </div>
  );
};
