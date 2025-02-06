import React, { useEffect, useReducer } from "react";
import { initialState, reducer } from "../helpers/reducer";
const password = "jsx";

export const PracticeReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.loading) {
      dispatch({
        type: "START",
      });
      setTimeout(() => {
        if (state.value === password) {
          dispatch({
            type: "APPROVED",
          });
        } else if (state.value === "") {
          dispatch({
            type: "DATAERR",
          });
        } else {
          dispatch({
            type: "DENIED",
          });
        }
      }, 2000);
    }
  }, [state.loading, state.value]);

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          dispatch({
            type: "ONCHANGE",
            payload: e.target.value,
          });
        }}
      />
      <button
        onClick={() => {
          dispatch({
            type: "ONCLICK",
          });
        }}
      >
        CHECK
      </button>
      {state.approved && <h5>Puede Usted Ingresar</h5>}
      {state.denied && <h5>NO!! Puede Usted Ingresar</h5>}
      {state.dataErr && <h5>Debes Ingresar Algun Dato</h5>}
      {state.loading && <h5>Cargando...</h5>}
    </>
  );
};
